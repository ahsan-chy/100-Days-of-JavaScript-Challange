
# Day 4: Array Method

Here are some of the most commonly used methods of arrays in JavaScript:

- Find 
- findIndex
- indexOf
- Map 
- Filter
- Reduce

Some Other Methods in Array
- push()
- pop()
- unshift()
- shift()
- splice()
- slice()
- concat()
- join()
- reverse()
- sort()


![array methods](https://github.com/ahsan-chy/100-Days-of-JavaScript-Challange/assets/85479513/3e1e3349-d409-4965-81ed-27e7b793f453)
![array methods](https://github.com/ahsan-chy/100-Days-of-JavaScript-Challange/assets/85479513/7147ac16-b941-4fde-98aa-c8d6e3351c4c)


## Find


// ---- Method 1 ----//
```javascript
let score = [10,20,5,10,45,50,91,10];

let result = score.find((f)=> f>50 )
let results = score.find((f)=> f>20 && f<91)
console.log("Find Result: ", results)
```

// ---- Method 2 ----//
```javascript
const inventory = [
    {name: 'apples', quantity: 2},
    {name: 'cherries', quantity: 5},
    {name: 'cherries', quantity: 8},
    {name: 'bananas', quantity: 0},
    {name: 'cherries', quantity: 15}
  ];
  
const resultname = inventory.find( ({ name }) => name === 'cherries' );
console.log(resultname)
```

//---- ExAMPLE 2 ----//
```javascript
const products = [
    { name: 'Laptop', price: 32000, brand: 'Lenovo', color: 'Silver' },
    { name: 'Phone', price: 700, brand: 'Iphone', color: 'Golden' },
    { name: 'Watch', price: 3000, brand: 'Casio', color: 'Yellow' },
    { name: 'Aunglass', price: 300, brand: 'Ribon', color: 'Blue' },
    { name: 'Camera', price: 9000, brand: 'Lenovo', color: 'Gray' },
];
const bigNumbers = products.find(product => product.price > 4000);
console.log(bigNumbers);
//output:{ name: 'Laptop', price: 32000, brand: 'Lenovo', color: 'Silver' }
```

[Video Refference Link](https://www.youtube.com/watch?v=jz8Vo6Df57c&list=TLPQMDEwMTIwMjPOXvynotCRtA&index=5)

## FindIndex

```javascript
let score2 = [10,20,5,10,50,91,10,7,9,45];

let result2 = score2.findIndex(f => f>50)
let result3 = score2.sort().findIndex((f) => f>20 && f<91)

console.log("FindIndex: ", result3)
```

```javascript

// ---- Method 2 ----//
const Season = [
    
    {
        month:'March',
        season: 'Spring',
      },
    {
      month:'January',
      season: 'Winter',
    },
    {
      month:'March',
      season: 'Spring',
    },
    {
      month:'June',
      season: 'Summer',
    },
    {
      month:'March',
      season: 'Spring',
    },
    {
      month:'August',
      season: 'Autumn',
    },
  ]
  const index = Season.findIndex((m) => m.month === "August");  //-- Return Index 5

  const arrayHaveMonth = Season[Season.findIndex((m) => m.month === "August")];  //-- Return Index Values

  console.log("The index of March Month is",index)
```


## indexOf

// ---- Method 2 ----//
```javascript
const Season = [
    
    {
        month:'March',
        season: 'Spring',
      },
    {
      month:'January',
      season: 'Winter',
    },
    {
      month:'March',
      season: 'Spring',
    },
    {
      month:'June',
      season: 'Summer',
    },
    {
      month:'March',
      season: 'Spring',
    },
    {
      month:'August',
      season: 'Autumn',
    },
  ]
  const index = Season.map( (loopVariable) => loopVariable.month).indexOf("March");  //-- Return Index 0

```

## Map()

Map() creates a new array from calling a function for every array element. map() does not execute the function for empty elements. map() does not change the original array.

```diff
// map((element) => { /* … */ })
// map((element, index) => { /* … */ })
! map((element, index, array) => { /* … */ })
```

```javascript
const array1 = [1, 4, 9, 16];

// Pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]
```


## Filter()

```diff
// filter((element) => { /* … */ })
// filter((element, index) => { /* … */ })
// filter((element, index, array) => { /* … */ })

! Filter(element, index, array)
```

```javascript
const arr = [1, 2, 3, 4, 5, 6];
const filtered = arr.filter(el => el === 2 || el === 4);
```

```javascript
let man = {
	'Students': [{
			"name": "Raj",
			"Age":"15",
			"RollNumber": "123",
			"Marks": "99",
			
		}, {
			"name": "Aman",
			"Age":"14",
			"RollNumber": "223",
			"Marks": "69",
		},
		{
			"name": "Vivek",
			"Age":"13",
			"RollNumber": "253",
			"Marks": "89",
		},
		]
};

let filteredStudent = man.Students.filter((m) => m.Age >=15)
console.log(filteredStudent);

```

## Reduce()

```diff
// reduce((accumulator, currentValue) => { /* … */ }, initialValue)
// reduce((accumulator, currentValue, currentIndex) => { /* … */ }, initialValue)
// reduce((accumulator, currentValue, currentIndex, array) => { /* … */ }, initialValue)

! Reduce(accumulator, current, index, array)
```
The reduce() method executes a reducer function on each element of the array and returns a single output value.

```javascript
let score = [10,20,5,10,50,91,10,7,9,45];

let result = score.reduce((acc, curr) => {
    return acc+curr 
}, 0)

console.log(result)
```


![reduce in js](https://github.com/ahsan-chy/100-Days-of-JavaScript-Challange/assets/85479513/65a22e94-ce41-4f1c-8589-ce4e93f66862)

#### Find Sum by using core programming 

```javascript
let score = [10,20,5,10,50,91,10,7,9,45];

let findSum = (score) => {
    let sum = 0;
    for (let i = 0; i < score.length; i++) {
        sum = sum + score[i];
    }
    return sum;
}
console.log(findSum(score));
```


####  Find Sum using **Reduce** Method 
```javascript
let score = [10,20,5,10,50,91,10,7,9,45];

let sum = score.reduce(function(acc, curr){
    acc =  acc+curr 
    return acc;
}, 0)

console.log(sum)
```

#### Find Max in array
```javascript
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
```

#### Find Max using **Reduce** Method 

```javascript
let scores = [10,20,5,10,50,91,10,7,9,45];

let maxElem = scores.reduce((max, curr)=>{
    if(curr > max)
    {
        max = curr;
    }
    return max
}, scores[0])

console.log(maxElem);
```
### Remove Dublicate from array
 
```javasscript
let age = [18, 21, 1, 1, 51, 18, 21, 5, 18, 7, 10];

let uniqueAge = age.reduce((acc, curr) => {
  if (acc.indexOf(curr) === -1) {
    acc.push(curr);
  }
  return acc;
}, []);

console.log(uniqueAge);
```


## Push()
In JavaScript, you can add new values to an array using the push() method. The push() method **adds one or more elements to the `end` of an array** and returns the new length of the array.

```javascript
let myArray = [1, 2, 3];
myArray.push(4);      // adds 4 to the end of the array
myArray.push(5, 6);   // adds 5 and 6 to the end of the array
console.log(myArray); // [1, 2, 3, 4, 5, 6]

``` 


## pop()
```javascript

```

## unshift()
In JavaScript, you can **add a new element to the `beginning` of an array using the unshift()** method. The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.
```javascript
let myArray = [2, 3, 4];
myArray.unshift(1); // adds 1 to the beginning of the array
console.log(myArray); // [1, 2, 3, 4]

```
## shift()
```javascript

```

## slice()
```javascript

```

![slice   Splice](https://github.com/ahsan-chy/100-Days-of-JavaScript-Challange/assets/85479513/24b77a91-a12a-499e-ae6b-5a619f6bede7)

## splice()
In JavaScript, you can **add a new element at `any position` within an array using the splice()** method. The splice() method allows you to add, remove, or replace elements in an array.

The splice() method takes three arguments: the index at which to start adding elements, the number of elements to remove (if any), and the new element(s) to add. If you don't want to remove any elements, you can set the second argument to 0.

Here's an example of how to use the splice() method to add a new element at a specific position within an array:
```javascript
let myArray = [1, 2, 4, 5];
myArray.splice(2, 0, 3); // adds 3 at index 2
console.log(myArray); // [1, 2, 3, 4, 5]

```



## concat()
```javascript

```
## join()
```javascript

```
## reverse()
```javascript

```

**forEach()** - This method calls a function for each element in an array.

```javascript
const numbers = [1, 2, 3, 4];
numbers.forEach(num => console.log(num * 2));
// output: 2, 4, 6, 8

```
**sort()** - This method sorts the elements of an array in place.

```javascript
const numbers = [3, 1, 4, 2, 5];
numbers.sort();
console.log(numbers); // [1, 2, 3, 4, 5]

```

**some()** - This method tests whether at least one element in an array passes a test provided by a function.
```javascript
const numbers = [1, 3, 5, 7];
const hasEvenNumber = numbers.some(num => num % 2 === 0);
console.log(hasEvenNumber); // false

```


**every()** - This method tests whether all elements in an array pass a test provided by a function.

```javascript
const numbers = [2, 4, 6, 8];
const areEvenNumbers = numbers.every(num => num % 2 === 0);
console.log(areEvenNumbers); // true

```

.

