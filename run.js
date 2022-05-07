const { execSync } = require('child_process')

const arg = parseInt(process.argv[2], 10)
const path = parseInt(arg / 100, 10)
const file = `src/${path}/${arg}`
execSync(`npx tsc ${file}.ts
npx tsc ${file}.test.ts
npx mocha ${file}.test.js --slow -1`, { stdio: 'inherit' })
