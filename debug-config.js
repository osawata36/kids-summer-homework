// デバッグ設定
window.DEBUG_CONFIG = {
  // 開発環境の判定
  isDevelopment: window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1',
  
  // ログレベル設定
  logLevel: {
    ERROR: 0,
    WARN: 1,
    INFO: 2,
    DEBUG: 3
  },
  currentLogLevel: 3, // 開発時は全てログ出力
  
  // デバッグ機能の有効/無効
  features: {
    localStorage: true,     // LocalStorageのデバッグ
    taskManagement: true,   // タスク管理のデバッグ
    ui: true,              // UI操作のデバッグ
    performance: true       // パフォーマンス測定
  },
  
  // テストデータ
  testData: {
    tasks: [
      {
        id: 'test-1',
        text: '【テスト】算数プリント10ページ',
        category: '算数',
        completed: false,
        createdAt: new Date().toISOString()
      },
      {
        id: 'test-2',
        text: '【テスト】漢字練習帳2ページ',
        category: '国語',
        completed: true,
        createdAt: new Date(Date.now() - 86400000).toISOString() // 1日前
      },
      {
        id: 'test-3',
        text: '【テスト】理科の実験レポート',
        category: '理科',
        completed: false,
        createdAt: new Date(Date.now() - 3600000).toISOString() // 1時間前
      }
    ]
  }
};

// デバッグ用ログ関数
window.debugLog = {
  error: (message, data) => {
    if (window.DEBUG_CONFIG.isDevelopment && window.DEBUG_CONFIG.currentLogLevel >= 0) {
      console.error(`🔴 [ERROR] ${message}`, data || '');
    }
  },
  
  warn: (message, data) => {
    if (window.DEBUG_CONFIG.isDevelopment && window.DEBUG_CONFIG.currentLogLevel >= 1) {
      console.warn(`🟡 [WARN] ${message}`, data || '');
    }
  },
  
  info: (message, data) => {
    if (window.DEBUG_CONFIG.isDevelopment && window.DEBUG_CONFIG.currentLogLevel >= 2) {
      console.info(`🔵 [INFO] ${message}`, data || '');
    }
  },
  
  debug: (message, data) => {
    if (window.DEBUG_CONFIG.isDevelopment && window.DEBUG_CONFIG.currentLogLevel >= 3) {
      console.log(`🟢 [DEBUG] ${message}`, data || '');
    }
  },
  
  // 特定機能のデバッグ
  localStorage: (action, data) => {
    if (window.DEBUG_CONFIG.features.localStorage) {
      console.log(`💾 [LocalStorage] ${action}`, data);
    }
  },
  
  task: (action, task) => {
    if (window.DEBUG_CONFIG.features.taskManagement) {
      console.log(`📝 [Task] ${action}`, task);
    }
  },
  
  ui: (action, element) => {
    if (window.DEBUG_CONFIG.features.ui) {
      console.log(`🎨 [UI] ${action}`, element);
    }
  },
  
  performance: (label, time) => {
    if (window.DEBUG_CONFIG.features.performance) {
      console.log(`⚡ [Performance] ${label}: ${time}ms`);
    }
  }
};

// デバッグ用ヘルパー関数
window.debugHelpers = {
  // テストデータをLocalStorageに保存
  loadTestData: () => {
    localStorage.setItem('homework-tasks', JSON.stringify(window.DEBUG_CONFIG.testData.tasks));
    window.debugLog.info('テストデータを読み込みました');
    window.location.reload();
  },
  
  // LocalStorageをクリア
  clearStorage: () => {
    localStorage.clear();
    window.debugLog.info('LocalStorageをクリアしました');
    window.location.reload();
  },
  
  // 現在のデータを表示
  showCurrentData: () => {
    const tasks = JSON.parse(localStorage.getItem('homework-tasks') || '[]');
    console.table(tasks);
    return tasks;
  },
  
  // デバッグ情報を表示
  showDebugInfo: () => {
    console.log('=== デバッグ情報 ===');
    console.log('環境:', window.DEBUG_CONFIG.isDevelopment ? '開発' : '本番');
    console.log('ログレベル:', window.DEBUG_CONFIG.currentLogLevel);
    console.log('LocalStorage使用量:', JSON.stringify(localStorage).length + ' 文字');
    console.log('タスク数:', JSON.parse(localStorage.getItem('homework-tasks') || '[]').length);
    console.log('==================');
  }
};

// 開発環境でのみデバッグ用のスタイルを追加
if (window.DEBUG_CONFIG.isDevelopment) {
  // デバッグ用のCSS
  const debugStyle = document.createElement('style');
  debugStyle.textContent = `
    /* デバッグ用の視覚的ヒント */
    [data-debug="true"] {
      border: 2px dashed orange !important;
    }
    
    .debug-info {
      position: fixed;
      top: 10px;
      right: 10px;
      background: rgba(0,0,0,0.8);
      color: white;
      padding: 10px;
      border-radius: 5px;
      font-size: 12px;
      z-index: 9999;
      font-family: monospace;
    }
  `;
  document.head.appendChild(debugStyle);
  
  // デバッグ情報の表示
  window.debugLog.info('デバッグモードが有効です');
  console.log('=== 利用可能なデバッグコマンド ===');
  console.log('debugHelpers.loadTestData() - テストデータを読み込み');
  console.log('debugHelpers.clearStorage() - データをクリア');  
  console.log('debugHelpers.showCurrentData() - 現在のデータを表示');
  console.log('debugHelpers.showDebugInfo() - デバッグ情報を表示');
  console.log('============================');
}