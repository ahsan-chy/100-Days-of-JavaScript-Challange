
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



## ⚡️Function Execution Context (FEC)
Whenever a function is called, the JavaScript engine creates a different type of Execution Context known as a Function Execution Context (FEC) within the GEC to evaluate and execute the code within that function.

[Detail Article](https://www.freecodecamp.org/news/execution-context-how-javascript-works-behind-the-scenes/)
## Execution Stack

Execution Stack, also known as "Call Stack" is a stack with a LIFO(Last In First Out) structure, which is used to store all the Execution context created during code execution. 