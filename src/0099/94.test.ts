import { it } from 'mocha'
import * as assert from 'assert'
import InorderTraversal from './94'

const { testCase, recursive, morris } = InorderTraversal

describe('94. 二叉树的中序遍历', () => {
  testCase.forEach((t) => {
    it(`递归实现${t[1]}`, () => {
      const result = recursive(t[0])
      assert.deepEqual(result, t[1])
    })
    it(`Morris遍历${t[1]}`, () => {
      const result = morris(t[0])
      assert.deepEqual(result, t[1])
    })
  })
})
