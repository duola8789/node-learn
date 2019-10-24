/**
 * Created By zh on 2019-04-30
 */
const path = require('path');

const Koa = require('koa');
const fse = require('fs-extra');
const logger = require('./utils/simple-logger');

const app = new Koa();

// 时间打点
app.use(async (ctx, next) => {
  console.log('started');
  const start = Date.now();
  await next();
  const time = (Date.now() - start) + 'ms';
  ctx.set('X-ResponseTime', time)
});

// 控制台输出
app.use(logger());


app.listen(8080, () => {
  console.log('app is listening 8080...');
});
