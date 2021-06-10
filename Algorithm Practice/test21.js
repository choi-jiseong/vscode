let user = {
    name: "John Smith",
    age: 35
};

let json = JSON.stringify(user);
alert(json);
let parse = JSON.parse(json);

alert(parse);