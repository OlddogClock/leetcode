import { it } from 'mocha'
import * as assert from 'assert'
import InorderTraversal from './94'
import testCase from '../testcase/binarytree'

const {
  recursive, morris, iteration,
} = InorderTraversal

describe('94. 二叉树的中序遍历', () => {
  testCase.forEach((t) => {
    it(`递归 ${t[1]}`, () => {
      const result = recursive(t[0])
      assert.deepEqual(result, t[1])
    })
    it(`Morris ${t[1]}`, () => {
      const result = morris(t[0])
      assert.deepEqual(result, t[1])
    })
    it(`迭代 ${t[1]}`, () => {
      const result = iteration(t[0])
      assert.deepEqual(result, t[1])
    })
  })
})
