# Branch Name Generator (ブランチ名生成ツール)

タスクの説明文を入力するだけで、AIが最適なGitブランチ名を提案してくれるReactアプリケーションです。
曖昧なタスク内容でも、開発の文脈を理解して「feature/」や「fix/」などの適切なプレフィックスと共に、命名規則に沿ったブランチ名を生成します。

![App Screenshot](./branch-name.png)

## ✨主な機能

*   **AIによるスマート生成**: OpenAI (GPT-3.5) を利用し、説明文から簡潔で意味のあるブランチ名を5つ提案します。
*   **チケット番号対応**: JiraやGitHubのIssue番号を含めたブランチ名を生成できます。
    *   フォーマット例: `feature/#123/login-fix` や `fix/456-auth-bug`
    *   `#` の有無や区切り文字（`/`, `-`, `_`）を自由にカスタマイズ可能。
*   **柔軟なフォーマット設定**:
    *   **Prefix**: `feature`, `fix`, `hotfix`, `release` など
    *   **Case Style**: `kebab-case`, `snake_case`, `camelCase` など
    *   **Separator**: 単語間の区切り文字を指定可能
*   **モダンなUI**: 視認性の高いライトテーマを採用し、直感的な操作が可能です。

## 🛠️ 使用技術

*   React
*   Vite
*   OpenAI API (GPT-3.5-turbo)
*   Vanilla CSS (Variables & Scoped Styles)

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

1.  **タスク説明を入力**: "ログイン画面のバリデーション修正" のように入力します。
2.  **オプション設定**:
    *   チケット番号がある場合は "Include Ticket / Issue Number" にチェックを入れ、番号を入力します。
    *   Prefixや命名規則（ケバブケース等）を選択します。
3.  **Generateボタンをクリック**: AIがブランチ名を提案します。
4.  **コピー**: 気に入ったブランチ名の右側にあるコピーアイコンをクリックしてクリップボードにコピーします。

