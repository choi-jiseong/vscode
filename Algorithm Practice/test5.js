function extractCurrencyValue(str){
    let result = '';
    for(let a of str){
        if(isFinite(a)){
            result += a;
        }
    }
    return +result;
}

alert(extractCurrencyValue('$120')===120);