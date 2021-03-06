const path = require('path');
const { injectBabelPlugin } = require('react-app-rewired');
/**
 * 合成一个决定路径
 */
function resolve(dir) {
  return path.resolve(__dirname, dir);
}
let baseUrl = '/xdnphb/';
let proxyData = {};
let urlList = ['common', 'ade', 'user', 'pay', 'aly', 'knowledgepay', 'account', 'login', 'flowPacket'];
for (let i = 0, len = urlList.length; i < len; i++) {
  let str = urlList[i];
  let proxyPath = baseUrl + str;
  let proxyRewrite = '^' + proxyPath;

  if (str != 'common' && str != 'account') {
    proxyData[proxyPath] = {
      // target: 'http://localhost:209'+proxyPath,
      target: 'http://dev.a.newrank.cn' + proxyPath,
      changeOrigin: true,
      pathRewrite: {}
    };
  } else {
    proxyData[proxyPath] = {
      // target: 'http://localhost'+proxyPath,
      target: 'http://dev.main.newrank.cn' + proxyPath,
      changeOrigin: true,
      pathRewrite: {}
    };
  }

  proxyData[proxyPath].pathRewrite[proxyRewrite] = '';
}
module.exports = function override(config, env) {
  config = injectBabelPlugin(
    [
      'import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: 'css'
      }
    ],
    config
  );
  Object.assign(config.resolve.alias, { '@': resolve('src') });
  console.log(config);
  return config;
};
