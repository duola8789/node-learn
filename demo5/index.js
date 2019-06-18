/**
 * Created by zh on 2019/5/8.
 */
// 二分法查找
const binarySearch = require('./binarySearch');
const binarySearchResult = binarySearch([1, 3, 5, 7, 9], 5);
// console.log(binarySearchResult);

const unSortArray = [5, -2, 1, -2, 3];

// 快速排序
const quickSort = require('./quickSort');

// 选择排序
const chooseSort = require('./chooseSort');

const sortResult = chooseSort(unSortArray);
console.log(sortResult);
