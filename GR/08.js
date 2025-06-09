/**
 * 소괄호는 짝을 맞춘 괄호 (와 )로 구성합니다.
 * 문제에서는 열린 괄호나 닫힌 괄호가 마구 뒤섞인 문자열을 준다.
 * 이 때 소괄호가 정상적으로 열고 닫혔는지 판별하는 solution()을 구현하세요.
 * 소괄호가 정상적으로 열고 닫혔다면 true,
 * 그렇지 않다면 false를 반환
 */

function solution(s) {
    const stack = [];
    for (const c of s) {
        if (c === "(") {
            stack.push(c);
        } else if (c === ")") {
            if (stack.length === 0) {
                return false;
            } else {
                stack.pop();
            }
        }
    }

    return stack.length === 0;
}

// s = (())() -> False -> pop해서 )이고, 
// s = ((())()) -> False