import { it } from 'mocha'
import * as assert from 'assert'
import Solution from './13'

const solution = new Solution()
describe('13. 罗马数字转阿拉伯数字', () => {
  const testCase: any[][] = [['III', 3], ['IV', 4], ['IX', 9], ['LVIII', 58], ['MCMXCIV', 1994], ['DI', 501]]
  testCase.forEach((t) => {
    it(`${t[0]} equal ${t[1]}`, () => {
      assert.equal(solution.main(t[0]), t[1])
    })
  })
})
