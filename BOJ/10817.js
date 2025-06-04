/**
 * 세 정수 A, B, C가 주어진다.
 * 이 때, 두 번째로 큰 정수를 출력하는 프로그램을 작성하시오. 
 */

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
// const input = require('fs').readFileSync('input.txt').toString().trim().split(' ');

const numbers = input.map(Number).sort((a, b) => a - b);

console.log(numbers[1])