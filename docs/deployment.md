# デプロイメント設定

## 🌐 GitHub Pages設定

### 基本情報
- **リポジトリ**: https://github.com/osawata36/kids-summer-homework
- **ライブURL**: https://osawata36.github.io/kids-summer-homework/
- **デプロイ方法**: GitHub Actions自動デプロイ

## 🔄 自動デプロイフロー

### トリガー条件
1. **自動実行**:
   - `main`ブランチへのプッシュ
   - プルリクエストの作成・更新

2. **手動実行**:
   - GitHubのActionsタブから手動トリガー可能

### デプロイプロセス
```mermaid
graph LR
    A[コードプッシュ] --> B[GitHub Actions起動]
    B --> C[依存関係インストール]
    C --> D[本番ビルド実行]
    D --> E[GitHub Pages公開]
    E --> F[ライブサイト更新]
```

## 🛠 GitHub Actions設定

### ワークフローファイル
`.github/workflows/pages.yml`

### 主な処理内容
1. **Build Job**:
   - Node.js 18セットアップ
   - `npm ci` で依存関係インストール
   - `npm run build` で本番ビルド
   - `dist/` フォルダをアーティファクトとしてアップロード

2. **Deploy Job**:
   - ビルドしたアーティファクトをGitHub Pagesに公開

### 本番ビルドの最適化
- `console.log` 等のデバッグコード削除
- コメント削除
- `debug-config.js` の無効化

## 📋 手動デプロイ手順

### 1. GitHub Actionsから実行
1. https://github.com/osawata36/kids-summer-homework/actions にアクセス
2. 左側の「Deploy to GitHub Pages」を選択
3. 「Run workflow」ボタンをクリック
4. 「Run workflow」を確認してクリック

### 2. ローカルから本番ビルドテスト
```bash
# 本番ビルドを実行
npm run build

# dist/フォルダの内容確認
ls -la dist/

# ローカルで本番版をテスト
cd dist && python3 -m http.server 8000
```

## 🎯 デプロイ後の確認項目

### 1. 基本動作確認
- [ ] https://osawata36.github.io/kids-summer-homework/ にアクセス可能
- [ ] iPad/iPhoneでの表示確認
- [ ] タッチ操作の動作確認

### 2. 機能確認
- [ ] モックアップの表示
- [ ] レスポンシブデザインの動作
- [ ] 各UI要素の表示

### 3. パフォーマンス確認
- [ ] 読み込み速度
- [ ] モバイルでの操作性
- [ ] 各ブラウザでの互換性

## 🔧 トラブルシューティング

### デプロイが失敗する場合
1. **Actions タブでエラーログ確認**
2. **依存関係の問題**:
   ```bash
   npm ci
   npm run build
   ```
3. **権限の問題**: リポジトリ設定でPages権限確認

### サイトが更新されない場合
1. **キャッシュクリア**: ブラウザのハードリロード
2. **GitHub Pages設定確認**: Settings > Pages
3. **DNS伝播待ち**: 最大10分程度待機

### 本番とローカルの違い
- **デバッグ機能**: 本番では無効化
- **ログ出力**: 本番では削除
- **パス設定**: GitHub Pagesのサブディレクトリ対応

## 📝 デプロイメント履歴

デプロイ履歴は以下で確認可能:
- **Actions**: https://github.com/osawata36/kids-summer-homework/actions
- **Deployments**: https://github.com/osawata36/kids-summer-homework/deployments

## 🚀 今後のデプロイ戦略

### 開発フロー
1. **feature** ブランチで機能開発
2. **main** ブランチにマージ
3. **自動デプロイ** でライブ環境更新

### リリース管理
- タグ付けによるバージョン管理
- リリースノートの作成
- ロールバック手順の確立