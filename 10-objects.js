let user = new Object(); // "object constructor" syntax
let another_user = {};  // "object literal" syntax

user.name = "John";
user.surname = "Doe";

another_user.name = "Jane";
another_user["surname"] = "Smith";
another_user["maiden name"] = "Gustaffson";

let mn = "maiden name";
console.log(another_user[mn]);
console.log(another_user.mn);
console.log(another_user.mn === undefined);
console.log("--------------------");

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

