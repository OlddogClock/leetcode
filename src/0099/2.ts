/**
 * 《两数相加》
 * https://leetcode-cn.com/problems/add-two-numbers/
 * 两个链表里的十进制数字相加，有进位的向后进位，每个节点上的数字都是个位数
 * 这里引入JS里实现的链表（详情看common/SinglyLinkedList），用数组也可以代替
 */
import SinglyLinkedList from '../base/singlylinkedlist'

export default class AddTwoNumbers {
  /**
   * 测试用例
   * [
   *    [l1, l2, result]
   * ]
   */
  static testCase = [
    [[2, 4, 3], [5, 6, 4], [7, 0, 8]],
    [[0], [0], [0]],
    [[9, 9, 9, 9, 9, 9, 9], [9, 9, 9, 9], [8, 9, 9, 9, 0, 0, 0, 1]],
  ]

  /**
   * 用链表实现
   */
  static linked(l1, l2) {
    // 返回结果也是一个链表
    const result = new SinglyLinkedList()

    // 进位默认是0
    let carry = 0

    // 从链表头部开始
    let currentL1 = l1.head
    let currentL2 = l2.head
    while (currentL1 || currentL2) {
      const n1 = currentL1 ? currentL1.data : 0
      const n2 = currentL2 ? currentL2.data : 0

      // 计算两个数字与进位的和
      const sum = n1 + n2 + carry

      // 当前位置的数字取模
      result.append([sum % 10])

      // 看是否有进位
      carry = Math.floor(sum / 10)

      // 继续算下一个节点
      currentL1 = currentL1 ? currentL1.next : null
      currentL2 = currentL2 ? currentL2.next : null
    }
    // 把最后的进位算上
    if (carry > 0) {
      result.append([carry])
    }
    return result.toArray()
  }

  /**
   * 用数组实现
   */
  static array(l1:number[], l2:number[]) {
    const result = []
    let carry = 0
    let loopIndex = 0
    while (loopIndex !== undefined) {
      const currentL1 = l1[loopIndex] || 0
      const currentL2 = l2[loopIndex] || 0
      const sum = currentL1 + currentL2 + carry
      result.push(sum % 10)
      carry = Math.floor(sum / 10)
      loopIndex += 1

      // 如果两个数组后面都没有值了，终止循环
      if (!(l1[loopIndex] || l2[loopIndex])) {
        loopIndex = undefined
      }
    }
    if (carry > 0) {
      result.push(carry)
    }
    return result
  }
}
