let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);

// function filterRange(arr, one, two) {
//     let arr2 = []
//     for(let value of arr){
//         if(one <= value && value <= two)arr2.push(value);  
//     }
//     return arr2;
// }

function filterRange(arr, one, two) {
    return arr.filter(item => (one<=item && item<=two));
}

console.log(filterRange(arr, 1, 4));