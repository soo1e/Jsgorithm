/**
 * 두 정수 A와 B를 입력받은 다음, A/B를 출력하는 프로그램을 작성하시오.
 */

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

const a = parseInt(input[0]);
const b = parseInt(input[1]);

console.log(a/b);