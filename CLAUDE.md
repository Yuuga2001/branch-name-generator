# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## コマンド

```bash
# 開発サーバー起動（フロントエンド）
npm run dev

# Amplify sandbox起動（バックエンド Lambda をAWSにデプロイ）
npx ampx sandbox

# 本番ビルド
npm run build

# ESLint実行
npm run lint

# ビルドプレビュー
npm run preview
```

## アーキテクチャ

React + Vite フロントエンド + AWS Amplify Gen 2 バックエンド（Lambda Function URL）。
タスク説明文からGitブランチ名をAI生成するツール。

### フロントエンド（src/）

- `App.jsx` - ルートコンポーネント（ヘッダー、フッター、レイアウト）
- `components/BranchGenerator.jsx` - メインコンポーネント。入力、状態管理、生成ロジックを統括
- `components/OptionsPanel.jsx` - ブランチ名オプション（prefix、case style、チケット番号など）
- `components/ResultList.jsx` - 生成結果の表示とコピー機能
- `services/openai.js` - Lambda Function URL経由でブランチ名slugを取得し、オプション（prefix、チケット番号）を結合して最終ブランチ名を構築

### バックエンド（amplify/）

- `backend.ts` - Amplify Gen 2 バックエンド定義。Lambda Function URL + CORS設定
- `functions/generate-branch-names/handler.ts` - Lambda ハンドラー。OpenAI API（GPT-3.5-turbo）でブランチ名slug（5件）を生成
- `functions/generate-branch-names/resource.ts` - Lambda関数定義。`secret('OPENAI_API_KEY')`でAPIキーを安全に管理

## 環境変数・シークレット

OpenAI APIキーはAmplify Secretsで管理（フロントエンドには露出しない）:
```bash
# ローカル開発
npx ampx sandbox secret set OPENAI_API_KEY

# 本番: Amplify Console > Hosting > Secrets で設定
```

## デプロイ

AWS Amplify Hosting（Gen 2）。`amplify.yml` でバックエンド（Lambda）とフロントエンド（Vite SPA）を順次ビルド・デプロイ。
