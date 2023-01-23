//Array Find Method

// ---- Method 1 ----//
let score = [10,20,5,10,45,50,91,10];

let result = score.find((f)=> f>50 )
let results = score.find((f)=> f>20 && f<91)
// console.log("Find Result: ", results)


// ---- Method 2 ----//
const inventory = [
    {name: 'apples', quantity: 2},
    {name: 'cherries', quantity: 5},
    {name: 'cherries', quantity: 8},
    {name: 'bananas', quantity: 0},
    {name: 'cherries', quantity: 15}
    
  ];
  
const resultname = inventory.find( ({ name }) => name === 'cherries' );
// console.log(resultname)


//---- ExAMPLE 2 ----//
const products = [
    { name: 'Laptop', price: 32000, brand: 'Lenovo', color: 'Silver' },
    { name: 'Phone', price: 700, brand: 'Iphone', color: 'Golden' },
    { name: 'Watch', price: 3000, brand: 'Casio', color: 'Yellow' },
    { name: 'Aunglass', price: 300, brand: 'Ribon', color: 'Blue' },
    { name: 'Camera', price: 9000, brand: 'Lenovo', color: 'Gray' },
];
const bigNumbers = products.find(product => product.price > 4000);
// console.log(bigNumbers);
//output:{ name: 'Laptop', price: 32000, brand: 'Lenovo', color: 'Silver' }


// ---- Video Reference Link *Find & Find Index* ----//
//--- https://www.youtube.com/watch?v=jz8Vo6Df57c&list=TLPQMDEwMTIwMjPOXvynotCRtA&index=5

//---- Array Find ArrayIndex Method

let score2 = [10,20,5,10,50,91,10,7,9,45];

let result2 = score2.findIndex(f => f>50)
let result3 = score2.sort().findIndex((f) => f>20 && f<91)

// console.log("FindIndex: ", result3)

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
  
//   const index = Season.map( (loopVariable) => loopVariable.month).indexOf("March");  //-- Return Index 0
  
    const index = Season.findIndex((m) => m.month === "August");  //-- Return Index 5

  const arrayHaveMonth = Season[Season.findIndex((m) => m.month === "August")];  //-- Return Index Values

  console.log("The index of March Month is",index)


//-- Video Link Array 'findIndex' method in Javascript
// https://youtu.be/QL5jKmVPvUY?list=TLPQMDEwMTIwMjPOXvynotCRtA

