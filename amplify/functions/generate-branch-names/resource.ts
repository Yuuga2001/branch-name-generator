import { defineFunction, secret } from '@aws-amplify/backend';

export const generateBranchNames = defineFunction({
  name: 'generate-branch-names',
  entry: './handler.ts',
  timeoutSeconds: 30,
  environment: {
    OPENAI_API_KEY: secret('OPENAI_API_KEY'),
  },
});
