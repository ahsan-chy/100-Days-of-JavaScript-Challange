
# Operators in JavaScript

### Conditional Operators

- If Condition (&&)
- != , !==
- !!double negation
- Data.length !==0 
- Nullish Operator (??)
- Optional chaining (?.)
- Logical OR ||
- Logical AND &&
- Ternory Operator - Nested Ternory Operator
- Check Whether condition Fullfill or Not 
- 



### !!double negation
Double exclamation mark (!!) is a shorthand way to convert a value to its corresponding boolean equivalent.

1. The first exclamation mark (!) is the logical NOT operator. It negates the truthiness of a value. If the operand is truthy, ! makes it false. If the operand is falsy, ! makes it true.

2. The second exclamation mark (!) is used again, effectively negating the previous negation. This results in the original truthiness or falsiness of the value.

```javascript
let value = "Hello";
let booleanValue = !!value;

console.log(booleanValue); // true
```


### Null Collision **??** - Optional Channing **?.** 

[Nullish coalescing operator (??)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing)

**Nullish operators(??)** checks for null or undefined

```javascript
let q = undefined ?? 100; // output: 0
console.log(q);
```

[Comparison with ||](https://javascript.info/nullish-coalescing-operator#comparison-with)

**OR - AND Operator ( || - && )** checks truthy or falsy values

```javascript
let p = 0 || 100; // output: 100
console.log(p);   

```
.

### How is it different from logical OR (||) operator?

The OR **(||)** operator can be used in the same way as ?? . We can get the same results for the above examples.

But,

there is one difference between **||** and **??**.

**||** returns the first truthy value.
**??** returns the first defined value.
In other words, **||** doesn’t distinguish between the below values (**falsy**)

- false
- 0
- an empty string (“”)
- null
- undefined
They are called – falsy values. If any of these is the first argument of ||, then we’ll get the second argument as the result.

```javascript
0 || 2 // returns 2
0 ?? 2 // returns 0
```


.

**Optional chaining (?.)** checks for null or undefined. It returns undefined instead of throwing an error.
```javascript
const arr = [
  ['a', 'b'],
  ['c', 'd'],
];

console.log(arr?.[0]); // 👉️ ['a', 'b']
console.log(arr?.[0]?.[0]); // 👉️ a
console.log(arr?.[0]?.[0]?.[1]); // 👉️ undefined
console.log(arr?.[0]?.[1]?.[0]?.[0]); // 👉️ b

```
```javascript
const products = {
  name: 'Power Bank',
  Rating: {
    stars: 5
  }
};

const myProducts = products?.Rating?.comments;
console.log(myProducts);  // undefined
```
