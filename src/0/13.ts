/**
 * 《13. 罗马数字转整数》
 * https://leetcode-cn.com/problems/roman-to-integer/
 * 正常情况下XXVII = 10+10+5+1+1，依次遍历字符串并转换为对应数字，然后相加
 * 但是有特殊情况，都是右边字符比左边大：
 * IV=5-1  IX=10-1
 * XL=50-10  XC=100-10
 * CD=500-100  CM=1000-100
 * 所以，从后向前遍历字符串s，记录最大的数字，如果当前数字比最大数字大，则相加，否则相减
 */
export default class RomanToInteger {
  /**
   * 测试用例
   */
  static testCase: any[][] = [
    ['III', 3],
    ['IV', 4],
    ['IX', 9],
    ['LVIII', 58],
    ['MCMXCIV', 1994],
    ['DI', 501],
  ]

  private Map: Object = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  }

  main(s: string): number {
    let integer = 0
    let max = 1 // 从后向前遍历s时遇到的最大的数字
    for (let i = s.length - 1; i > -1; i -= 1) {
      // 当前数字
      const cur = this.Map[s[i]]
      // 如果当前数字比最大数字大，就累加，否则减
      if (cur >= max) {
        integer += cur
        max = cur
      } else {
        integer -= cur
      }
    }
    return integer
  }
}
