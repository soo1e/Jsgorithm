/**
 * 정수 배열을 하나 받습니다.
 * 배열의 중복값을 제거하고 배열 데이터를 내림차순으로 정렬해서
 * 반환하는 solution() 함수를 구현하세요.
 */

function solution(arr) {
    const uniqueArr = [...new Set(arr)]; // 중복값 제거
    uniqueArr.sort((a, b) => b - a);
    return uniqueArr;
}

// 