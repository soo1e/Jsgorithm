/**
 * 알파벳 소문자로만 이루어진 단어 S가 주어진다.
 * 각 알파벳이 단어에 몇 개가 포함되어 있는지 구하는 프로그램을 작성하시오.
 * 첫째 줄에 단어 S가 주어진다. 단어의 길이는 100을 넘지 않으며, 알파벳 소문자로만 이루어져 있다.
 * 단어에 포함되어 있는 a의 개수, b의 개수, …, z의 개수를 공백으로 구분해서 출력한다.
 */

// const input = require('fs').readFileSync('input.txt').toString().trim().split('');
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('');

const count = new Array(26).fill(0);  // 알파벳 개수만큼 0으로 초기화된 배열

// 배열 26사이즈짜리 만들어서 char 타입? 이용해서 인덱싱하기 다른 부분이 있다면 문법을 알려주셈 이 부분만!!
for (let i = 0; i < input.length; i++) {
    const char = input[i];
    const index = char.charCodeAt(0) - 'a'.charCodeAt(0);  // 'a'는 97, 'b'는 98 ...
    count[index]++;
}

console.log(count.join(' '));
