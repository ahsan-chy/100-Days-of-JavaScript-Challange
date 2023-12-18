## Array Problems Solutions

Table of Problems

- Remove Element from array
  - Remove First Element from Array
  - Remove Last Element from Array
  - Remove using Filter Method
  - Remove using Splice Method
  - Remove using For Loop

#### Remove First Element from Array

```javascript
const scores = [20, 50, 30, 88, 73];

console.log("Orignal Scores", scores);

scores.shift();

console.log("First Delete & Scores is ", scores);
```

#### Remove Last Element from Array

```javascript
const scores = [20, 50, 30, 88, 73];

console.log("Orignal Scores", scores);

scores.pop();

console.log("Last Delete & Scores is ", scores);
```

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