/**
 * 《二叉树的中序遍历》
 * https://leetcode-cn.com/problems/binary-tree-inorder-traversal/
 * 关于二叉树的笔记： mynote/二叉树.md
 */
interface IBinaryTree{
  data: number,
  left?: IBinaryTree,
  right?: IBinaryTree,
}

export default class InorderTraversal {
  /**
   * 测试用例
   *
   */
  static testCase:any[] = [
    [{
      data: 1,
      right: {
        data: 2,
        left: {
          data: 3,
        },
      },
    }, [1, 3, 2]],
    [{
      data: 1,
      left: {
        data: 2,
        right: {
          data: 5,
        },
      },
      right: {
        data: 3,
        left: {
          data: 6,
        },
        right: {
          data: 7,
        },
      },
    }, [2, 5, 1, 6, 3, 7]],
  ]

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

  // Morris遍历算法
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
}
