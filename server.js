/**
 * Created by wesley on 23/05/2017.
 */
'use strict';
var AV = require('leanengine');

AV.init({
  appId: "LYUnOXIPalmJ1mqkdI3Lb3o2-MdYXbMMI",
  appKey: "BabusVKkYnakINXThVIV7qfH",
  // 启用美国节点
  region: 'us'
});


// 端口一定要从环境变量 `LEANCLOUD_APP_PORT` 中获取。
// LeanEngine 运行时会分配端口并赋值到该变量。
var PORT = parseInt(process.env.LEANCLOUD_APP_PORT || 4000);
app.listen(PORT, function () {
  console.log('Node app is running, port:', PORT);

  // 注册全局未捕获异常处理器
  process.on('uncaughtException', function(err) {
    console.error("Caught exception:", err.stack);
  });
  process.on('unhandledRejection', function(reason, p) {
    console.error("Unhandled Rejection at: Promise ", p, " reason: ", reason.stack);
  });
});
