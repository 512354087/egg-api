'use strict';

const Controller = require('../core/base_controller');


class UserController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }
  async login() {
    const { ctx } = this;
    const res = Object.assign(ctx.request.body, { token: 123456 });
    this.success(res);

  }
}

module.exports = UserController;
