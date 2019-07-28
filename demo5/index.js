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

// 最大子正方形
const getMaxSquare = require('./maxSquare');
console.log('最大子正方形 ', getMaxSquare(168, 64));

// 迪科特斯拉算法
const dijkstra = require('./dijkstra');
// 用于存储节点、节点的邻居以及前往节点邻居的开销
const graph = {
  start: {a: 5, b: 2},
  a: {c: 4, d: 2},
  b: {a: 8, d: 7},
  c: {d: 6, end: 3},
  d: {end: 1},
};
// 用于存储每个节点的最短开销
const costs =  {
  a: 5,
  b: 2,
  c: Infinity,
  d: Infinity,
  end: Infinity,
};
// 用于存储每个节点最短开销情况下的父节点
const parents = {
  a: 'start',
  b: 'start',
  c: '',
  d: '',
  end:'',
};
const dijkstraResult = dijkstra(graph, costs, parents);
console.log('迪科特斯拉算法\n', dijkstraResult);
