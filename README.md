
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

## String - String Methods

## Array - Array Methods

## Function