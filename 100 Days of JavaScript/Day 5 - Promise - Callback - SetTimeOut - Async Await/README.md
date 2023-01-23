
# Promises


- Promise is an special JavaScript Object that links the **Producing code** & **consuming code** together.
- Promises are used to handle Asynchronous operation in JavaScript.
- Promise have 3 States 
    - Pending
    - Fulfilled 
    - Resolved

[JavaScript Promise and Promise Chaining](https://www.programiz.com/javascript/promise)

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

[Refference playlist](https://youtube.com/playlist?list=PLRqwX-V7Uu6bKLPQvPRNNE65kBL62mVfx)

![Multiple APIs Promise](https://user-images.githubusercontent.com/85479513/212835510-4cae862a-8841-4440-ab9d-29c019f4f8f8.png)
 
[My function is returning a promise while trying to render an image](https://stackoverflow.com/questions/67234111/my-function-is-returning-a-promise-while-trying-to-render-an-image)


## Promise & Settimeout