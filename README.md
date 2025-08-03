# 📚 子供の宿題管理アプリ

10歳の子供が自分で宿題の完了状況を管理できるシンプルなWebアプリです。

## 🌐 ライブデモ

**GitHub Pages**: https://osamu.github.io/kids-summer-homework/

> iPadやiPhoneのSafariでアクセスしてください

## ✨ 主な機能

- ✅ **タスク管理**: 宿題の追加・完了マーク
- 📂 **カテゴリ分け**: 算数・国語・理科・その他で整理
- 🔍 **フィルター**: カテゴリ別表示
- 📊 **進捗表示**: 完了・未完了の統計
- 💾 **データ保存**: ブラウザに自動保存（リロード後も維持）
- 📱 **モバイル対応**: iPad/iPhone最適化

## 🎯 対象ユーザー

- **主要ユーザー**: 10歳の子供（iPad/iPhoneブラウザ使用）
- **副次ユーザー**: 親（監督・管理）

## 🛠 技術スタック

- **Frontend**: HTML5 + CSS3 + Vanilla JavaScript (ES6+)
- **データ**: LocalStorage API
- **デプロイ**: GitHub Pages
- **開発**: live-server + 自動リロード

## 🚀 開発環境

### セットアップ
```bash
git clone https://github.com/osamu/kids-summer-homework.git
cd kids-summer-homework
npm run setup
```

### 開発サーバー起動
```bash
npm run dev      # localhost:3000で起動
npm run debug    # デバッグモードで起動
```

### 本番ビルド
```bash
npm run build    # dist/フォルダに出力
```

## 📋 デバッグ機能

開発環境でブラウザコンソールから利用可能：

```javascript
// テストデータを読み込み
debugHelpers.loadTestData()

// データをクリア
debugHelpers.clearStorage()

// 現在のデータを表示
debugHelpers.showCurrentData()

// デバッグ情報を表示
debugHelpers.showDebugInfo()
```

## 📁 プロジェクト構造

```
/
├── index.html              # メインアプリ（未実装）
├── mockup.html            # UIモックアップ（現在利用可能）
├── src/                   # ソースコード
├── docs/                  # 機能ドキュメント
│   ├── PRD.md            # 要件定義書
│   ├── 001-008-*.md      # 機能詳細説明
│   └── development-setup.md
├── scripts/               # ビルドスクリプト
└── .github/workflows/     # GitHub Actions設定
```

## 📖 ドキュメント

- [要件定義書 (PRD)](./PRD.md)
- [機能一覧](./docs/feature-overview.md)
- [技術選定](./docs/technology-selection.md)
- [開発環境セットアップ](./docs/development-setup.md)

## 🎨 デザインコンセプト

- 子供向けのシンプルで直感的なUI
- タッチ操作に適したデザイン
- 明るく親しみやすい色合い
- 大きなボタンとクリアな視覚的フィードバック

## 📱 実機テスト

iPad/iPhoneでの動作確認手順：

1. 開発サーバー起動: `npm run dev`
2. MacのIPアドレス確認: `ifconfig | grep inet`
3. iPad/iPhoneのSafariで `http://[MacのIP]:3000` にアクセス

## 🔄 デプロイメント

GitHub Pagesへの自動デプロイ：

1. `main`ブランチにプッシュ
2. GitHub Actionsが自動実行
3. `dist/`フォルダの内容がGitHub Pagesに公開

## 📝 ライセンス

MIT License

## 🤝 貢献

このプロジェクトは子供の教育支援を目的としています。
改善提案やバグ報告をお待ちしています。