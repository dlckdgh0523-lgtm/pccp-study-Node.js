// 자신의 기사 번호의 약수 개수에 해당하는 공격력을 가진 무기를 구매하려 합니다. 
// 단, 이웃나라와의 협약에 의해 공격력의 제한수치를 정하고, 제한수치보다 큰 공격력을 가진 무기를 
// 구매해야 하는 기사는 협약기관에서 정한 공격력을 가지는 무기를 구매해야 합니다.
// 1 ≤ number ≤ 100,000
// 2 ≤ limit ≤ 100
    function solution(number, limit, power) {
    var answer = 0;
    // 약수 개수 - 1~number까지 하면 연산 횟수가 기하급수적으로 늘어난다.
    // 10 - 1,10/2,5 25 - 5,5, 제곱근?
    for (let i = 1; i <= number; i++) {
        let count = 0;
        for (let j = 1; j * j <= i; j++) {
            if (j * j === i) {
                count++; 
                // 다 나눠떨어지면 숫자 둘다 추가
            } else if (i % j === 0) {
                count += 2; 
            }
        }

        // 리미트 검증
        if (count > limit) {
            answer += power;
        } else {
            answer += count;
        }
    }

    return answer;
}