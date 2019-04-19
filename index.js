/**
 * Created By zh on 2019-04-16
 */
const fs = require('fs');
const event = require('events');
const emitter = new event.EventEmitter();

emitter.on('hello', (msg) => {
  console.log('123');
  console.log(msg);
});

fs.readFile('./demo1/hello.js', (err, data) => {
  if(err) {
    console.log(err)
  }
  emitter.emit('hello', 456)
});

console.log('async');

