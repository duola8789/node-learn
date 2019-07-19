/**
 * Created by zh on 2019/5/8.
 */
// 二分法查找
const binarySearchRecursion = require('./binarySearch').binarySearchRecursion;
const binarySearchResult = binarySearchRecursion([1, 3, 5, 7, 9], 3);
console.log('二分查找 ', binarySearchResult);

const unSortArray = [15, -12, 11, -2, 3];

// 快速排序
const quickSort = require('./quickSort');
console.log('快速排序 ', quickSort([...unSortArray]));

// 选择排序
const chooseSort = require('./chooseSort');
console.log('选择排序 ', chooseSort([...unSortArray]));

const getMaxSquare = require('./maxSquare');
console.log('最大子正方形 ',  getMaxSquare(168, 64));
