/**
 * 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.
 */
const input = require('fs').readFileSync('input.txt').toString().trim().split(' ');

const a = parseInt(input[0]);
const b = parseInt(input[1]);
console.log(a + b);

// FOR BOJ
const input2 = require('fs').readFileSync('/dev/stdin').toString().split(' ');

const a1 = parseInt(input2[0]);
const b1 = parseInt(input2[1]);
