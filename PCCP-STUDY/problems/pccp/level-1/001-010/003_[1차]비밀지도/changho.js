function solution(n, arr1, arr2) {
    var answer = [];
   for (let i = 0; i < n ; i ++){
       let zo = (arr1[i] | arr2[i]).toString(2);
       
       
       
       let xo = zo.padStart(n, '0').replace(/1/g,'#').replace(/0/g,' ');
       
       
        answer.push(xo)
   }
    
    
    
    return answer;
}