/**
 * Created by zh on 2019/8/6.
 */
// 背包问题
const knapsackProblem = () => {
  const bagSize = 4;
  const items = [
    {name: 'sound', size: 4, value: 3000},
    {name: 'laptop', size: 3, value: 2000},
    {name: 'guitar', size: 1, value: 1500},
    {name: 'iphone', size: 1, value: 2000},
  ];

  // 存储结果的表格
  const cell = [];

  // 空格子
  class CellClass {
    constructor() {
      this.value = 0;
      this.names = [];
    }
  }

  // 外层遍历物品
  for (let i = 0; i < items.length; i++) {
    // 声明新的一行
    cell[i] = [];
    // 针对的物品
    const item = items[i];
    // 当前商品的价值
    const currentValue = item.value;

    // 内层遍历重量
    for (let j = 0; j <= bagSize; j++) {
      // 当前格子装入物品后的剩余空间
      const remainSize = j - item.size;
      // 上一个单元格
      const lastCell = (cell[i - 1] && cell[i - 1][j]) ? cell[i - 1][j] : new CellClass();
      // 上一个单元格的值（之前的最大值）
      const lastCellValue = lastCell.value;

      // 如果能装下这个物品
      if (remainSize >= 0) {
        // 剩余空间对应的单元格
        const remainCell = (cell[i - 1] && cell[i - 1][remainSize]) ? cell[i - 1][remainSize] : new CellClass();
        // 剩余空间的价值
        const remainValue = remainCell.value;
        // 预期的最大值
        const currentMaxValue = currentValue + remainValue;

        // 如果预期的最大值更大
        if (currentMaxValue > lastCellValue) {
          cell[i][j] = {value: currentMaxValue, names: [item.name, ...remainCell.names]}
        } else {
          cell[i][j] = {value: lastCellValue, names: lastCell.names}
        }
      } else {
        // 装不下这个物品则取上一个单元格
        cell[i][j] = lastCell
      }
    }
  }

  return cell[items.length - 1][bagSize]
};


// 旅游行程问题
const travelProblem = () => {
  const allDays = 2;
  const spots = [
    {name: '长城', days: 0.5, value: 7},
    {name: '颐和园', days: 0.5, value: 6},
    {name: '故宫', days: 1, value: 9},
    {name: '八达岭长城', days: 2, value: 9},
    {name: '鸟巢', days: 0.5, value: 8},
  ];

  // 存储结果的表格
  const cell = [];

  // 空格子
  class CellClass {
    constructor() {
      this.value = 0;
      this.names = [];
    }
  }

  // 外层遍历景点
  for (let i = 0; i < spots.length; i++) {
    cell[i] = [];
    const spot = spots[i];
    const currentValue = spot.value;
    // 内层遍历天数
    for (let j = 0; j <= allDays; j += 0.5) {
      const remainDays = j - spot.days;
      const lastCell = (cell[i - 1] && cell[i - 1][j]) ? cell[i - 1][j] : new CellClass();
      const lastCellValue = lastCell.value;
      if (remainDays >= 0) {
        const remainCell = (cell[i - 1] && cell[i - 1][remainDays]) ? cell[i - 1][remainDays] : new CellClass();
        const remainValue = remainCell.value;
        const currentMaxValue = currentValue + remainValue;
        if (currentMaxValue > lastCellValue) {
          cell[i][j] = {value: currentMaxValue, names: [spot.name, ...remainCell.names]}
        } else {
          cell[i][j] = {value: lastCellValue, names: lastCell.names}
        }
      } else {
        // 装不下这个物品则取上一个单元格
        cell[i][j] = lastCell
      }
    }
  }

  return cell[spots.length - 1][allDays]
};

const maxSubstring = (string1, string2) => {
  let result = {
    value: 0,
    string: ''
  };
  let cell = [];
  for (let i = 0; i < string1.length; i++) {
    cell[i] = [];
    for (let j = 0; j < string2.length; j++) {
      if (string1[i] === string2[j]) {
        const lastCell = cell[i - 1] && cell[i - 1][j - 1];
        cell[i][j] = {
          value: lastCell ? lastCell.value + 1 : 1,
          string: lastCell ? lastCell.string + string1[i] : string1[i]
        }
      } else {
        cell[i][j] = {value: 0, string: ''};
      }
      if (result.value < cell[i][j].value) {
        result.value = cell[i][j].value;
        result.string = cell[i][j].string;
      }
    }
  }
  return result
};

module.exports = {
  knapsackProblem,
  travelProblem,
  maxSubstring,
};