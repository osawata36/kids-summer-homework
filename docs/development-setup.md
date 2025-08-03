# 開発環境セットアップ

## 🚀 クイックスタート

### 1. リポジトリクローン
```bash
git clone https://github.com/osawata36/kids-summer-homework.git
cd kids-summer-homework
```

### 2. セットアップ
```bash
npm run setup
```

### 3. 開発サーバー起動
```bash
npm run dev
```
ブラウザで http://localhost:3000 が自動で開きます

## 🌐 本番環境

**GitHub Pages**: https://osawata36.github.io/kids-summer-homework/

> 現在はモックアップが表示されます。実装完了後に実際のアプリが利用可能になります。

## 📋 利用可能なコマンド

| コマンド | 説明 | ポート |
|---------|------|--------|
| `npm run dev` | 開発サーバー起動（推奨） | 3000 |
| `npm run serve` | 別ポートでサーバー起動 | 8080 |
| `npm run debug` | 詳細ログ付きで起動 | 3000 |
| `npm run build` | 本番用ビルド | - |
| `npm run clean` | ビルドファイル削除 | - |

## 🛠 開発環境の特徴

### 自動リロード
- ファイル変更時に自動でブラウザがリロード
- HTML, CSS, JavaScript全て対応

### デバッグ機能
開発時は `debug-config.js` が自動読み込みされ、以下の機能が利用可能：

#### ブラウザコンソールコマンド
```javascript
// テストデータを読み込み
debugHelpers.loadTestData()

// LocalStorageをクリア
debugHelpers.clearStorage()

// 現在のデータを表示（テーブル形式）
debugHelpers.showCurrentData()

// デバッグ情報を表示
debugHelpers.showDebugInfo()
```

#### ログレベル設定
```javascript
// ログレベルの変更（0=ERROR, 1=WARN, 2=INFO, 3=DEBUG）
window.DEBUG_CONFIG.currentLogLevel = 2
```

### ネットワークアクセス
- `--host=0.0.0.0` により、同一ネットワーク内の他デバイスからアクセス可能
- iPadからテスト: `http://[あなたのMacのIP]:3000`

## 📱 実機テスト

### iPad/iPhoneでのテスト手順
1. MacとiPad/iPhoneを同じWi-Fiに接続
2. Macで `npm run dev` を実行
3. MacのIPアドレスを確認: `ifconfig | grep inet`
4. iPad/iPhoneのSafariで `http://[MacのIP]:3000` にアクセス

### IP確認コマンド
```bash
# MacのIPアドレス確認
ifconfig | grep "inet " | grep -v 127.0.0.1
```

## 🐛 デバッグ用機能

### 1. ログシステム
```javascript
// 使用例
debugLog.info('タスクを追加しました', taskData);
debugLog.error('保存に失敗しました', error);
debugLog.task('タスク完了', task);
debugLog.localStorage('データ保存', data);
```

### 2. パフォーマンス測定
```javascript
// 処理時間の測定
const start = performance.now();
// 何かの処理
const end = performance.now();
debugLog.performance('タスク描画', end - start);
```

### 3. テストデータ
- 算数、国語、理科のサンプルタスク
- 完了/未完了の混合状態
- 異なる作成日時

## 🏗 プロジェクト構造

```
/
├── package.json           # npm設定・スクリプト
├── debug-config.js        # デバッグ設定（開発時のみ）
├── index.html            # メインHTMLファイル
├── src/                  # ソースコード
│   ├── styles/           # CSSファイル
│   ├── scripts/          # JavaScriptファイル
│   └── assets/           # 画像・リソース
├── scripts/              # ビルドスクリプト
│   └── build.js          # 本番ビルド用
├── docs/                 # ドキュメント
└── dist/                 # ビルド出力（自動生成）
```

## 🔧 トラブルシューティング

### ポートが使用中の場合
```bash
# プロセスを確認
lsof -i :3000

# プロセスを終了
kill -9 [プロセスID]
```

### 権限エラーの場合
```bash
# 権限付与
chmod +x scripts/build.js
```

### iPadからアクセスできない場合
1. Macのファイアウォール設定確認
2. Wi-Fi接続確認
3. IPアドレス確認

## 🚨 本番ビルド時の変更点

本番ビルド (`npm run build`) では以下が自動実行：
- `console.log` 等のデバッグログ削除
- コメント削除
- `debug-config.js` 無効化

## 📝 開発時の推奨ワークフロー

1. `npm run dev` でサーバー起動
2. ブラウザで動作確認
3. `debugHelpers.loadTestData()` でテストデータ読み込み
4. 機能実装・テスト
5. iPadで実機確認
6. 必要に応じて `npm run build` で本番確認