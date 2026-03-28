import type { APIGatewayProxyHandlerV2 } from 'aws-lambda';
import OpenAI from 'openai';
import { env } from '$amplify/env/generate-branch-names';

let openaiClient: OpenAI | null = null;

function getOpenAIClient(): OpenAI {
  if (!openaiClient) {
    openaiClient = new OpenAI({ apiKey: env.OPENAI_API_KEY });
  }
  return openaiClient;
}

interface RequestBody {
  description: string;
  caseStyle: string;
  separator: string;
}

export const handler: APIGatewayProxyHandlerV2 = async (event) => {
  if (event.requestContext.http.method === 'OPTIONS') {
    return { statusCode: 204, body: '' };
  }

  if (event.requestContext.http.method !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  let body: RequestBody;
  try {
    body = JSON.parse(event.body || '{}');
  } catch {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Invalid JSON body' }),
    };
  }

  const { description, caseStyle, separator } = body;
  if (!description || !caseStyle || !separator) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Missing required fields: description, caseStyle, separator' }),
    };
  }

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
    - DO NOT include the prefix (e.g., do NOT start with "feature/" or "bugfix/" or "fix/").
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
    const openai = getOpenAIClient();
    const completion = await openai.chat.completions.create({
      messages: [
        { role: 'system', content: 'You are a helpful assistant.' },
        { role: 'user', content: prompt },
      ],
      model: 'gpt-3.5-turbo',
      response_format: { type: 'json_object' },
    });

    const content = completion.choices[0].message.content || '{}';
    const parsed = JSON.parse(content);

    let slugs = parsed.branchNames || [];
    if (!Array.isArray(slugs)) {
      const values = Object.values(parsed);
      if (values.every((v) => typeof v === 'string')) {
        slugs = values;
      }
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ branchNames: slugs }),
    };
  } catch (error) {
    console.error('OpenAI API Error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to generate branch names' }),
    };
  }
};
