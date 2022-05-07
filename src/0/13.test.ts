import { it } from 'mocha'
import * as assert from 'assert'
import RomanToInteger from './13'

const solution = new RomanToInteger()
describe('13. 罗马数字转阿拉伯数字', () => {
  const { testCase } = RomanToInteger
  testCase.forEach((t) => {
    it(`${t[0]} equal ${t[1]}`, () => {
      assert.equal(solution.main(t[0]), t[1])
    })
  })
})
