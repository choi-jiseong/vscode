let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [ john, pete, mary ];

alert( getAverageAge(arr) );


function getAverageAge(arr){
    return arr.reduce((avg, item) => avg +item.age, 0)/ arr.length;
}