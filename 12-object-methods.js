let user = {
    name: "John",
    age: 30,
    is_adult: function() {
      console.log("This is me:", this);
      return this.age >= 18;
    }
  };


user.is_adult();

let another = {
  name: "Jane",
  age: 30,
  is_adult: function() {
    let self = this;
    console.log("This is me:", self);
    return self.age >= 18;
  }
};

console.log(another.is_adult());

user.birthday = () => {
    user.age++;
};

console.log(user.age); // 30
user.birthday();
console.log(user.age); // 31

console.log(user.is_adult());

// I can override built in methods. 
console.log = function(x) {}

console.log("haha");
