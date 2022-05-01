/**
 * JS模拟单向链表
 * 从js对象上看来，所有的数据都在head中，tail只是末尾node的指针
 * 形如：
 * last = { data:2,next:null }
 * {
 *   head:{
 *     data:1,
 *     next:last
 *   },
 *   tail:last
 * }
 */

import Node from './node'

export default class SinglyLinkedList {
  // 链表头
  head = null

  // 链表尾
  tail = null

  // 创建链表，默认为空或者有一个节点
  constructor(data?:number[]) {
    if (data) { this.arrayToLinked(data) }
  }

  arrayToLinked(data:number[]) {
    data.forEach((t) => {
      const newNode = new Node(t)
      if (this.head === null) {
        // 空链表的情况
        this.head = newNode
        this.tail = this.head
      } else {
        // 非空链表，直接在tail.next插入
        this.tail.next = newNode
        this.tail = newNode
      }
    })
  }

  append(data:number[]) {
    this.arrayToLinked(data)
  }

  /**
   * 将链表转为数组
   */
  toArray() {
    const arr = []
    // 从链表头部开始循环
    let me = this.head
    while (me !== null) {
      // 如果next有值就继续
      arr.push(me.data)
      me = me.next
    }
    return arr
  }
}
