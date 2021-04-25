var number = "01033334444";



function solution(number) {
    var answer = '';
    for(let i=0; i<number.length-4;i++){
        answer += '*';
    }
    answer += number.slice(number.length-4);
    return answer;
}
console.log(solution(number));