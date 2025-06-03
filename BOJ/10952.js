/**
 * 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.
 */

// const [A, B] = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

for (let i = 0; i < input.length; i++) {
    const [A, B] = input[i].split(' ').map(Number);

    if (A === 0 && B === 0) break;

    console.log(A + B);
}


/**
 * 우선 현재 input이 A, B 이렇게 A, B 를 받는데 이걸 Number로 구성된 map으로 처리하고,
 * 이걸 A = 0, B = 0이면 반복문을 그만하도록 코딩하면 될 것 같은데
 */
