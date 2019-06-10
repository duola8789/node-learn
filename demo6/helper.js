'use strict';
/**
 * Created By zh on 2019-06-10
 */
const pako = require('pako');

// 使用 pako 压缩数据
module.exports =  {
  gzip(data) {
    return pako.deflate(JSON.stringify(data), { to: 'string' })
  },

  // 使用 pako 解压缩数据
  unzip(gzipData) {
    return JSON.parse(pako.inflate(gzipData, { to: 'string' }))
  }
};
