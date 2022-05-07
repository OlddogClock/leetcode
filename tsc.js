/**
 * 单独跑题
 */
const { execSync } = require('child_process')

const arg = parseInt(process.argv[2], 10)
const path = parseInt(arg / 100, 10)
const file = `src/${path}/${arg}`

execSync(`npx tsc ${file}.ts`)
execSync(`node ${file}.js`)
