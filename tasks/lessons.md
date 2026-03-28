# Lessons Learned

## 2026-03-28: OpenAI CORS問題 → Amplify Gen 2 Lambda プロキシ移行

### 問題
- OpenAIがブラウザからのCORSサポートを廃止し、フロントエンドからの直接API呼び出しが失敗するようになった
- `dangerouslyAllowBrowser: true` はSDK側の警告抑制のみで、CORS問題は解決しない

### 教訓

1. **外部APIをフロントエンドから直接呼ばない**
   - CORSポリシーはAPI提供側がいつでも変更できる
   - APIキーがブラウザに露出するセキュリティリスクがある
   - 必ずサーバーサイドプロキシを経由すること

2. **Amplify Gen 2 の secret() はSSM Parameter Storeに実体が必要**
   - `secret('KEY_NAME')` はLambda環境変数にプレースホルダー `<value will be resolved during runtime>` を設定する
   - 実行時にSSMから取得する仕組み
   - Amplify Console の「Environment Variables」と「Secrets」は別物
   - SSMの正しいパス（`/amplify/{appId}/{branch}/KEY_NAME`）に SecureString として登録が必要

3. **npm ci はCI環境とローカルのnpmバージョン差で壊れやすい**
   - lockfileVersion 3 でもnpmのマイナーバージョン差でエラーになることがある
   - CI環境では `npm install` の方が堅牢（厳密な再現性が不要な場合）

4. **Lambda関数の依存はルートpackage.jsonとは別管理**
   - `amplify/functions/xxx/package.json` にLambda固有の依存を記述
   - CIでは関数ディレクトリでも `npm install` が必要
   - esbuildがバンドルするが、node_modulesに実体が必要

5. **APIキーをGitにコミットしない（絶対）**
   - 一度コミットすると履歴に永久に残る
   - 削除しても `git log -p` で復元可能
   - git-filter-repo + force push + キーのRevoke が必要になる
   - テストスクリプトでも `.env` から読むべき

6. **コマンド実行時のカレントディレクトリに注意**
   - `unzip` などでcwdが変わることがある
   - `npm install` が意図しないディレクトリで実行されると、変更がコミットに含まれない
   - 常に絶対パスで `cd` してから操作すること
