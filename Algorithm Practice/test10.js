let arr =  [5, 3, 8, 1];



function filterRangeInPlace(arr, one, two){
    for (let i = 0; i < arr.length; i++) {
        let val = arr[i];
    
        if (val < one || val > two) {
          arr.splice(i, 1);
          i--;
        }
    }
}
filterRangeInPlace(arr, 1, 4);
console.log(arr);