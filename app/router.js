'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  // router.get('/', controller.home.index);
  router.post('/login', controller.user.login);// 登录
  router.get('/videoList', controller.video.index);
  router.get('/monitor/abnormalStatistics', controller.monitor.abnormalStatistics);
  router.get('/monitor/abnormalMonthStatistics', controller.monitor.abnormalMonthStatistics);
  router.get('/monitor/abnormalList', controller.monitor.abnormalList);
  router.get('/monitor/abnormalVideoList', controller.monitor.abnormalVideoList);
  router.get('/monitor/reportMonthStatistics', controller.monitor.reportMonthStatistics); // 按月统计
  router.get('/monitor/reportMonthlyTotalAbnormality', controller.monitor.reportMonthlyTotalAbnormality); // 异常总数月统计
  router.get('/monitor/reportMonthlyDevAbnormality', controller.monitor.reportMonthlyDevAbnormality); // 月异常数量设备排行
  router.put('/video/changeEnable/:id', controller.video.changeEnable);
  router.get('/video/aiFunctionList', controller.video.aiFunctionList);
  router.put('/video/changeFunction/:functionId', controller.video.changeFunction);

};
