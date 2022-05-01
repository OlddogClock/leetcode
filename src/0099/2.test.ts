import { it } from 'mocha'
import * as assert from 'assert'
import Solution from './2'
import SinglyLinkedList from '../base/SinglyLinkedList'

describe('2. 两数相加', () => {
  const testCase = [
    [[2, 4, 3], [5, 6, 4], [7, 0, 8]],
    [[0], [0], [0]],
    [[9, 9, 9, 9, 9, 9, 9], [9, 9, 9, 9], [8, 9, 9, 9, 0, 0, 0, 1]],
  ]
  testCase.forEach((t) => {
    it(`链表实现：${t[0]} + ${t[1]}`, () => {
      const l1 = new SinglyLinkedList(t[0])
      const l2 = new SinglyLinkedList(t[1])
      assert.deepEqual(Solution.linked(l1, l2), t[2])
    })

    it(`数组实现：${t[0]} + ${t[1]}`, () => {
      assert.deepEqual(Solution.array(t[0], t[1]), t[2])
    })
  })
})
