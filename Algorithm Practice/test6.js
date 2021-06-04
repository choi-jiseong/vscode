function sumInput() {
    let arr = [];
    while(true){
        let value = prompt("num", 0);
        if(!isFinite(value) || value == '' || value ==null)
            break;
        arr.push(+value);
    }
    let sum = 0;
    for(let x of arr){
        sum += x;
    }
    return sum;
}

alert( sumInput() );