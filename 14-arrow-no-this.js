let user = {
    name: "John",
    age: 30,
    is_adult: function() {
      console.log("This is me:", this);
      return this.age >= 18;
    }
  };

user.is_adult();

let person = {
    name: "John",
    age: 30,
    is_adult: () => {
      console.log("This is me:", this);
      return this.age >= 18;
    }
  };

person.is_adult();
