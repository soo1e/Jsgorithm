/**
 * 본격적으로 for문 문제를 풀기 전에 주의해야 할 점이 있다.
 * 입출력 방식이 느리면 여러 줄을 입력받거나 출력할 때 시간초과가 날 수 있다는 점이다.
 * 첫 줄에 테스트케이스의 개수 T가 주어진다. T는 최대 1,000,000이다. 다음 T줄에는 각각 두 정수 A와 B가 주어진다. A와 B는 1 이상, 1,000 이하이다.
 * 각 테스트케이스마다 A+B를 한 줄에 하나씩 순서대로 출력한다.
 */

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
// const input = require('fs').readFileSync('input.txt').toString().trim().split('\n')

const T = parseInt(input[0]);

const result = [];

for (let i = 1; i <= T; i++) {
    const [A, B] = input[i].split(' ').map(Number);
    result.push(A + B);
}

console.log(result.join('\n'));

/**
 * ✨ 팁: 실전 판단 루틴
 * 문제에 "빠른 입출력" 언급이 있는가?
 * → 있으면 join() or stdout.write()
 * 출력 횟수가 수만 줄 이상인가?
 * → 많으면 join() 사용
 * 출력마다 줄바꿈이나 포맷이 유연한가?
 * → stdout.write() 활용 가능
 */