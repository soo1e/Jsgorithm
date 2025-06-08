/**
 * 1번 문제부터 마지막 문제까지의 정답이 순서대로 들은 배열 answers가 주어졌을 때,
 * 가장 많은 문제를 맞힌 사람이 누구인지 배열에 담아
 * return 하도록 solution 함수를 작성해주세요.
 */

function solution(answers) {
    let arr1 = [1, 2, 3, 4, 5];
    let count1 = 0;
    
    let arr2 = [2, 1, 2, 3, 2, 4, 2, 5];
    let count2 = 0;

    let arr3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    let count3 = 0;

    for (let i = 0; i < answers.length; i++) {
        if (answers[i] == arr1[i % arr1.length]) {
            count1++;
        }

        if (answers[i] == arr2[i % arr2.length]) {
            count2++;
        }

        if (answers[i] == arr3[i % arr3.length]) {
            count3++;
        }
    }
    const maxScore = Math.max(count1, count2, count3);
    const result = [];

    if (count1 === maxScore) result.push(1);
    if (count2 === maxScore) result.push(2);
    if (count3 === maxScore) result.push(3);

    return result;
}