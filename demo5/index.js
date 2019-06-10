/**
 * Created by zh on 2019/5/8.
 */
// 二分法查找
const binarySearch = (list, target) => {
  let min = 0;
  let max = list.length - 1;
  while (min <= max) {
    const middle = Math.floor((min + max) / 2);
    if (list[middle] > target) {
      max = middle - 1;
    } else if (list[middle] < target) {
      min = middle + 1
    } else {
      return middle;
    }
  }
  return null
};

console.log(binarySearch([1, 3, 5, 7, 9], 3));