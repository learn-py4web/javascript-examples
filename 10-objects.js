let user = new Object(); // "object constructor" syntax
let another_user = {};  // "object literal" syntax

user.name = "John";
user.surname = "Doe";

let auser = {
  name: "John",
  surname: "Doe"
};

console.log(user);
console.log(auser);
console.log(user == auser);
console.log(user === auser);

auser["name"] = "Jane";
console.log(auser);

let key = "surname";
auser[key] = "Smith";
console.log(auser);

delete auser.name;
console.log(auser);

