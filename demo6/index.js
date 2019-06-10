'use strict';
/**
 * Created By zh on 2019-06-10
 */
const helper = require('./helper');

const gzipData = helper.gzip({ a: 1 });

console.log('GZIP DATA: ', gzipData);
console.log('--------\n\r');

const unzipData = helper.unzip(gzipData);
console.log('UNZIP DATA: ', unzipData);
