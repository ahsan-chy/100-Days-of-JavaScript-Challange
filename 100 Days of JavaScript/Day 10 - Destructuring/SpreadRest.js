// - Spread Operator to find Max

const num = [10, 20, 30, 40, 50];

console.log(Math.max(...num))   //50

//!  Copy Array Using Spread Operator
const arr1 = ['one', 'two'];
const arr2 = [...arr1, 'three', 'four', 'five'];

console.log(arr2); 

//! Spread Operator with Object
const obj1 = { x : 1, y : 2 };
const obj2 = { z : 3 };

const obj3 = {...obj1, ...obj2};

console.log(obj3); // {x: 1, y: 2, z: 3}

