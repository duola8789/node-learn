/**
 * Created by zh on 2019/8/6.
 */
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
        const remainCell = (cell[i - 1] && cell[i - 1][remainSize]) ?cell[i - 1][remainSize]: new CellClass();
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
  console.log(cell);

  return cell[items.length - 1][bagSize]
};


module.exports = {
  knapsackProblem
};