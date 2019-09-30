/**
 * Created by zh on 2019/9/30.
 */
const nodes = {
  node: 6,
  left: {
    node: 5,
    left: {
      node: 4,
      right: {
        node: 3
      }
    }
  },
  right: {
    node: 2,
    right: {
      node: 1
    }
  }
};

/*
*       6
*      / \
*     5   2
*    / \   \
*   4   3   1
*/

// DFS（深度优先搜索）- BFS(广度优先搜索)
// dlr（前序遍历）

// 深度优先搜索 - 前序遍历 - 递归算法
function des_dlr(nodes, result = []) {
  if (nodes.node) {
    result.push(nodes.node);
    nodes.left && des_dlr(nodes.left, result);
    nodes.right && des_dlr(nodes.right, result);
  }
  return result
}

console.log('深度优先搜索 - 前序遍历 - 递归算法', des_dlr(nodes));
