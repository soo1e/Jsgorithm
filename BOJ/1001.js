/**
 * 두 정수 A와 B를 입력받은 다음, A-B를 출력하는 프로그램을 작성하시오.
 */

// 파일 시스템 요구하고, /dev/stdin 에서 읽어 오고 String 변환 후  공백 기준으로 제거하고 나누기 
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

const a = parseInt(input[0]);
const b = parseInt(input[1]);
console.log(a - b);
