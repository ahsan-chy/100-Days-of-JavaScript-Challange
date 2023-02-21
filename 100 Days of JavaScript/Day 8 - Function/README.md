# Function 

We have Different types of function in javascript
- Function Declaration
- Function Expression
- Arrow Function - Fat Arrow Function - 
- Pure Function 
- Anonymous Function
- IIFE (Immediately invoked function execution)
- Callback Function
- Higher Order Function



Difference b/w Arrow and Regular Function
- **this** value in Regular Function & Arrow Function
- **return** in Regular Function & Arrow Function

Other relevant Topics 
- Call - Apply - Bind
- Scope Chain
- Curring 
- Memoization 
- 

## Regular Function - Function Declaration

```javascript
// Function declaration
function greet(who) {
  return `Hello, ${who}!`;
}
```

## Function Expression 

```javascript
// Function expression
const greet = function(who) {
  return `Hello, ${who}`;
}
```

## Arrow Function 

```javascript
const greet = (who) => {
  return `Hello, ${who}!`;
}
```

## Pure Function JavaScript
A Pure Function is a function (a block of code) that **always returns the same result if the same arguments are passed.** It does not depend on any state or data change during a program’s execution. Rather, it only depends on its input arguments.

```javascript
function calculateGST( productPrice ) {
return productPrice * 0.05;
}
console.log(calculateGST(15))
```
Output
```javascript 
0.75
```
Now, let’s see one more function below:

```javascript 
var tax = 20;

function calculateGST( productPrice ) {
return productPrice * (tax / 100) + productPrice;
}
console.log(calculateGST(15))
```
So if the tax value is updated somehow, then we will get a different output though we pass the same productPrice as a parameter to the function.

[Detail Article Pure Functions in JS](https://www.syncfusion.com/blogs/post/pure-and-impure-functions-in-javascript-a-complete-guide.aspx#:~:text=Pure%20functions%20return%20the%20same,can%20execute%20without%20producing%20anything.)

## Anonymous Function 
[JavaScript Anonymous Functions](https://www.javascripttutorial.net/javascript-anonymous-functions/)

An anonymous function is a function without a name. The following shows how to define an anonymous function:

```javascript
(function () {
   //...
});
```
**Note** that if you don’t place the anonymous function inside the `()`, you’ll get a syntax error. The `()` makes the anonymous function an expression that returns a function object.

#### Using anonymous functions as arguments
```javascript
setTimeout(function() {
    console.log('Execute later after 1 second')
}, 1000);
```
In this example, we pass an anonymous function into the setTimeout() function. The setTimeout() function executes this anonymous function one second later.

## IIFE (Immediately invoked function execution)
If you want to create a function and execute it immediately after the declaration, you can declare an anonymous function like this:

```javascript
(function() {
    console.log('IIFE');
})();
```

## Callback Function
A callback is a function that you pass into another function as an argument for executing later.

![Callback](https://www.tutsmake.com/wp-content/uploads/2020/05/Callback-Function-JavaScript.jpeg)
![Callback](https://tutorial.eyehunts.com//wp-content/uploads/2021/02/add-two-numbers-using-the-call-back-function.png)


```javascript

```

## Callback Hell
![Callback hell](https://i.ytimg.com/vi/fr67u98nckk/maxresdefault.jpg)

## Higher Order Function
Higher-order function is a function that either takes one or more functions as arguments, or returns a function as its result.

```javascript
function multiplyBy(factor) {
  return function (number) {
    return number * factor;
  }
}

let double = multiplyBy(2);
let triple = multiplyBy(3);

console.log(double(5)); // 10
console.log(triple(5)); // 15
```
Another example of a higher-order function is the map method on arrays, which takes a function as an argument and applies it to each element of the array, returning a new array of the same length with the results:

**map()** - This method creates a new array by applying a function to each element of an existing array.

```javascript
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8]

```

**filter()** - This method creates a new array containing all elements that pass a test provided by a function.

```javascript
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // [2, 4]

```
**reduce()** - This method applies a function to an array and returns a single value.

```javascript
const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum); // 10

```

**forEach()** - This method calls a function for each element in an array.

```javascript
const numbers = [1, 2, 3, 4];
numbers.forEach(num => console.log(num * 2));
// output: 2, 4, 6, 8

```
**sort()** - This method sorts the elements of an array in place.

```javascript
const numbers = [3, 1, 4, 2, 5];
numbers.sort();
console.log(numbers); // [1, 2, 3, 4, 5]

```

**some()** - This method tests whether at least one element in an array passes a test provided by a function.
```javascript
const numbers = [1, 3, 5, 7];
const hasEvenNumber = numbers.some(num => num % 2 === 0);
console.log(hasEvenNumber); // false

```


**every()** - This method tests whether all elements in an array pass a test provided by a function.

```javascript
const numbers = [2, 4, 6, 8];
const areEvenNumbers = numbers.every(num => num % 2 === 0);
console.log(areEvenNumbers); // true

```

.

**find()**
**findIndex()**
**flatMap()**
**reduceRight()**