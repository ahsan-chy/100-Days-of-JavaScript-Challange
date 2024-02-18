## Array Problems Solutions

Table of Problems

- Remove Element from array
  - [Remove First Element from Array](#remove-first-element-from-array)
  - [Remove Last Element from Array]()
  - [Remove using Filter Method]()
  - [Remove using Splice Method]()
  - [Remove using For Loop]()
- Remove Dublicate from array
  - [Remove using Set method]()
  - [Remove using Filter Method]()
  - [Remove using Reduce Method]()
  - [Remove using forEach]()
  -
- [Find Largest & Smallest Element in Array]()
- [Find Second Largest Element in Array]()
- [Object to Array Convert]() 
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



#### Find Largest Element in Array.

```javascript
  // Find Largest Element in Array
function largest(score){
    let largest = score[0];

    for(let i=0; i<score.length; i++){
      if(score[i] > largest){
        largest = score[i]
      }
    }
    return largest
  }
console.log(largest([11,23,31,5,67,42,96, 23,96,44]))
// output: 96
```

#### Find Smallest Element in Array.

```javascript
  // Find Smallest Element in Array
function smallest(score){
    let smallest = score[0];

    for(let i=0; i<score.length; i++){
      if(score[i] < smallest){
        smallest = score[i]
      }
    }
    return smallest
  }
console.log(smallest([11,23,-31,5,67,42,96,-23,96,44]))
// output: -31
```

#### Largest, Smallest Element in single function.

```javascript
  //Find Largest and Smallest in single Function
function largestsmallest(score){
    let largest = score[0];
    let smallest = score[0];
    
    for(let i=0; i<score.length; i++){
      if(score[i] < smallest){
        smallest = score[i]
      }
      if(score[i] > largest){
        largest = score[i]
      }
    }
    // return [smallest, largest]
    // or 
      return {smallest, largest}
  }
  console.log(largestsmallest([11,23,31,5,67,42,96, 23,96,44]))
  // {Smalles: 5, largest: 96}
```


#### Find Largest and Smallest using ES6 Spread Operator.

```javascript
  //Finding Largest and Smallest using ES6 Spread Operator
function largestElement(score){
    const max = Math.max(...score);
    return max
}
function smallestElement(score){
    const min = Math.min(...score);
    return min
}
console.log(largestElement([11,23,31,5,6,23,6,-44]))   //31
console.log(smallestElement([11,23,31,5,67,23,6,4]))   // 4

```


#### Find Second Largest Element in Array

- **C++**

```javascript
#include <bits/stdc++.h>
using namespace std;

int main() {
	int arr[] = {6, 4, 1, 2, 8, 5};
	int max1 = arr[0], max2 = INT_MIN;
	for(int i = 1; i < 6; i++) {
		if(arr[i] > max1 ) {
			max2 = max1;
			max1 = arr[i];
		} else if(arr[i] > max2) {
			max2 = arr[i];
		}
		
	}
	cout << max2 << endl;
	return 0;
}
```


- **Javascript**

```javascript
let arr = [6, 4, 1, 2, 8, 5];
let max1 = arr[0], max2 = -Infinity;
for (let i = 1; i < 6; i++) {
    if (arr[i] > max1) {
        max2 = max1;
        max1 = arr[i];
    } else if (arr[i] > max2) {
        max2 = arr[i];
    }
}
console.log(max2);
```



