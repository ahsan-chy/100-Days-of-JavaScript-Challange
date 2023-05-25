const count = true;

// let countvalue = new Promise(function(resolve, rejected){  //* Here you can use arrow function also
// 	if(count)
// 		resolve("There is Count Value");
// 	else 
// 		rejected("There is no count value");
// })

// console.log(countvalue);

//- Promise Chaning 
// let countvalue = new Promise((resolve, rejected) => {
// 	if(count)
// 		resolve("1");
// 	else 
// 		rejected("0");
// })

// countvalue.then((data) => { 
//     console.log("data1", data);
//     return data;    
//   })
//   .then((data)=>{
//     console.log("data2", data);
//   })
//   .catch((error) =>{
//         console.log("Error:", error);
//     }
// );

// + Fetch with Async - Await
const posts = async() =>{
  const post = await fetch('https://jsonplaceholder.typicode.com/posts')
  .then(res => res.json())
  .then(data => console.log(data))
}
posts();

// + Fetch with Promise await
const post2 = new Promise(async function(resolve, rejecct){
  const post = await fetch('https://jsonplaceholder.typicode.com/posts')
  .then(res => res.json())
  .then(data => console.log(data))
})

// async function fun () {
//   const data = await fetch({
//     url: "www.google.com",
//     method: 'get',
//   })
//   console.log(data)
// }

// fun();