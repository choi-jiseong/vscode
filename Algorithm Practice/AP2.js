let x = 10;
var k =x.toString();
var j =k.split("");
var result = 0;
for(let i=0; i<j.length; i++){
    result += +j[i];
}

if(x%result != 0) answer = false;

function solution(x) {
    var answer = true;
    var sum = x.toString().split("");
    var result = 0;
    for(let i=0; i<sum.length; i++){
        result += +sum[i];
    }

    return (x%result == 0)? true : false;
}