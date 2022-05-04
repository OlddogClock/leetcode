# 用typescript刷leetcode题

开发环境：
* VSCode: 1.66.2
* Node.js: 16.13.0
* TypeScript: 4.6.3
* OS: Windows_NT x64 10.0.19044


`src/0099/题号.ts`，是第1~99题，目录以此类推
`src/base/` ts实现的常用基础库，如链表
`.eslintrc.js` 使用了比较严格的`airbnb-base`规则
`mynote` 我的笔记

步骤：

1. 先写测试用例`题号.test.ts`，用单元测试框架`mocha`，NodeJS自带断言库`assert`
2. 在`题号.ts`做题
   1. 调试时，可用`npm run tsc --file=0099/题号`单独编译该文件
   2. 调试时，可用`npm test --file=0099/题号`单独跑该题测试
3. `npm start --file=0099/题号` 编译题目和跑测试
