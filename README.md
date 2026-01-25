<div align="center">

<img src="./public/apple-touch-icon.png" alt="Git Branch Name Generator Icon" width="120" height="120">

# Git Branch Name Generator

### AI-Powered Git Branch Naming Tool
#### AI駆動のGitブランチ名生成ツール

<div>

[![Live Demo](https://img.shields.io/badge/🚀_今すぐ利用する-Live_Demo-4CAF50?style=for-the-badge)](https://branchnamegenerator.riverapp.jp/)

</div>

[![MIT License](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](LICENSE)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react)](https://react.dev/)
[![OpenAI](https://img.shields.io/badge/OpenAI-GPT--3.5-412991?style=flat-square&logo=openai)](https://openai.com/)

**[🌐 English](#english)** | **[🇯🇵 日本語](#japanese)**

---

</div>

<a name="english"></a>
## 🌍 English

### Overview

**Git Branch Name Generator** is an AI-powered tool that automatically generates optimal Git branch names from task descriptions. Simply input a vague task description like "fix login bug" or "add user authentication," and the AI will suggest 5 appropriate branch names following your team's naming conventions.

No more wasting time thinking "What should I name this branch...?"

### ✨ Key Features

- **🤖 AI-Powered Smart Generation** - OpenAI GPT-3.5-turbo generates 5 meaningful branch names from descriptions
- **🌏 Full Japanese Support** - Automatically converts Japanese descriptions into meaningful English branch names (not romaji)
- **⚡ Real-time Preview** - Instantly see output format when changing settings
- **🎫 Ticket Number Integration** - Auto-insert ticket numbers from Jira, GitHub Issues, etc.
  - Customize `#` presence and separators (`/`, `-`, `_`)
  - Examples: `feature/#123/add-login`, `fix/456-auth-bug`
- **🎨 Flexible Format Settings**
  - **Prefix**: `feature/`, `bugfix/`, `hotfix/`, `fix/`, or custom input
  - **Case Style**: `camelCase`, `snake_case`, `kebab-case`, `PascalCase`, `UPPER_CASE`, `lower case`
  - **Word Separator**: `-` (hyphen) or `_` (underscore)
- **⌨️ Keyboard Shortcuts** - Quick generation with `Cmd + Enter` (Mac) / `Ctrl + Enter` (Windows/Linux)
- **📋 One-Click Copy** - Instantly copy generated branch names to clipboard

### 🖼️ Screenshot

![App Screenshot](./public/screenshot.png)

### 🚀 Quick Start

**👉 [Try it now at branchnamegenerator.riverapp.jp](https://branchnamegenerator.riverapp.jp/)**

### 📖 How to Use

1. **Enter Task Description**  
   Input something like "Fix login validation" or "ログイン画面のバリデーション修正"

2. **Configure Options**  
   - Select Prefix (`feature/`, `bugfix/`, `hotfix/`, `fix/`, or custom)
   - Choose Case Style and Word Separator
   - Optionally set ticket number

3. **Generate**  
   Click "Generate" button or press `Cmd + Enter`

4. **Copy**  
   Click the copy icon next to your preferred branch name

### 🛠️ Tech Stack

| Category | Technology |
|----------|------------|
| Frontend | React 19 |
| Build Tool | Vite 7 |
| AI | OpenAI API (GPT-3.5-turbo) |
| Icons | react-icons |
| Styling | Vanilla CSS (CSS Variables, Glass Morphism) |

### 💻 Local Development

#### Prerequisites

- Node.js 18 or higher
- OpenAI API key

#### Installation

```bash
# Clone repository
git clone https://github.com/Yuuga2001/branch-name-generator.git
cd branch-name-generator

# Install dependencies
npm install
```

#### Environment Setup

Create a `.env` file in the project root and set your OpenAI API key:

```env
VITE_OPENAI_API_KEY=your_openai_api_key_here
```

> **Warning**  
> Keep your API key secure and never commit `.env` files to Git.

#### Run Development Server

```bash
npm run dev
```

Access the URL shown in your browser (usually `http://localhost:5173`).

#### Other Commands

```bash
# Production build
npm run build

# Preview build
npm run preview

# Run ESLint
npm run lint
```

### 📁 Project Structure

```
branch-name-generator/
├── public/
│   ├── favicon.png
│   ├── apple-touch-icon.png
│   ├── og-image.png
│   └── screenshot.png
├── src/
│   ├── components/
│   │   ├── BranchGenerator.jsx  # Main component
│   │   ├── OptionsPanel.jsx     # Options configuration panel
│   │   └── ResultList.jsx       # Results display list
│   ├── services/
│   │   └── openai.js            # OpenAI API integration
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

### 📄 License

MIT

---

<a name="japanese"></a>
## 🇯🇵 日本語

### 概要

**Git Branch Name Generator**は、タスク説明から最適なGitブランチ名をAIが自動生成するツールです。「ログイン機能のバグ修正」「Add user authentication」など、曖昧なタスク説明を入力するだけで、AIがチームの命名規則に沿った適切なGitブランチ名を5つ提案します。

もう「ブランチ名どうしよう...」と悩む時間は不要です。

### ✨ 主な機能

- **🤖 AIによるスマート生成** - OpenAI GPT-3.5-turboが説明文から意味のあるブランチ名を5つ提案
- **🌏 日本語完全対応** - 日本語の説明を適切な英語のブランチ名に自動変換（ローマ字ではなく意味のある英語に）
- **⚡ リアルタイムプレビュー** - 設定変更時に出力フォーマットを即座に確認
- **🎫 チケット番号対応** - Jira、GitHub Issueなどのチケット番号を自動挿入
  - `#`の有無、区切り文字（`/`, `-`, `_`）をカスタマイズ可能
  - 例: `feature/#123/add-login`, `fix/456-auth-bug`
- **🎨 柔軟なフォーマット設定**
  - **Prefix**: `feature/`, `bugfix/`, `hotfix/`, `fix/`、またはカスタム入力
  - **Case Style**: `camelCase`, `snake_case`, `kebab-case`, `PascalCase`, `UPPER_CASE`, `lower case`
  - **Word Separator**: `-`（ハイフン）または `_`（アンダースコア）
- **⌨️ キーボードショートカット** - `Cmd + Enter`（Mac）/ `Ctrl + Enter`（Windows/Linux）で素早く生成
- **📋 ワンクリックコピー** - 生成されたブランチ名をクリップボードに即座にコピー

### 🖼️ スクリーンショット

![App Screenshot](./public/screenshot.png)

### 🚀 クイックスタート

**👉 [今すぐ branchnamegenerator.riverapp.jp で試す](https://branchnamegenerator.riverapp.jp/)**

### 📖 使い方

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

### 🛠️ 技術スタック

| カテゴリ | 技術 |
|----------|------|
| フロントエンド | React 19 |
| ビルドツール | Vite 7 |
| AI | OpenAI API (GPT-3.5-turbo) |
| アイコン | react-icons |
| スタイリング | Vanilla CSS (CSS Variables, Glass Morphism) |

### 💻 ローカル開発

#### 必要要件

- Node.js 18以上
- OpenAI APIキー

#### インストール

```bash
# リポジトリをクローン
git clone https://github.com/Yuuga2001/branch-name-generator.git
cd branch-name-generator

# 依存関係をインストール
npm install
```

#### 環境設定

プロジェクトルートに`.env`ファイルを作成し、OpenAI APIキーを設定します。

```env
VITE_OPENAI_API_KEY=your_openai_api_key_here
```

> **Warning**  
> APIキーは外部に漏洩しないよう厳重に管理してください。`.env`ファイルはGitにコミットしないでください。

#### 開発サーバーの起動

```bash
npm run dev
```

ブラウザで表示されるURL（通常は `http://localhost:5173`）にアクセスしてください。

#### その他のコマンド

```bash
# 本番ビルド
npm run build

# ビルドプレビュー
npm run preview

# ESLint実行
npm run lint
```

### 📁 プロジェクト構造

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

### 📄 ライセンス

MIT

---

<div align="center">

**Powered by OpenAI | Built with React & Vite**

</div>



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
- OpenAI APIキー

### Installation

```bash
# リポジリをクローン
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
