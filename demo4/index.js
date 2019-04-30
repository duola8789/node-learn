/**
 * Created By zh on 2019-04-30
 */
const Koa = require('koa');
const fse = require('fs-extra');
const convert = require('koa-convert');
const loggerGenerator = require('./logger-generator');
const loggerAsync = require('./logger-async');

const app = new Koa();

app.use(async (ctx, next) => {
  console.log('started');
  const start = Date.now();
  await next();
  const time = (Date.now() - start) + 'ms';
  ctx.set('X-ResponseTime', time)
});

app.use(convert(loggerGenerator()));
app.use(loggerAsync());

app.use(async (ctx) => {
  ctx.body = await fse.readFile('../demo3/test.txt', 'utf-8');
});

app.listen(8080, () => {
  console.log('app is listening 8080...');
});
