
//- Pass by reference
let person = {
    name: 'John',
    age: 25,
};
  
  function increaseAge(obj) {
    obj.age += 1;
  }
  
  increaseAge(person);   // copy reference
  
  console.log(person);  // { name: 'John', age: 26 }

//+ Example 2
const user = {
    name: "Anonymous",
    age: 21
}

const user2 = user;   // copy reference
user2.name = "Husain";

console.log(user)   // { name: 'Husain', age: 21 }
console.log(user2)  // { name: 'Husain', age: 21 }


//- Pass by value 

function square(x) {
    x = x * x;
    return x;
}

let y = 10;
let result = square(y);     //copy values

console.log(result); // 100 
console.log(y); // 10 -- no change

//+ Example 2
const employ = {
    name: "Anonymous",
    age: 21,
}

const employ2 = {...employ};    // copy values

employ2.name = "Khan";

console.log(employ);    // { name: 'Anonymous', age: 21 }
console.log(employ2);   // { name: 'khan', age: 21 }


//- Tricky Example
let a = [1,2];
let b = a;

console.log(a == b)     //true
console.log(a === b)    //true

let i = [1,2];
let j = [1,2];

console.log(i == j)     //false
console.log(i === j)    //false