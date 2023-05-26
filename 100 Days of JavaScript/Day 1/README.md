
# Day 1: 


## 💡Day 1:  JavaScript Find Largest & Smallest Element in Array.


### Find Largest Element in Array.

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

### Find Smallest Element in Array.

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

### Largest, Smallest Element in single function.

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


### Find Largest and Smallest using ES6 Spread Operator.

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

