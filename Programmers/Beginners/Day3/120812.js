/**
 * 최빈값은 주어진 값 중에서 가장 자주 나오는 값을 의미합니다.
 * 정수 배열 array가 매개변수로 주어질 때,
 * 최빈값을 return 하도록 solution 함수를 완성해보세요.
 * 최빈값이 여러 개면 -1을 return 합니다.
 */

function solution(array) {
    const count = {};

    for (let num of array) {
        if (count[num] === undefined) {
            count[num] = 1;
        } else {
            count[num]++;
        }
    }

    let maxCount = 0;     // 가장 많이 등장한 횟수
    let mode = 0;         // 최빈값 후보
    let isDuplicate = false;  // 최빈값이 여러 개인지 확인

    for (let key in count) {
        const value = count[key];
        if (value > maxCount) {
            maxCount = value;
            mode = Number(key);
            isDuplicate = false;
        } else if (value === maxCount) {
            isDuplicate = true;
        }
    }

    // 4. 결과 리턴
    return isDuplicate ? -1 : mode;
}
