'use strict';

const Controller = require('../core/base_controller');
const returnData = require('../data');


class VideoController extends Controller {
  async abnormalStatistics() {
    this.success(returnData.abnormalStatistics());
  }
  async abnormalList() {
    const { ctx } = this;
    const { warnType, sourceId, startTime } = ctx.request.query;
    const data = returnData.abnormalList();
    const res = [];
    for (const item of data) {
      if (warnType && (item.warnType === parseInt(warnType))) {
        res.push(item);
      }
    }
    this.success(res);
  }
  async abnormalVideoList() {
    const { ctx } = this;
    const { pageSize, page } = ctx.request.query;
    const data = returnData.abnormalVideoList();
    this.success({ count: data.length, list: data.splice((data.length) - pageSize, pageSize) });
  }

  async abnormalMonthStatistics() {
    this.success(returnData.abnormalMonthStatistics());
  }
  async reportMonthStatistics() {
    this.success(returnData.reportMonthStatistics());
  }

  async reportMonthlyTotalAbnormality() {
    this.success(returnData.reportMonthlyTotalAbnormality());
  }

  async reportMonthlyDevAbnormality() {
    this.success(returnData.reportMonthlyDevAbnormality());
  }



}

module.exports = VideoController;
