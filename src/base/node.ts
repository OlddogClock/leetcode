/**
 * 链表节点 TypeScript版
 * L = new Node(1);
 * L.next=new Node(2);
 */
export default class Node {
  data

  next

  constructor(data) {
    this.data = data || 0
    this.next = null
  }
}
