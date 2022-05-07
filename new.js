/**
 * 初始化一道题
 */
const { execSync } = require('child_process')

const arg = parseInt(process.argv[2], 10)
const path = parseInt(arg / 100, 10)
const file = `src/${path}/${arg}`
try {
  execSync(`mkdir src/${path}`, { stdio: 'ignore' })
} catch (e) {}
execSync(`echo ''>${file}.ts`, { stdio: 'ignore' })
execSync(`echo "import { it } from 'mocha'
import * as assert from 'assert'
describe('${arg}. ', () => {
  
  testCase.forEach((t) => {
    it( , () => {
      assert.equal( t[0] , t[1])
    })
  })
})
">${file}.test.ts`, { stdio: 'ignore' })
