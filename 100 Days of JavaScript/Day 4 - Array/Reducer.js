// Arrow function
// reduce((accumulator, currentValue) => { /* … */ }, initialValue)
// reduce((accumulator, currentValue, currentIndex) => { /* … */ }, initialValue)
// reduce((accumulator, currentValue, currentIndex, array) => { /* … */ }, initialValue)

// Reduce(accumulator, current, index, array)

let score = [10,20,5,10,50,91,10,7,9,45];

let result = score.reduce(function(acc, curr){
    return acc+curr 
}, 0)

console.log(result)