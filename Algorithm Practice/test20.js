let user = {
    name: 'John',
    age: 30
  };
  
  alert( count(user) );

  function count(obj) {
      let count = 0;
      for(let v of Object.keys(obj)){
        count++;
      }
      return count;
  }