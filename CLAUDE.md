# 子供の宿題管理アプリ - プロジェクト情報

## プロジェクト概要
- **対象ユーザー**: 10歳の子供（iPad/iPhoneブラウザ使用）
- **目的**: 宿題タスクの完了・未完了状況の管理
- **技術**: Webアプリ（LocalStorage使用、バックエンド不要）

## 重要な情報
- PRD.md: 日本語の要件定義書
- docsディレクトリ: 8つの機能詳細説明
- mockup.html: UIモックアップ（サンプルデータ付き）

## プロジェクト構造
```
/
├── PRD.md (要件定義書)
├── mockup.html (UIモックアップ)
└── docs/ (機能詳細説明)
    ├── feature-overview.md (機能一覧と実装順序)
    ├── 001-data-storage.md (ローカルデータストレージ)
    ├── 002-task-display.md (タスク一覧表示)
    ├── 003-task-completion-toggle.md (タスク完了切り替え)
    ├── 004-task-addition.md (タスク追加)
    ├── 005-category-filter.md (カテゴリフィルター)
    ├── 006-progress-stats.md (進捗統計表示)
    ├── 007-responsive-design.md (レスポンシブデザイン)
    └── 008-data-initialization.md (データ初期化)
```

## 推奨実装順序
1. **001-data-storage** (最高優先度)
2. **002-task-display** (高優先度)
3. **003-task-completion-toggle** (高優先度)
4. 以降は docs/feature-overview.md を参照

## カテゴリ設定
- 算数
- 国語
- 理科
- その他

## 技術要件
- iPad/iPhoneブラウザ対応
- LocalStorageでのデータ永続化
- 通知機能なし
- バックエンドデータベース不要
- 日本語UI

## 開発環境
### セットアップ・起動
```bash
npm run setup    # 初回セットアップ
npm run dev      # 開発サーバー起動 (localhost:3000)
npm run debug    # デバッグモードで起動
npm run build    # 本番用ビルド
```

### デバッグ機能
- **テストデータ**: `debugHelpers.loadTestData()`
- **データクリア**: `debugHelpers.clearStorage()`  
- **データ表示**: `debugHelpers.showCurrentData()`
- **デバッグ情報**: `debugHelpers.showDebugInfo()`

### 実機テスト
- iPad/iPhone: `http://[MacのIP]:3000`
- IP確認: `ifconfig | grep "inet " | grep -v 127.0.0.1`

### 技術スタック
- **Frontend**: HTML5 + CSS3 + Vanilla JavaScript (ES6+)
- **データ**: LocalStorage API
- **開発**: live-server + 自動リロード
- **デバッグ**: debug-config.js + ブラウザコンソール

## 注意事項
- 子供向けのシンプルで直感的なUI
- タッチ操作に適したデザイン
- 実装前に各機能のドキュメントを必ず確認
- 新規ファイル作成よりも既存ファイル編集を優先
- 開発時は `docs/development-setup.md` を参照