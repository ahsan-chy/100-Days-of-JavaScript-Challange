## Array Problems Solutions

Table of Problems

- Remove Element from array
  - Remove First Element from Array
  - Remove Last Element from Array
  - Remove using Filter Method
  - Remove using Splice Method
  - Remove using For Loop
- Remove Dublicate from array
  - Remove using Set method
  - Remove using Filter Method
  - Remove using Reduce Method
  - Remove using forEach
  -

#### Remove First Element from Array

```javascript
const scores = [20, 50, 30, 88, 73];

console.log("Orignal Scores", scores);

scores.shift();

console.log("First Delete & Scores is ", scores);
```

**Time Complexity**: O(n)

#### Remove Last Element from Array

```javascript
const scores = [20, 50, 30, 88, 73];

console.log("Orignal Scores", scores);

scores.pop();

console.log("Last Delete & Scores is ", scores);
```

**Time Complexity**: O(n)

#### Remove using Filter Method

```javascript
const scores = [20, 50, 30, 88, 73];

console.log("Orignal Scores", scores);

const num = 50;

const result = scores.filter((score) => score != num); //+ Callback inside the filter. You can pass this outside the filter.
const result = scores.filter(function (value, index, arr) {
  return value != num;
});

console.log("Last Delete & Scores is ", result);
```

**Time Complexity**: O(n)

#### Remove using Splice Method

```javascript
const scores = [20, 50, 30, 88, 73];

console.log("Orignal Scores", scores);

scores.splice(0, 3); //+ Delete 3 Elements starting from index 0

// + Using splice method Delete the element which match the given condition
for (let i = 0; i < scores.length; i++) {
  if (scores[i] === 73) {
    scores.splice(i, 1);
  }
}
console.log("Last Delete & Scores is ", scores);
```

**Time Complexity**: O(n<sup>2</sup>)

#### Remove using For Loop

```javascript
const scores = [20, 50, 30, 88, 73];

console.log("Orignal Scores", scores);

let delete_number = 30;

const removeElement = () => {
  let newArray = [];

  for (let i = 0; i < scores.length; i++) {
    if (scores[i] !== delete_number) {
      newArray.push(scores[i]);
    }
  }
  return newArray;
};

console.log("Last Delete & Scores is ", removeElement());
```

**Time Complexity**: O(n)

---

#### Remove using Set method

```javascript
const classes = [1, 3, 4, 4, 15, 15, 6, 6];

console.log("Original Array", classes);

const uniqueArray = [...new Set(classes)];

console.log(uniqueArray);
```

**Time Complexity**: O(n)

#### Remove using Filter Method

```javascript
const classes = [1, 3, 4, 4, 15, 15, 6, 6];

console.log("Original Array", classes);

const uniqueArray = classes.filter((value, index, self) => self.indexOf(value) === index);

console.log(uniqueArray);
```

**Time Complexity**: O(n<sup>2</sup>)

#### Remove using Reduce Method

- First Example:

```javascript
let age = [18, 21, 1, 1, 51, 18, 21, 5, 18, 7, 10];

console.log("orignal Age", age);

let uniqueAge = age.reduce((acc, curr) => {
  if (acc.indexOf(curr) === -1) {
    acc.push(curr);
  }
  return acc;
}, []);

console.log(uniqueAge);
```

- Second Example

```javascript
const classes = [1, 3, 4, 4, 15, 15, 6, 6];

console.log("Original Array", classes);

const uniqueArray = classes.reduce((accumulator, currentValue) => {
  if (!accumulator.includes(currentValue)) {
    accumulator.push(currentValue);
  }
  return accumulator;
}, []);

console.log(uniqueArray);
```

**Time Complexity**: O(n<sup>2</sup>)

#### Remove using forEach

```javascript
const array = [18, 21, 1, 1, 51, 18, 21, 5, 18, 7, 10];

console.log("orignal Array", array);

const uniqueArray = [];
array.forEach((value) => {
  if (!uniqueArray.includes(value)) {
    uniqueArray.push(value);
  }
});

console.log(uniqueArray);
```

**Time Complexity**: O(n<sup>2</sup>)
