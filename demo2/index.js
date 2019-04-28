/**
 * Created By zh on 2019-04-19
 */
const server = require('./server');
const router = require('./router');
const requestHandlers = require('./requestHanlders');

const handle = {
  '/': requestHandlers.start,
  '/start': requestHandlers.start,
  '/upload': requestHandlers.upload
};

server.start(router.route, handle);
