let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert( unique(strings) );
console.log(unique(strings));
function unique(arr){
    let result = [];

    for(let v of arr){
        if(!result.includes(v)){
            result.push(v);
        }
    }

    return result;
}
