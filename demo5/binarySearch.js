/**
 * Created by zh on 2019/6/18.
 */
// 二分法查找
// 时间复杂度O(logN)
module.exports = (list, target) => {
  let min = 0;
  let max = list.length - 1;
  while (min <= max) {
    const middle = Math.floor((min + max) / 2);
    if (list[middle] > target) {
      max = middle - 1
    } else if(list[middle] < target) {
      min = middle + 1
    } else {
      return middle
    }
  }
  return -1
};