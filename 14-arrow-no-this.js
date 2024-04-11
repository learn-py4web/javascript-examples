let user = {
    name: "John",
    age: 30,
    is_adult: function() {
      console.log("This is me:", this);
      return this.age >= 18;
    }
  };

user.is_adult();

// Arrow functions do not have their own this. 
// They inherit the one from the surrounding function.
let person = {
    name: "Jane",
    age: 30,
    is_adult: () => {
      console.log("This is me:", this);
      return this.age >= 18;
    }
  };

person.is_adult();
