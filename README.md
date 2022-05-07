# 用typescript刷leetcode题

开发环境：
* VSCode: 1.66.2
* Node.js: 16.13.0
* TypeScript: 4.6.3
* OS: Windows 10, MacOS 12.3.1
* Windows Terminal + PowerShell v7.2.2

`mynote/` 我的笔记
`src/0/`下是第1~99题，`src/1/`下是第100~199题，目录以此类推
`src/0/题号.test.ts`，对代码实现的测试
`src/util/` ts实现的常用基础库，如链表
`src/testcase/` 测试用例
`.eslintrc.js` 使用了比较严格的`airbnb-base`规则

步骤：

1. `npm run new 题号`初始化题目文件
2. 先写单元测试`题号.test.ts`
3. `testcase/`共用测试用例
4. 在`题号.ts`做题；调试时，可用`npm run tsc 题号`单独编译并运行该文件
3. `npm start 题号` 编译题目和跑测试，通过即完成该题
