import OpenAI from "openai";

const API_KEY = import.meta.env.VITE_OPENAI_API_KEY;

// Remove top-level initialization
// const openai = new OpenAI({ ... });

export async function generateBranchNames(description, options) {
    if (!API_KEY) {
        throw new Error("API Key is missing. Please check your .env file or deployment settings.");
    }

    // Initialize OpenAI client lazily to prevent top-level crashes if key is missing
    const openai = new OpenAI({
        apiKey: API_KEY,
        dangerouslyAllowBrowser: true
    });

    const { prefix, caseStyle, separator, includeTicket, ticketNumber, useHashPrefix, ticketSeparator } = options;

    const prompt = `
    User Description: "${description}"

    上記の日本語や英語での曖昧なイメージの文章やフレーズから、適切な英語のGitブランチ名に変換してください。
    ブランチ名は、わかりやすく、簡潔で、Gitブランチ名として適切なものにしてください。

    Task: Generate 5 git branch name "slugs" based on the user description above.

    IMPORTANT:
    - ALWAYS translate Japanese descriptions into meaningful English words.
    - DO NOT use romaji (Japanese words written in alphabet). Use proper English translations.
    - For example: "ログイン機能の修正" should become "fix-login" or "login-fix", NOT "login-kinou-no-shuusei".

    DEFINITION: A "slug" is just the descriptive part of the branch name.
    - DO NOT include the prefix (e.g., do NOT start with "feature/" or "fix/").
    - DO NOT include ticket numbers.
    - ONLY output the descriptive words joined by the separator.

    Configuration:
    1. Case Style: "${caseStyle}"
       - options: "camelCase", "PascalCase", "snake_case", "kebab-case", "UPPER_CASE", "lower case"

    2. Separator (for words in the slug): "${separator}"
       - Use this to join the words.

    Output Requirement:
    - Return a JSON object with a single key "branchNames" which is an ARRAY of strings.
    - { "branchNames": ["slug-one", "slug-two", ...] }
    `;

    try {
        const completion = await openai.chat.completions.create({
            messages: [{ role: "system", content: "You are a helpful assistant." }, { role: "user", content: prompt }],
            model: "gpt-3.5-turbo",
            response_format: { type: "json_object" },
        });

        const content = completion.choices[0].message.content;
        const parsed = JSON.parse(content);

        let slugs = parsed.branchNames || [];
        // Fallback for edge cases where AI might return just an array or object values
        if (!Array.isArray(slugs)) {
            const values = Object.values(parsed);
            if (values.every(v => typeof v === 'string')) {
                slugs = values;
            }
        }

        // Construct full branch names
        const finalNames = slugs.map(slug => {
            let fullBranch = "";

            // 1. Prefix
            if (prefix && prefix !== 'none') {
                fullBranch += prefix;
                // If the user selected a custom prefix that doesn't have a slash, should we add it? 
                // The current requirements say 'Ensure the prefix ends with / if it is a standard prefix'. 
                // But usually the UI values 'feature/' already have it. 
                // We'll trust the input 'prefix' value contains the separator if needed.
            }

            // 2. Ticket Number (IMMEDIATELY AFTER PREFIX)
            if (includeTicket && ticketNumber) {
                const hashPart = useHashPrefix ? "#" : "";
                fullBranch += `${hashPart}${ticketNumber}${ticketSeparator}`;
            }

            // 3. Slug
            fullBranch += slug;

            return fullBranch;
        });

        return finalNames;

    } catch (error) {
        console.error("OpenAI API Error:", error);
        throw new Error("Failed to generate branch names: " + error.message);
    }
}
