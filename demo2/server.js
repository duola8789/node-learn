/**
 * Created By zh on 2019-04-19
 */
const http = require('http');

module.exports = {
  start() {
    http.createServer((req, res) => {
      console.log(req.url);
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.write('hello server');
      res.end();
    }).listen(8081, 'localhost');
    console.log('Listening 8081...')
  }
};


