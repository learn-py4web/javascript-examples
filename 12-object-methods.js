let user = {
    name: "John",
    age: 30,
    is_adult: function() {
      console.log("This is me:", this);
      return this.age >= 18;
    }
  };

user.birthday = () => {
    user.age++;
};

console.log(user.age); // 30
user.birthday();
console.log(user.age); // 31

console.log(user.is_adult());

