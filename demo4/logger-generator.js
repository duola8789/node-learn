/**
 * Created By zh on 2019-04-30
 */
function log(ctx) {
  console.log(1, ctx.method, ctx.header.host + ctx.url);
}

module.exports = function () {
  return function* f(next) {

    // 执行中间件的操作
    log(this);

    if (next) {
      yield next;
    }
  }
};
