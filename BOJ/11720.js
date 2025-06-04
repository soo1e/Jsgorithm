/**
 * N개의 숫자가 공백 없이 쓰여있다. 이 숫자를 모두 합해서 출력하는 프로그램을 작성하시오.
 * 첫째 줄에 숫자의 개수 N (1 ≤ N ≤ 100)이 주어진다. 둘째 줄에 숫자 N개가 공백없이 주어진다.
 * 입력으로 주어진 숫자 N개의 합을 출력한다.
 */

/**
 * 54321 ? 나누기를 써야할지 나머지를 써야할지.. -> 가장 베스트는 JS의 문자열 특성을 활용해서 푼거임
 */
// const input = require('fs').readFileSync('input.txt').toString().trim().split('\n');
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const T = parseInt(input[0]);
const numbers = input[1];
let num = 0;

for (let i = 0; i < T; i++) {
    num = num + Number(numbers[i]);
}

console.log(num);