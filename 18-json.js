let user = {
    name: "John",
    age: 30,
};

console.log("The string is:", JSON.stringify(user)); // {"name":"John","age":30}

let s = JSON.stringify(user);
console.log(typeof s); // string

let u2 = JSON.parse(s);
console.log("Back to the object:", u2); // { name: 'John', age: 30 }
