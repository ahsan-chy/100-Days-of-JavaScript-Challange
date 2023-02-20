
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



### Temporal Dead Zone
Temporal Dead Zone is **the period of time during which the `let` and `const` declarations cannot be accessed.**