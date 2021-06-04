function truncate(str, maxlengh) {
    if(str.length > maxlengh){
        return str.substr(0, maxlengh-1)+"...";
    }else{
        return str;
    }

}

alert(truncate("What I'd like to tell on this topic is:", 20));

alert(truncate("Hi everyone!", 20));