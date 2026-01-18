# Branch Name Generator (ブランチ名生成ツール)

タスクの説明文を入力するだけで、AIが最適なGitブランチ名を提案してくれるReactアプリケーションです。
日本語や英語の曖昧なタスク内容でも、開発の文脈を理解して「feature/」や「fix/」などの適切なプレフィックスと共に、命名規則に沿ったブランチ名を生成します。

## ✨主な機能

*   **AIによるスマート生成**: OpenAI (GPT-3.5-turbo) を利用し、説明文から簡潔で意味のあるブランチ名を5つ提案します。日本語の説明も適切な英語のブランチ名に変換されます。
*   **リアルタイムプレビュー**: 設定を変更すると、生成されるブランチ名のフォーマットがリアルタイムでプレビュー表示されます。
*   **チケット番号対応**: JiraやGitHubのIssue番号を含めたブランチ名を生成できます。
    *   フォーマット例: `feature/#123/login-fix` や `fix/456-auth-bug`
    *   `#` の有無や区切り文字（`/`, `-`, `_`）を自由にカスタマイズ可能。
*   **柔軟なフォーマット設定**:
    *   **Prefix**: `feature/`, `bugfix/`, `hotfix/`, `fix/`、またはカスタム入力
    *   **Case Style**: `camelCase`, `snake_case`, `kebab-case`, `PascalCase`, `UPPER_CASE`, `lower case`
    *   **Word Separator**: 単語間の区切り文字（`-` または `_`）を指定可能
*   **キーボードショートカット**: `Cmd + Enter`（Mac）または `Ctrl + Enter`（Windows/Linux）で素早く生成
*   **モダンなUI**: グラスモーフィズムを採用した視認性の高いデザイン

## 🛠️ 使用技術

*   React 19
*   Vite 7
*   OpenAI API (GPT-3.5-turbo)
*   react-icons
*   Vanilla CSS (CSS Variables & Glass Morphism)

## 🚀 セットアップ手順

このプロジェクトをローカルで実行するには、以下の手順に従ってください。

### 1. リポジトリのクローンとインストール

```bash
git clone <repository-url>
cd branch-name-generator
npm install
```

### 2. 環境変数の設定

OpenAI APIキーが必要です。プロジェクトルートに `.env` ファイルを作成し、以下のようにキーを設定してください。

```bash
# .env ファイルを作成
touch .env
```

**.env の内容:**
```env
VITE_OPENAI_API_KEY=your_openai_api_key_here
```
> ⚠️ **注意**: APIキーは外部に漏洩しないよう管理してください。

### 3. アプリケーションの実行

```bash
npm run dev
```
ブラウザで `http://localhost:3001` (または表示されるポート) にアクセスしてください。

## 💡 使い方

1.  **タスク説明を入力**: 「ログイン画面のバリデーション修正」や「Add user authentication」のように入力します。
2.  **オプション設定**:
    *   Prefixを選択（`feature/`, `bugfix/`, `hotfix/`, `fix/`、またはカスタム入力）
    *   Case StyleとWord Separatorを選択
    *   チケット番号がある場合は「Include Ticket / Issue Number」にチェックを入れ、番号を入力
3.  **生成**: 「Generate」ボタンをクリック、または `Cmd + Enter` で生成
4.  **コピー**: 気に入ったブランチ名の右側にあるコピーアイコンをクリックしてクリップボードにコピー

