/**
 * 二叉树节点 TypeScript版
 */
export default class BinaryTreeNode<T> {
  // 当前节点值
  data:T

  // 左节点
  left?:BinaryTreeNode<T>

  // 右节点
  right?:BinaryTreeNode<T>

  constructor(data:number) {
    this.data = data
    this.left = null
    this.right = null
  }
}
