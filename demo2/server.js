/**
 * Created By zh on 2019-04-19
 */
const http = require('http');

module.exports = {
  start(route, handle) {
    const onRequest = (req, res) => {
      const pathname = req.url;
      if(~pathname.indexOf('/favicon')) {
        return;
      }

      console.log("\nRequest for " + pathname + " received.", '---------------------' + new Date().toLocaleString());

      let postData = '';
      req.setEncoding('utf-8');
      req.addListener('data', postDataChunk => {
        postData += postDataChunk;
        console.log("Received POST data chunk '"+
          postDataChunk + "'.");
      });

      req.addListener('end', () => {
        route(handle, pathname, res, postData);
      });
    };

    http.createServer(onRequest).listen(8081, 'localhost');

    console.log('Listening 8081...');
  }
};


