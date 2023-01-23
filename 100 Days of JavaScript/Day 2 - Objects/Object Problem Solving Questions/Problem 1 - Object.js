// -- Example 1: This in Function & Arrow Function 
const person = {
  name: "mateen",

  displayName1: function() {
    console.log("name1: ", this.name)
  },
  displayName2: () => {
    console.log("name2: ", this.name)
  },

};

person.displayName1();
person.displayName2();

// Explain: But on the other hand, we can not use this keyword directly into arrow function because it does not contain its own this . So when we use this keyword in the arrow function, it will return an undefined value.


