import { defineBackend } from '@aws-amplify/backend';
import { FunctionUrlAuthType, HttpMethod } from 'aws-cdk-lib/aws-lambda';
import { generateBranchNames } from './functions/generate-branch-names/resource';

const backend = defineBackend({ generateBranchNames });

const functionUrl = backend.generateBranchNames.resources.lambda.addFunctionUrl({
  authType: FunctionUrlAuthType.NONE,
  cors: {
    allowedOrigins: [
      'https://branchnamegenerator.riverapp.jp',
      'http://localhost:5173',
    ],
    allowedMethods: [HttpMethod.POST],
    allowedHeaders: ['Content-Type'],
  },
});

backend.addOutput({
  custom: {
    generateBranchNamesUrl: functionUrl.url,
  },
});
