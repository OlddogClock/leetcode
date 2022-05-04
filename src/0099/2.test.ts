import { it } from 'mocha'
import * as assert from 'assert'
import AddTwoNumbers from './2'
import SinglyLinkedList from '../base/SinglyLinkedList'

describe('2. 两数相加', () => {
  const { testCase, linked, array } = AddTwoNumbers

  testCase.forEach((t) => {
    it(`链表实现：${t[0]} + ${t[1]}`, () => {
      const l1 = new SinglyLinkedList(t[0])
      const l2 = new SinglyLinkedList(t[1])
      assert.deepEqual(linked(l1, l2), t[2])
    })

    it(`数组实现：${t[0]} + ${t[1]}`, () => {
      assert.deepEqual(array(t[0], t[1]), t[2])
    })
  })
})
