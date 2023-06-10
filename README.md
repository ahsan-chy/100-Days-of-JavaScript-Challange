
# JavaScript Concepts

Here I will share JavaScript Concepts from basic to advance.
Also, You can find `conceptual questions` to practice your JavaScript 
coding skills. 

Click On ⭐ if you like this Repo. Pull Requests are highly appreciated. 
Follow me: [ahsan-chy](https://www.github.com/ahsan-chy) for more JS Topics update.






## Online Tools to Run JavaScript

- [Stackblitz](https://stackblitz.com/)
- [Replit](https://replit.com/)
- [CodePen](https://codepen.io/)
- [Programiz](https://www.programiz.com/)
- [Playcode](https://playcode.io/)



## Table of Content 
- Data Types of JAvaScript
- How javascript work???? 👩‍💻
- 🚀 Execution Context
    - ⚡️ Global Execution Context (GEC)
    - ⚡️Function Execution Context (FEC)
- Execution Stack
- Hoisting
- Ground Rules of Hoisting
- Type of Errors
    - Reference Error:
    - Syntax Error:
    - Type Error:
- Temporal Dead Zone
- Clousers 
    - Lexical sope
    - Variable Scope
    - Scope Chain
    - Garbadge Collecctor
- Event Loops

Other relevant Topics 
- Curring 
- Memoization 
- Denouncing 
- Throatling
- 

## JavaScript Variables
Variable is just like container (storage area) to hold data. 


### Variable Declaration
A declaration of a variable is where a program says that it needs a variable.
```javascript
  int x, y, z;                // declare 3 variables.
```

### Variable Initalization
Initialization is the process of assigning a value to the Variable. 
```javascript
  int marks = 90;             // declare and initialize variable marks 
```







## Data Types of JAvaScript

```javascript
    var num = 60;                       // number
    var user = "Fahad";                 // string
    var f = false;                      // boolean
    var marks = [92,23,52,82];          // Array 
    var user = { n:1, N="Ali" };        // Object
    let value = 0 / 0;                  // NaN
    let name;
    console.log(name);                  // undefined 
```



### Primitive and Non-Primitive Data Types in JavaScript
Basically we have two main data types in JavaScript. `Primitive` & `NoN-Primitive`.
- **Primitive**
    - String
    - Number
    - Boolean
    - Null 
    - Undefine
    - Symbol

- **Non-Primitive**
    - Array 
    - Object Literls
    - Functions




### Object -- Shallow Copy -- 

```JavaScript
const user = {
    firstName:"John",
    lastName:"Doe",
    age:50, eyeColor:"blue"
  }
  
  const u = user;  // --- Shallow Copy of User
  u.age = 10;      // Will change both x.age and user.age

  console.log(u.age)     //Output: 10
  console.log(user.age)  //Output: 10
```

### Object -- JSON.stringify() 

```JavaScript
const products = [
{ id: 1, title: 'laptop' },
{ id: 2, title: 'Mobile' },
{ id: 3, title: 'Charger'},
{ id: 4, title: 'watch' },];

console.log(typeof JSON.stringify(products), JSON.stringify(products));

```

### Object -- JSON.parse() 

```JavaScript

const person = '{"name":"John", "age":30, "city":"New York"}'

console.log(typeof JSON.parse(person), JSON.parse(person));


```


# How javascript work???? 👩‍💻


![Execution Context](https://miro.medium.com/max/1400/1*y8oX0ddZ8vXcOnRIM2yjzw.png)

![Execution Context1](https://blog.openreplay.com/images/explaining-javascript-s-execution-context-and-stack/images/RPVavBq.png)

![Execution Context](https://miro.medium.com/max/1400/0*dKwyj2wjGZ_ZJLxj.gif)


## 🚀 Execution Context
- #### An environment where the Javascript code is Evaluated & Executed. 
- #### Execution context contains the code that's currently running and everything that aids in it execution.


![Global Object](https://www.javascripttutorial.net/wp-content/uploads/2019/12/javascript-execution-context-global-execution-context-in-creation-phase.png)

When the JavaScript engine executes a script for the first time, it creates the **`global`** execution context. During this phase, the JavaScript engine performs the following tasks:

Create the global object i.e., **`window`** in the web browser or **`global`** in Node.js.
Create the this object and bind it to the global object.

[Detail Article](https://www.javascripttutorial.net/javascript-execution-context/)


### There are two kinds of Execution Context in JavaScript:

- Global Execution Context (GEC)
- Function Execution Context (FEC)


.



## ⚡️ Global Execution Context (GEC)

- The **`Global Execution Context`** is created when JAVASCRIPT start to run, and it represents Global Scope in JAVASCRIPT. 

- Variables, and Function that is not inside any Function. A new **`Execution Context`** gets created every time a Function is executed. 

- The Global Execution Context just like any other Execution Context, except that it gets created default. It is associated with **`Global Object`** . When means a window Object

```javascript
this === window
```
```javascript
name == window.name
```

 - Before your **javascript(.js)** file run there is global execution context that is created even file is empty.Two phase Creation phase and Execution Phase.
 - In creation phase **GEC** create global object and **this.** In browser global object will be browser.Javascript engines allocate memory **for function** even before your code run.
 - After creation phase,There is Execution phase.

```javascript
sayHi() //hello
function sayHi(){
console.log("hello")
}
```

Javascript already know your function even before it is executed
because of hoisting as in creation phase it memorized all javascript function 
declaration.

```javascript
sayHi(); //error out because of sayHi is const varible not exact function.
const sayHi= function (){
console.log("hey")
}
```



## ⚡️Function Execution Context (FEC)
Whenever a function is called, the JavaScript engine creates a different type of Execution Context known as a Function Execution Context (FEC) within the GEC to evaluate and execute the code within that function.

[Detail Article](https://www.freecodecamp.org/news/execution-context-how-javascript-works-behind-the-scenes/)
## Execution Stack

Execution Stack, also known as "Call Stack" is a stack with a LIFO(Last In First Out) structure, which is used to store all the Execution context created during code execution. 

![Execution context](https://res.cloudinary.com/practicaldev/image/fetch/s--q_xmB2U9--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/01ksqw5twx22ilo4pibc.jpg)

[How the execution context is created](https://blog.openreplay.com/explaining-javascript-s-execution-context-and-stack/)
![Explaining JavaScript's Execution Context And Stack](https://blog.openreplay.com/images/explaining-javascript-s-execution-context-and-stack/images/mFQtgsb.png)



## Hoisting
JavaScript **`Hoisting`** refers to the process whereby the interpreter appears to **move the declaration of functions, variables or classes to the top of their scope,** prior to execution of the code.


- Before your **javascript(.js)** file run there is global execution context that is created even file is empty.Two phase Creation phase and Execution Phase.
- In creation phase **GEC** create **global** object and **this.** In browser global object will be browser. Javascript engines allocate memory **for function** even before your code run.

- After creation phase,There is Execution phase.

```javascript
sayHi() //hello
function sayHi(){
console.log("hello")
}
```
Javascript already know your function even before it is executed
because of hoisting as in creation phase it memorized all javascript function declaration.

```javascript
var a = 5;
function Square(a){
  return a * a;
};
var total = Square(a);
```

![Memory creation phase](https://res.cloudinary.com/practicaldev/image/fetch/s--ui49CrOn--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/yzxhzch70awih1zbamdg.png)
![Momory creation phase 2](https://res.cloudinary.com/practicaldev/image/fetch/s--fl0SW7XU--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/atd7r5yx8cgme6epngoe.png)

### Ground Rules of Hoisting
Hoisting only works for function declarations, **not expressions.** Here is an example of a function expression where the code execution will break.
```javascript
getAge(1990); 
var getAge = function (yearOfBirth) {
console.log(new Date().getFullYear - yearOfBirth) 
};
```

![getage](https://www.freecodecamp.org/news/content/images/2022/08/getAge-error.png)

.

In JavaScript, initializations are not hoisted. 
```javascript
// program to display value
console.log(a);
var a = 5;
```
Output
```javascript
undefined
```

.

Also, variable hoisting does not work for variables initialized with the **`let`** or **`const`** keyword. Trying to access a variable ahead of declaration and use the let and const keywords to declare it later will result in a **ReferenceError.**

```javascript
// using test before declaring
console.log(name1);
```

![Hoiste](https://www.freecodecamp.org/news/content/images/2022/08/name-not-defined-error.png)

.


Also, when the variable is used inside the function, the variable is hoisted only to the top of the function. For example,
```javascript
// program to display value
var a = 4;

function greet() {
    b = 'hello';
    console.log(b); // hello
    var b;
}

greet(); // hello
console.log(b);
```
Output
```javascript
hello
Uncaught ReferenceError: b is not defined
```

If a variable is used with the let keyword, that variable is not hoisted. For example,


```javascript
// program to display value
console.log(num)

let num;
```
Output
```javascript
Uncaught ReferenceError: Cannot access 'a' before initialization
```
![rferenceError](https://bobbyhadz.com/images/blog/javascript-referenceerror-cannot-access-before-initialization/referenceerror-cannot-access-before-initialization.webp)

.

![Error in javascript](https://www.tutsmake.com/wp-content/uploads/2020/05/Types-of-Errors-In-JavaScript.jpeg)

### 1. Reference Error:
In essence, a **Reference Error** occurs when JavaScript 
- tries to access a variable that doesn't exist, 
- hasn't been defined, or 
- doesn't exist in the current scope from which you are trying to access it.

##### Accessing of a Variable Before its Declaration
```javascript
 console.log(a);
    let a = "apple";
    // ReferenceError: Cannot access 'a' before initialization
```
##### Wrong Scope
```javascript
 function inScope() {
      let a = "apple";
    }
    console.log(a); 
    // ReferenceError a is not defined.
```
##### Undeclared or Undefined Variable
```javascript
console.log(a)
    // ReferenceError a is not defined.
```

##### Strict Mode (Silent Errors)
```javascript
  a = 'apple'
    console.log(a)
    // apple,
```

In strict mode, though, JavaScript will catch this error and throw a reference error:
```javascript
 "use strict";
    a = "apple";
    console.log(a);
    // ReferenceError: a is not defined
```
### 2. Syntax Error:
Syntax errors, also known as parse errors, occur in JavaScript when developers incorrectly use a predefined structure or language pattern.

```javascript
const b; // uncaught Syntax Error: 
```
```javascript
let a = 100
let a = 200 // uncaught Syntax Error: 
```

Lots of Syntax errors occure in JS. You will see those in your JS journy.

### 3. Type Error:
An operand or argument passed to a function is incompatible with the type expected by that operator or function🙄


```javascript
CONST  b= 100;
b = 200; //uncaught TypeError: Assignment to consonent variable🙄
```

```javascript
// type error
    var a="nemani";
     console.log(a.reverse());
```


![Errors types](https://cdn2.hexlet.io/store/derivatives/original/fa4dd03bd4b19ceb6a848d4307162257.png)


### Temporal Dead Zone
Temporal Dead Zone is **the period of time during which the `let` and `const` declarations cannot be accessed.**

```javascript
let totalPrice = coursePrice * 1.18;    //---------
                                         //         | ------>  this is TDZ for coursePrice
                                         //         |
console.log(totalPrice);                 //---------

let coursePrice = 699;
```

## Clousers 

- Clousers 
- Lexical sope - Dynamic Scope
- Variable Scope
- Scope Chain
- Garbadge Collecctor
- Curring 


Closure is a feature that allows a function to access variables from an outer function, even after the outer function has returned. This is possible because the inner function retains a reference to the environment in which it was created, including any variables or functions that were defined in that environment.


Javascript is the **synchronous single-threaded language** but with the help of **event-loop** and **promises**, JavaScript is used to do asynchronous programming.


```javascript
function outerFunction() {
  var outerVariable = "Hello, ";

  function innerFunction(name) {
    console.log(outerVariable + name);
  }

  return innerFunction;
}

var greeting = outerFunction();
greeting("John"); // Output: "Hello, John"
```


### garbage collector js
Some high-level languages, such as **JavaScript,** utilize a form of automatic memory management known as **garbage collection (GC).** The purpose of a garbage collector is to monitor memory allocation and determine when a block of allocated memory is no longer needed and reclaim it.



### Variable Scope

- Global Scope:
- Function Scope or Local Scope:
- Block Scope

![Scopes](https://scaler.com/topics/images/types-of-scopes.webp)

![scope](https://cdn.hashnode.com/res/hashnode/image/upload/v1600864549731/CPpg9u2gi.png)

![Variable scope](https://res.cloudinary.com/practicaldev/image/fetch/s--lI9XvHjf--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://i.ibb.co/vJhg635/Scope.png)

![Variable Scope](https://miro.medium.com/max/1400/1*TblJQp4DJ6XmVzHJ5X6Zmw.png)

### Lexical scope

A **closure** in JavaScript is a feature where an inner function has access to the outer (enclosing) function's variables — a scope chain. Closures in Javascript are created along with the function. **Lexical scoping is the environment that holds the variables of the current scope as well as the outer scope.**


### Scope Chain
Scope Chain means that one variable has a **scope (it may be global or local/function or block scope) is used by another variable or function having another scope (may be global or local/function or block scope).** This complete chain formation goes on and stops when the user wishes to stop it according to the requirement.

```javascript
var x = 1; // Global scope

function outer() {
  var y = 2; // Outer scope

  function inner() {
    var z = 3; // Inner scope
    console.log(x + y + z); // Output: 6
  }

  inner();
}

outer();

```

![ScopeChain](https://www.freecodecamp.org/news/content/images/2022/02/scope-chain.png)

![Scops](https://www.learnsimpli.com/wp-content/uploads/2020/02/2-4.png)

Each time a new function is created in JavaScript, a new local scope is created for that function. This local scope is added to the scope chain and becomes the next outer scope for any nested functions.

### Curring Function

Currying in JavaScript transforms a **function with multiple arguments into a nested series of functions, each taking a single argument.** 

[Reference Video](https://youtu.be/EdUrAng1Q1k)

[Technical Sunaja Video Link](https://youtu.be/DkBcfYtBZnQ)

[Road side coder](https://youtu.be/k5TC9i5HonI)

```javascript
const add = (a, b, c)=>{
    return a+ b + c
}
console.log(add(2, 3, 5)) // 10

// Curried version
const addCurry =(a) => {
    return (b)=>{
        return (c)=>{
            return a+b+c
        }
    }
}
console.log(addCurry(2)(3)(5)) // 10
```

Why We use Curring:

- Currying helps you avoid passing the same variable multiple times
- Make higher order function

![Curring](https://i0.wp.com/learnersbucket.com/wp-content/uploads/2021/06/Currying-in-Javascript-1.png?fit=768%2C500&ssl=1)


## Memoization

Memoization is a technique used in computer programming to optimize the performance of functions by caching their results. It involves storing the results of expensive function calls and retrieving them from a cache when the same inputs are encountered again.

The idea behind memoization is that if a function is called with the same arguments multiple times, it's more efficient to compute the result once and store it for future use, rather than recomputing it every time. This can significantly improve the performance of algorithms that have overlapping subproblems or repetitive computations.

Here is an example of how memoization can be used to speed up a recursive function:

```javascript
function factorial(n):
  if n == 0:
    return 1
  else:
    return n * factorial(n - 1)
```
This function is recursive, and it calls itself n times when n is greater than 0. This can make the function very slow for large values of n.

```javascript
const memo = {};

function factorialMemoized(n) {
  if (n in memo) {
    return memo[n];
  } 
else {
    const result = n * factorialMemoized(n - 1);
    memo[n] = result;
    return result;
  }
```
This code uses a hash table to store the results of factorial calls. When factorial is called, the hash table is checked to see if the nth factorial has already been computed. If it has, the result is returned from the hash table. If not, the factorial is computed and stored in the hash table.

![Memoization](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJjS_2lynApf4NTzE6pPQmgQSLVrU4FBUFXQ&usqp=CAU)

This code can significantly speed up the factorial function. For example, factorial(100) takes about 100 milliseconds to compute without memoization, but it takes only about 1 millisecond to compute with memoization.

![fab recursion](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTThztkp6clLr9H16wEbhl9hA_Q5KDgYidBQ&usqp=CAU)



## Event Loop

In JavaScript, the event loop is a mechanism that handles asynchronous operations. It is an essential part of the language's concurrency model, which allows the program to perform multiple tasks concurrently without blocking the execution of other code.


In JavaScript, the event loop is responsible for handling several types of asynchronous operations, including:

**Timers:**  JavaScript provides two types of timers, setInterval() and setTimeout(), which allow the programmer to schedule code to run after a certain amount of time has passed.

**User Interface (UI) events:** These are events that are triggered by user interaction with the page, such as mouse clicks, keypresses, and form submissions.

**Network requests:** JavaScript code can send HTTP requests to servers to retrieve data. Since network requests can take a long time to complete, they are typically handled asynchronously to avoid blocking the program's execution.

**File I/O operations:** JavaScript can read and write files from the local file system. These operations can take a significant amount of time, so they are usually performed asynchronously.

**Promises:** Promises are a mechanism for handling asynchronous operations in JavaScript. They represent a value that may not be available yet, but will be at some point in the future. When the value is available, the promise is fulfilled, and the associated code can be executed.

```javascript
console.log("Starting...");

setTimeout(function() {
  console.log("Timer done!");
}, 2000);

console.log("Waiting for timer...");

```
Output:
```javascript
Starting...
Waiting for timer...
Timer done!
```
#### [Detail Article](https://www.javascripttutorial.net/javascript-event-loop/)



![settimeout](https://static.wixstatic.com/media/0f65e1_a50ce7f9ceec402e82e63c6ccddc40a4~mv2.gif)

#### [JS Event LOOP](https://www.thetechplatform.com/post/the-javascript-event-loop-explained)

![EventLoop](https://miro.medium.com/max/672/1*SNu8b0NKs9cBB9JsvNXKcA.png)

![EventLoop](https://miro.medium.com/max/1400/1*LvbUhFpMUeN9xoaazrp_gQ.jpeg)

![Event Loop](https://i.ibb.co/nbQc6sk/Javascript-event-loop.png)

![EventLoop](https://scaler.com/topics/images/event-loop-javascript.webp)


![Web Apis](https://user-images.githubusercontent.com/85479513/221345755-331450d0-acbc-49d3-89ea-64eff8087ef8.png)

![Event Loop](https://user-images.githubusercontent.com/85479513/221345784-9d74770f-6f8d-4b75-8927-26856c4f9d84.png)



