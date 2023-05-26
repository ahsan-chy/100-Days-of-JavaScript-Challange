
# Day 10: ES6 

Table of Content:

- ECMA Script - ES6
- Deep Copy 
- Shallow Copy
- Destructuring 
    - Array Destructuring
    - Object Destructuring
- Rest Operator 
- Spread Operator
- Call by reference 
- Call by Value

<br>

## ECMA Script 6 - ES 6 
European Computer Manufacturers Association Script

## Deep Copy

 ![deep copy](https://github.com/ahsan-chy/100-Days-of-JavaScript-Challange/assets/85479513/f7e6202b-6e80-4029-a2d7-5fb15ae17c5e)


## Shallow Copy

![shallow copy](https://github.com/ahsan-chy/100-Days-of-JavaScript-Challange/assets/85479513/57f9a0b7-b13e-47d3-91bf-316262b2ee9a)


## Array Destructuring

```javascript
let a, b, rest;
[a, b] = [10, 20];

console.log(a);
// expected output: 10

console.log(b);
// expected output: 20

[a, b, ...rest] = [10, 20, 30, 40, 50];

console.log(rest);
// expected output: Array [30,40,50]
```

## Object Destructuring

```javascript
let obj = {name: 'Max', age: 22, address: 'Delhi'};
const {name, age} = obj;
```

Assign new variable names


```javascript
var employee = {    // Object we want to destructure
    firstname: 'Jon',
    lastname: 'Snow',
    dateofbirth: '1990'
};
var { firstname: fn, lastname: ln, dateofbirth: dob } = employee;
console.log( fn, ln, dob);  // Jon Snow 1990

```

Setting default values

```javascript
let person = {
    firstName: 'John',
    lastName: 'Doe',
    currentAge: 28
};

let { firstName, lastName, middleName = '', currentAge: age = 18 } = person;

console.log(middleName); // ''
console.log(age); // 28

```


## Rest Operator

Rest operator in JavaScript is a syntax feature that **allows you to represent an indefinite number of function arguments** or the **remaining** elements of an array as an array. 

Syntex of Rest parameter
```javascript
//... is the rest parameter (triple dots)
function functionname(...parameters)
{
statement;
}
```
![rest parameter](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ631fgxrHzjDMJ4-tjymsZwkW2KUBqjMPQBw&usqp=CAU)

The **rest parameter** is an improved way to handle function parameters, allowing us to more easily **handle various inputs as parameters in a function.**

```javascript
function sum(...numbers) {
	return numbers.reduce((accumulator, current) => {
		return accumulator += current;
	});
};
 
sum(1,2) // 3
sum(1,2,3,4,5) // 15
```
#### Without rest parameter
```javascript
	function fun(a, b){
		return a + b;
	}
	console.log(fun(1, 2)); // 3
	console.log(fun(1, 2, 3, 4, 5)); // 3			

```
![rest spread](https://i.ytimg.com/vi/qMlReipXP5A/maxresdefault.jpg)
![spread rest](https://i.redd.it/erej5eai49o91.jpg)


## Spread Operator

The spread operator ( ... ) allows us to quickly copy all or part of an existing array or object into another array or object.


**`Spread basically use to spread existing array and pass it as a sequence`**


```javascript
const num = [10, 20, 30, 40, 50];

Math.max(...num)    // 50
```

![Spread](https://ucarecdn.com/3e867836-35e6-4403-bb92-f8125c843efd/)

#### Copy Array Using Spread Operator

```javascript
const arr1 = ['one', 'two'];
const arr2 = [...arr1, 'three', 'four', 'five'];

console.log(arr2); 
//  Output:
//  ["one", "two", "three", "four", "five"]
```

### Clone Array Using Spread Operator

In JavaScript, objects are **assigned by reference and not by values.** For example,
```javascript
let arr1 = [ 1, 2, 3];
let arr2 = arr1;

// append an item to the array
arr1.push(4);

console.log(arr1); // [1, 2, 3, 4]
console.log(arr2); // [1, 2, 3, 4]
```
Here, both variables arr1 and arr2 are **referring to the same array.** Hence the change in one variable results in the change in both variables.


<br>

However, if you want to copy arrays so that they do not refer to the same array, you can **use the spread operator.** This way, the change in one array is not reflected in the other. For example,

```javascript
let arr1 = [ 1, 2, 3];

// copy using spread syntax
let arr2 = [...arr1];

// append an item to the array
arr1.push(4);

console.log(arr1); // [1, 2, 3, 4]
console.log(arr2); // [1, 2, 3]
```



#### Spread Operator with Object

```javascript
const user1 = {
        name: 'Jen',
        age: 22,
    };
      
    const user2 = {
        name: "Andrew",
        location: "Philadelphia"
    };
      
const mergedUsers = {...user1, ...user2};
console.log(mergedUsers)
```


## Call by Reference 



## Call by value
