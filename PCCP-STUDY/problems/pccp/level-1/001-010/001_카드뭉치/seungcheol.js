// 이렇게 컴파일러 화면에 조건, 구해야 되는 값 붙여넣고 시작했습니다

// 원하는 카드 뭉치에서 카드를 순서대로 한 장씩 사용합니다.
// 한 번 사용한 카드는 다시 사용할 수 없습니다.
// 카드를 사용하지 않고 다음 카드로 넘어갈 수 없습니다.
// 기존에 주어진 카드 뭉치의 단어 순서는 바꿀 수 없습니다.

// 문자열로 이루어진 배열 cards1, cards2와 원하는 단어 배열 goal이 매개변수로 주어질 때, 
// cards1과 cards2에 적힌 단어들로 goal를 만들 있다면 "Yes"를, 만들 수 없다면 "No"를 return
function solution(cards1, cards2, goal) {
    var answer = 'Yes';
    for (let findGoal of goal){
        if(cards1[0] === findGoal){
            cards1.shift();
        } else if(cards2[0] === findGoal){
            cards2.shift();
        } else {answer = 'No'};
    }
    return answer;
}