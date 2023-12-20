// - Remove Dublicate from Array - Set Method

// const classes = [1, 3, 4, 4, 15, 15, 6, 6];

// console.log("Original Array", classes);

// const uniqueArray = [...new Set(classes)];

// console.log(uniqueArray);

// - Remove Dublicate using - Filter Method

// const classes = [1, 3, 4, 4, 15, 15, 6, 6];

// console.log("Original Array", classes);

// const uniqueArray = classes.filter((value, index, self) => self.indexOf(value) === index);

// console.log(uniqueArray);

// - Remove Dublicate using - Reduce Method

// const classes = [1, 3, 4, 4, 15, 15, 6, 6];

// console.log("Original Array", classes);

// const uniqueArray = classes.reduce((accumulator, currentValue) => {
//   if (!accumulator.includes(currentValue)) {
//     accumulator.push(currentValue);
//   }
//   return accumulator;
// }, []);

// console.log(uniqueArray);

// + Example 2

// let age = [18, 21, 1, 1, 51, 18, 21, 5, 18, 7, 10];

// console.log("orignal Age", age);

// let uniqueAge = age.reduce((acc, curr) => {
//   if (acc.indexOf(curr) === -1) {
//     acc.push(curr);
//   }
//   return acc;
// }, []);

// console.log(uniqueAge);

// - Remove Dublicate using - forEach

// const array = [18, 21, 1, 1, 51, 18, 21, 5, 18, 7, 10];

// console.log("orignal Array", array);

// const uniqueArray = [];
// array.forEach((value) => {
//   if (!uniqueArray.includes(value)) {
//     uniqueArray.push(value);
//   }
// });

// console.log(uniqueArray);
