var testCase = require('nodeunit').testCase;
var tests = require('../../../tests.js');

console.log("\x1b[36mWe <3 Zizi-Superstar !\x1b[0m");

module.exports = testCase({
  'ex00': testCase(tests.getTestCase("Encapsulation",		"/tmp/epitech-tests/test00",		"/tmp/epitech-tests/ex00/outputs/out1")),
  'ex01': testCase(tests.getTestCase("Canonical form",		"/tmp/epitech-tests/test01",		"/tmp/epitech-tests/ex01/outputs/out1")),
  'ex02': testCase(tests.getTestCase("Lunar cycle",		"cd /tmp/epitech-tests/ex02 && /tmp/epitech-tests/test02",		"/tmp/epitech-tests/ex02/outputs/out1")),
  'ex03': testCase(tests.getTestCase("Lunar cycle",		"cd /tmp/epitech-tests/ex03 && /tmp/epitech-tests/test03",		"/tmp/epitech-tests/ex03/outputs/out1"))
});
