// Arrow function
// reduce((accumulator, currentValue) => { /* … */ }, initialValue)
// reduce((accumulator, currentValue, currentIndex) => { /* … */ }, initialValue)
// reduce((accumulator, currentValue, currentIndex, array) => { /* … */ }, initialValue)

// Reduce(accumulator, current, index, array)

let score = [10,20,5,10,50,91,10,7,9,45];

// + Find Sum by using core programming 
let findSum = (score) => {
    let sum = 0;
    for (let i = 0; i < score.length; i++) {
        sum = sum + score[i];
    }
    return sum;
}
console.log(findSum(score));

// + Find Sum using **Reduce** Method 
let sum = score.reduce(function(acc, curr){
    acc =  acc+curr 
    return acc;
}, 0)

console.log(sum)

//* Find Max in array
let scores = [10,20,5,10,50,91,10,7,9,45];

let maxEle = (scores) => {
    let max = scores[0];
    for (let i = 0; i < scores.length; i++) {
        if(scores[i] > max){
            max = scores[i];
        }
    }
    return max;
}

console.log(maxEle(scores));

// + Find Max using **Reduce** Method 
let maxElem = scores.reduce((max, curr)=>{
    if(curr > max)
    {
        max = curr;
    }
    return max
}, scores[0])

console.log(maxElem);

// - Remove Dublicate from array
let age = [18, 21, 1, 1, 51, 18, 21, 5, 18, 7, 10];

let uniqueAge = age.reduce((acc, curr) => {
  if (acc.indexOf(curr) === -1) {
    acc.push(curr);
  }
  return acc;
}, []);

console.log(uniqueAge);