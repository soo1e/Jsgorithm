/**
 * 1번부터 N번까지 N명의 사람이 원을 이루면서 앉아있고,
 * 양의 정수 K(≤ N)가 주어진다.
 * 이제 순서대로 K번째 사람을 제거한다.
 * 한 사람이 제거되면 남은 사람들로 이루어진 원을 따라 이 과정을 계속해 나간다.
 * 이 과정은 N명의 사람이 모두 제거될 때까지 계속된다.
 * 원에서 사람들이 제거되는 순서를 (N, K)-요세푸스 순열이라고 한다.
 * 예를 들어 (7, 3)-요세푸스 순열은 <3, 6, 2, 7, 5, 1, 4>이다.
 */

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
//const input = require('fs').readFileSync('input.txt').toString().trim().split(' ');

const N = Number(input[0]);
const K = Number(input[1]);

let result = [];
let people = [];
let index = 0;

for (let i = 0; i < N; i++) {
    people.push(i+1);
}


while (people.length > 0) {
    index = (index + K - 1) % people.length;
    result.push(people.splice(index, 1)[0]);
}

console.log(`<${result.join(', ')}>`);