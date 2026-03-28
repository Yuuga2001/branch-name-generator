import outputs from '../../amplify_outputs.json';

const FUNCTION_URL = outputs.custom.generateBranchNamesUrl;

export async function generateBranchNames(description, options) {
    const { prefix, caseStyle, separator, includeTicket, ticketNumber, useHashPrefix, ticketSeparator } = options;

    const response = await fetch(FUNCTION_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ description, caseStyle, separator }),
    });

    if (!response.ok) {
        const error = await response.json().catch(() => ({ error: 'Unknown error' }));
        throw new Error(error.error || `API error: ${response.status}`);
    }

    const { branchNames: slugs } = await response.json();

    // Construct full branch names
    const finalNames = slugs.map(slug => {
        let fullBranch = "";

        // 1. Prefix
        if (prefix && prefix !== 'none') {
            fullBranch += prefix;
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
}
