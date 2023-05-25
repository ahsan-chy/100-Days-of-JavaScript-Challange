# Day 0: Hoisting - This - Clouser - GEC - FEC

Table of Content
- How javascript work???? 👩‍💻
- 🚀 Execution Context
- Hoisting 
- Clouser
- Event Loop
- This 


## This in Javascript 

```javascript
this === window

console.log(this === window); //true
```

```javascript
name == window.name
```

- **`this`** refer to global object or window object.
In strict mode, it will be **`undefined`**

```javascript
function greet() {
  console.log('Hello, ' + this); // Outputs "Hello, [object Window]"
}

greet();
```

- But when we call this **inside method of object** it refers to current object



```javascript
let user = {
  name: 'shirshak',
  age: 25,
  say() {
    //here this is current object which is user
    console.log(this.name); //print shirshak
  },
};
```


