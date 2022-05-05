/**
 * 《二叉树的中序遍历》
 * https://leetcode-cn.com/problems/binary-tree-inorder-traversal/
 * 笔记：https://github.com/OlddogClock/leetcode/blob/main/mynote/%E4%BA%8C%E5%8F%89%E6%A0%91.md
 */

import { IBinaryTree } from '../util/interfaces'

export default class InorderTraversal {
  // 递归法
  static recursive(root:IBinaryTree) {
    const result = []
    const recursiveTraversal = (node:IBinaryTree) => {
      if (!node) return

      recursiveTraversal(node.left)
      result.push(node.data)
      recursiveTraversal(node.right)
    }
    recursiveTraversal(root)
    return result
  }

  // Morris法中序遍历
  static morris(root:IBinaryTree) {
    const result = []

    // 右指针
    let rightMost = null

    // 当前节点root为null退出遍历
    while (root) {
      if (!root.left) {
        // 如果没有左树，则访问右树
        result.push(root.data)
        root = root.right
      } else {
        // 有左树，rightMost就是当前节点root向左走一步 ，然后获取到树下最右节点
        rightMost = root.left
        while (rightMost.right && rightMost.right !== root) {
          rightMost = rightMost.right
        }
        // rightMost已经是最右节点
        if (!rightMost.right) {
          // 如果最右节点的“右节点”是null（因为已经是最右节点了，所以第一次进来肯定是null）
          rightMost.right = root // 更改rightMost.right指向为当前节点
          root = root.left // 当前节点向左移动
        } else {
          // 如果最右节点的右节点不是null，说明已经被刚才更改了指向（第二次进来）
          result.push(root.data)
          rightMost.right = null // rightMost.right置空修复指向
          root = root.right // 当前节点向右移动
        }
      }
    }

    return result
  }

  /**
   * 迭代法中序遍历
   */
  static iteration(root:IBinaryTree) {
    const result = []

    const stack:IBinaryTree[] = []

    // 当前节点或暂存栈不为空就循环
    while (root || stack.length) {
      // 一路向左，将节点逐一入栈
      while (root) {
        stack.push(root)
        root = root.left
      }
      // 栈顶节点出栈，打印节点值
      root = stack.pop()
      result.push(root.data)
      // 将刚出栈的节点右子树作为当前节点继续
      root = root.right
    }
    return result
  }
}
