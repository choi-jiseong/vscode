let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };
  
  alert( sumSalaries(salaries) );

  function sumSalaries(obj) {
      let sum = 0;
      for(let v of Object.values(obj)){
          sum += v;
      }
      return sum;
  }