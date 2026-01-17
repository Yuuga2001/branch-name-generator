# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## コマンド

```bash
# 開発サーバー起動
npm run dev

# 本番ビルド
npm run build

# ESLint実行
npm run lint

# ビルドプレビュー
npm run preview
```

## アーキテクチャ

React + Vite のシングルページアプリケーション。タスク説明文からGitブランチ名をAI生成するツール。

### コンポーネント構成

- `App.jsx` - ルートコンポーネント（ヘッダー、フッター、レイアウト）
- `components/BranchGenerator.jsx` - メインコンポーネント。入力、状態管理、生成ロジックを統括
- `components/OptionsPanel.jsx` - ブランチ名オプション（prefix、case style、チケット番号など）
- `components/ResultList.jsx` - 生成結果の表示とコピー機能

### サービス

- `services/openai.js` - OpenAI API連携。`generateBranchNames()`がGPT-3.5-turboでブランチ名slug（5件）を生成し、オプション（prefix、チケット番号）を結合して最終ブランチ名を構築

## 環境変数

`.env`ファイルに設定:
```
VITE_OPENAI_API_KEY=your_openai_api_key_here
```
