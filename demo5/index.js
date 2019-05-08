/**
 * Created by zh on 2019/5/8.
 */
// 二分法查找
const binarySearch = (list, target) => {
  let low = 0,
    high = list.length - 1,
    middle = 0,
    guess = 0;
  while (low <= high) {
    middle = Math.floor((low + high) / 2);
    guess = list[middle];
    if (guess === target) {
      return middle;
    } else if (guess > target) {
      high = middle - 1;
    } else {
      low = middle + 1;
    }
  }
  return null;
};

console.log(binarySearch([1, 3, 5, 7, 9], 5));