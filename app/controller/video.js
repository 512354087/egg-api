'use strict';

const Controller = require('../core/base_controller');
const returnData = require('../data');


class VideoController extends Controller {
  async index() {
    this.success(returnData.getVideoList());
  }
  async changeEnable() {
    const { id } = this.ctx.params;
    this.success({ msg: id + '切换成功' });
  }
  async aiFunctionList() {
    const { parentId } = this.ctx.request.query;
    const res = returnData.aiFunctionList().filter(item => {
      return item.parentId === parseInt(parentId);
    });
    this.success(res);
  }
  async changeFunction() {
    const { functionId } = this.ctx.params;
    const { enable } = this.ctx.request.body;
    this.success({ msg: functionId + '切换成功', enable });
  }
}

module.exports = VideoController;
