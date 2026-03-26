이창호 = 매핑 . name 배열하고 yearning 배열을 순회하면서 , 이름표와 점수를 짝지어 scoreMap 에 저장 
2. 순회 및 검색 : photo 를 이중 for문으로 순회하면서 각 사진속 인물 확인 
3. 점수합산 각 인물의 이름을 scoreMap 에서 검색하여 점수가 존재하면 더하고 검사가 끝난거는 answer 에 추가 

시간복잡도 = O(N + P * M)
N : name 
P : Photo 
M : 각 사진에 찍힌 사람 수 