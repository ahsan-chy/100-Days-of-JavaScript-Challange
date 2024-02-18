# Different Tricky Interview Questions

Table Of Questions 
- Pass 1 return 2, Pass 2 return 1
- Swap two variables 
- 


### Question: 1
 
- Make a function in which users pass 1 inside the function parameter and the function will return 2 and if user pass 2 it will return 1.
- Make sure you may not use this in javascript function  **==, ===, + - / %, if, if else, switch, case** 

```javascript
function reverse(val) {
    let result = {
        1: 2, 
        2: 1
    }
    return result[val]

}
console.log(reverse(1))
```

### Question 2
- Swap two values
```javascript
let a = 1,
    b = 2,
    tmp;
tmp = a;
a = b;
b = tmp;

console.log(a,b)
```


- Method 1: Swap two values without using third variable.

```javascript
let a = 10;
let b = 35;

a = a + b;   
b = a - b;   
a = a - b;   

console.log(a,b)   // a=35, b=10

``` 

- Method 2: Swap two values without using third variable.

```javascript
let a = 10;
let b = 35;
[a,b] = [b,a]

console.log(a, b)  // a=35, b=10

```

- Method 3: Swap two values without using third variable.
```javascript
let a=1;
let b=2;

b = [a, a = b][0];

console.log(a, b)  // a=2, b=1
```

- Method 4: 
```javascript
let a=4;
let b=5;

a = [a, b];
b = a[0];
a = a[1];

console.log(a, b)  // a=5, b=4
```