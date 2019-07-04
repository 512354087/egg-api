/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1562204850707_2454';

  // add your middleware config here
  config.middleware = [];

  // 配置socket.io
  config.io = {
    csrf: {
      enable: false,
    },
  };
  // 开启cors模块
  config.cors = {
    namespace: {
      '/': {
        connectionMiddleware: [ ],
        packetMiddleware: [ ], // 针对消息的处理暂时不实现
      },
    },
  };

  // 关闭csrf 安全防护
  config.security = {
    csrf: {
      enable: false,
    },
  };


  // add your user config here
  const userConfig = {
    // myAppName: 'egg',

  };

  return {
    ...config,
    ...userConfig,
  };
};
