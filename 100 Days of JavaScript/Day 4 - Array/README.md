
# Array Method

Here are some of the most commonly used methods of arrays in JavaScript:

- Find 
- findIndex
- indexOf
- Filter
- Map 
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
## Filter

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
## splice()
In JavaScript, you can **add a new element at `any position` within an array using the splice()** method. The splice() method allows you to add, remove, or replace elements in an array.

The splice() method takes three arguments: the index at which to start adding elements, the number of elements to remove (if any), and the new element(s) to add. If you don't want to remove any elements, you can set the second argument to 0.

Here's an example of how to use the splice() method to add a new element at a specific position within an array:
```javascript
let myArray = [1, 2, 4, 5];
myArray.splice(2, 0, 3); // adds 3 at index 2
console.log(myArray); // [1, 2, 3, 4, 5]

```
## slice()
```javascript

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
## sort()
```javascript

```