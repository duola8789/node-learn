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
    const unzipData = pako.inflate(gzipData, { to: 'string' })
    let res = {}
    try {
      res = JSON.parse(unzipData)
    } catch (e) {
      const errMsg = 'unzip 解压出错'
      throw new this.config.httpCodeHash.serverError.error(errMsg)
    }
    return res
  },
};
