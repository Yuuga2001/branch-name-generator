# Git Branch Name Generator

<p align="center">
  <strong>AIがタスク説明から最適なGitブランチ名を自動生成</strong>
</p>

<p align="center">
  日本語・英語対応 | チケット番号挿入 | 命名規則カスタマイズ
</p>

---

「ログイン機能のバグ修正」「Add user authentication」など、曖昧なタスク説明を入力するだけで、AIがチームの命名規則に沿った適切なGitブランチ名を5つ提案します。

もう「ブランチ名どうしよう...」と悩む時間は不要です。

![App Screenshot](./public/screenshot.png)

## Demo

[https://branch-name-generator.amplifyapp.com/](https://branch-name-generator.amplifyapp.com/)

## Features

- **AIによるスマート生成** - OpenAI GPT-3.5-turboが説明文から意味のあるブランチ名を5つ提案
- **日本語完全対応** - 日本語の説明を適切な英語のブランチ名に自動変換（ローマ字ではなく意味のある英語に）
- **リアルタイムプレビュー** - 設定変更時に出力フォーマットを即座に確認
- **チケット番号対応** - Jira、GitHub Issueなどのチケット番号を自動挿入
  - `#`の有無、区切り文字（`/`, `-`, `_`）をカスタマイズ可能
  - 例: `feature/#123/add-login`, `fix/456-auth-bug`
- **柔軟なフォーマット設定**
  - **Prefix**: `feature/`, `bugfix/`, `hotfix/`, `fix/`、またはカスタム入力
  - **Case Style**: `camelCase`, `snake_case`, `kebab-case`, `PascalCase`, `UPPER_CASE`, `lower case`
  - **Word Separator**: `-`（ハイフン）または `_`（アンダースコア）
- **キーボードショートカット** - `Cmd + Enter`（Mac）/ `Ctrl + Enter`（Windows/Linux）で素早く生成
- **ワンクリックコピー** - 生成されたブランチ名をクリップボードに即座にコピー

## Tech Stack

| Category | Technology |
|----------|------------|
| Frontend | React 19 |
| Build Tool | Vite 7 |
| AI | OpenAI API (GPT-3.5-turbo) |
| Icons | react-icons |
| Styling | Vanilla CSS (CSS Variables, Glass Morphism) |

## Getting Started

### Prerequisites

- Node.js 18以上
- OpenAI APIキー（[取得はこちら](https://platform.openai.com/api-keys)）

### Installation

```bash
# リポジトリをクローン
git clone https://github.com/your-username/branch-name-generator.git
cd branch-name-generator

# 依存関係をインストール
npm install
```

### Environment Setup

プロジェクトルートに`.env`ファイルを作成し、OpenAI APIキーを設定します。

```env
VITE_OPENAI_API_KEY=your_openai_api_key_here
```

> **Warning**
> APIキーは外部に漏洩しないよう厳重に管理してください。`.env`ファイルはGitにコミットしないでください。

### Run Development Server

```bash
npm run dev
```

ブラウザで表示されるURL（通常は `http://localhost:5173`）にアクセスしてください。

### Other Commands

```bash
# 本番ビルド
npm run build

# ビルドプレビュー
npm run preview

# ESLint実行
npm run lint
```

## Usage

1. **タスク説明を入力**
   「ログイン画面のバリデーション修正」や「Add user authentication」のように入力

2. **オプション設定**
   - Prefixを選択（`feature/`, `bugfix/`, `hotfix/`, `fix/`、またはカスタム）
   - Case StyleとWord Separatorを選択
   - 必要に応じてチケット番号を設定

3. **生成**
   「Generate」ボタンをクリック、または `Cmd + Enter` で生成

4. **コピー**
   気に入ったブランチ名の右側にあるコピーアイコンをクリック

## Project Structure

```
branch-name-generator/
├── public/
│   ├── favicon.png
│   ├── apple-touch-icon.png
│   ├── og-image.png
│   └── screenshot.png
├── src/
│   ├── components/
│   │   ├── BranchGenerator.jsx  # メインコンポーネント
│   │   ├── OptionsPanel.jsx     # オプション設定パネル
│   │   └── ResultList.jsx       # 結果表示リスト
│   ├── services/
│   │   └── openai.js            # OpenAI API連携
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## License

MIT

---

<p align="center">
  Powered by OpenAI | Built with React & Vite
</p>
