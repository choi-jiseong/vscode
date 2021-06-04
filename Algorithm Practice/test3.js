function checkSpam(str) {
    let str2 = str.toUpperCase();
    if(str2.includes('VIAGRA') || str2.includes('XXX')){
        return true; 
    }else{
        return false;
    }
    
}


alert(checkSpam('buy ViAgRA now'));
alert(checkSpam('free xxxxx'));