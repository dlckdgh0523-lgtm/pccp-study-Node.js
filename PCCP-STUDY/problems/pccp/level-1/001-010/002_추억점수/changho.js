function solution(name, yearning, photo) {
    var answer = [];
    let scoreMap = {};
    
    //사람의 이름별로 name 각 사람별 그리움 점수 yearning , 사진에 있는 이름을 담은 배열 포토 
    // 그러면 name 에 들어있는거 쪼개주고 쪼갠거 포토에 있나없나 있는거는 점수매기고 아니다 네임이랑 점수랑 같이나오므로 인덱스 맞는것들끼리 점수를 하면되고 포토의 배열마다 있으면 그거 점수매기믄 되네 ㅇㅋ
    for(let i = 0 ; i < name.length; i++){
        scoreMap[name[i]] = yearning[i];
    }
    
    
    for (let i = 0; i < photo.length; i ++){
        let currentPhoto = photo[i]
        let totalScore = 0;
        
        for ( let j = 0; j < currentPhoto.length; j++){
            let person = currentPhoto[j];
            if (scoreMap[person] !== undefined){
                totalScore += scoreMap[person]; 
            }
        }
        answer.push(totalScore)
    }
    
    
    
    return answer;
}