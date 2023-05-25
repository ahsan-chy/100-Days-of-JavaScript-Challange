
# Day 5: Promise

Table of content 
- Promise examples
    - Chaning in promise
    - Promise.all()
- Async Await
- SetTimeout
- SetInterval
- Interview Questions

<br>

### Promise
- Promises are used to handle Asynchronous operation in JavaScript.
- Promise is an special JavaScript Object that links the **Producing code** & **consuming code** together.
- Promise have 3 States 
    - Pending
    - Fulfilled 
    - Rejected

[Detail Promise and Promise Chaining](https://www.programiz.com/javascript/promise)

```javascript
    api().then(function(result) {
        return api2() ;
    }).then(function(result2) {
        return api3();
    }).then(function(result3) {
        // do work
    }).catch(function(error) {
        //handle any error that may occur before this point 
    });
```

#### Example 1: Promise

```javascript
const count = true;

let countvalue = new Promise((resolve, rejected) => {
	if(count)
		resolve("1");
	else 
		rejected("0");
})

countvalue.then((data) => { 
    console.log(data);
  })
  .catch((error) =>{
        console.log("Error:", error);
    }
) 
// Output : 1
```

#### Chaining in Promise
```javascript 
let countvalue = new Promise((resolve, rejected) => {
	if(count)
		resolve("1");
	else 
		rejected("0");
})

countvalue.then((data) => { 
    console.log("data1", data);
    return data;    // this will return another promise and next then will use this promise and print that.
  })
  .then((data)=>{
    console.log("data2", data);
  })
  .catch((error) =>{
        console.log("Error:", error);
    }
);
```

#### Promise.all()

Promise.all is a built-in method that allows you to handle multiple promises concurrently and wait for all of them to resolve or reject.

The resulting promise returned by Promise.all fulfills when all the input promises have fulfilled, and it rejects if any of the input promises reject.

```javascript 
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('The first promise has resolved');
    resolve(10);
  }, 1000);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('The second promise has resolved');
    resolve(20);
  }, 1000);
});
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('The third promise has resolved');
    resolve(30);
  }, 1000);
});

Promise.all([p1, p2, p3]).then((results) => {
  const total = results.reduce((p, c) => p + c);

  console.log(`Results: ${results}`);
  console.log(`Total: ${total}`);
});
```


[Refference playlist](https://youtube.com/playlist?list=PLRqwX-V7Uu6bKLPQvPRNNE65kBL62mVfx)

![Multiple APIs Promise](https://user-images.githubusercontent.com/85479513/212835510-4cae862a-8841-4440-ab9d-29c019f4f8f8.png)
 
[My function is returning a promise while trying to render an image](https://stackoverflow.com/questions/67234111/my-function-is-returning-a-promise-while-trying-to-render-an-image)


### [JS Event LOOP](https://www.thetechplatform.com/post/the-javascript-event-loop-explained)

![settimeout](https://static.wixstatic.com/media/0f65e1_a50ce7f9ceec402e82e63c6ccddc40a4~mv2.gif)

#### Question 1: setTimeout - let

```javascript
for(let i =0; i<5; i++){
	setTimeout(()=>{
		console.log(i);     // 0 1 2 3 4 
	}, 1000)
}
```

#### Question 2: setTimeout - var

```javascript
for(var i =0; i<5; i++){
	setTimeout(()=>{
		console.log(i);     // 5 5 5 5 5 
	}, 1000)
}
```

If I put 3 instead of 5
```javascript
for(var i =0; i<3; i++){
	setTimeout(()=>{
		console.log(i);     // 3 3 3  
	}, 1000)
}
```


[Code link](https://replit.com/@ahaniqbal/interview-question-Settimeout#index.js)

If you need to print **`0 1 2 3 4`** using var then wrap settimeout to **function**
```javascript
for(var i =0; i<5; i++){
	function fun(i){
		setTimeout(()=>{
		console.log(i, " ");
	}, 1000)
	}
	fun(i);
}
```
If you need to print **`0 1 2 3 4`** using var then wrap settimeout to **IIFE**
```javascript
for(var i =0; i<5; i++){
	((i)=>{
		setTimeout(()=>{
		console.log(i, " ");
	}, 1000)
	})(i)
}
```