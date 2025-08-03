#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const isProduction = process.env.NODE_ENV === 'production';

console.log('🔨 ビルド開始...');
console.log(`環境: ${isProduction ? '本番' : '開発'}`);

// ビルド設定
const config = {
  srcDir: 'src',
  distDir: 'dist',
  production: isProduction
};

// distディレクトリの作成
if (!fs.existsSync(config.distDir)) {
  fs.mkdirSync(config.distDir, { recursive: true });
  console.log('📁 distディレクトリを作成しました');
}

// HTMLファイルのコピー
const htmlFiles = fs.readdirSync('.').filter(file => file.endsWith('.html'));
htmlFiles.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  
  if (isProduction) {
    // 本番環境用の最適化
    content = content.replace(/console\.(log|debug|info)\([^)]*\);?/g, '');
    content = content.replace(/\/\*[\s\S]*?\*\//g, ''); // コメント削除
    // デバッグ設定の無効化
    content = content.replace(/<script[^>]*debug-config\.js[^>]*><\/script>/g, '');
  }
  
  fs.writeFileSync(path.join(config.distDir, file), content);
});

// srcディレクトリがある場合の処理
if (fs.existsSync(config.srcDir)) {
  // CSS, JSファイルのコピー
  copyDirectory(config.srcDir, config.distDir);
}

// 追加ファイルのコピー
const additionalFiles = ['debug-config.js'];
additionalFiles.forEach(file => {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    if (isProduction) {
      // 本番環境では空のファイルとして扱う
      content = '// Debug configuration disabled in production';
    }
    fs.writeFileSync(path.join(config.distDir, file), content);
  }
});

console.log('✅ ビルド完了！');

function copyDirectory(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }
  
  const files = fs.readdirSync(src);
  
  files.forEach(file => {
    const srcPath = path.join(src, file);
    const destPath = path.join(dest, file);
    
    if (fs.statSync(srcPath).isDirectory()) {
      copyDirectory(srcPath, destPath);
    } else {
      let content = fs.readFileSync(srcPath, 'utf8');
      
      // ファイルタイプ別の処理
      if (file.endsWith('.js') && config.production) {
        // 本番環境用JS最適化
        content = content.replace(/console\.(log|debug|info)\([^)]*\);?/g, '');
        content = content.replace(/\/\*[\s\S]*?\*\//g, '');
        content = content.replace(/\/\/.*$/gm, '');
      }
      
      fs.writeFileSync(destPath, content);
    }
  });
}