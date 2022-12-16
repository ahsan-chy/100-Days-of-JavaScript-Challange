
### Question: 1
 
- Make a function in which users pass 50 inside the function parameter and the function will return 51 and if user pass 51 it will return 50.
- Make sure you may not use this in javascript function  **==, ===, + - / %, if, if else, switch, case** 

```javascript
function reverse(val) {
    let result = {
        1: 2, 
        2: 1
    }
    return result[val]

}
console.log(reverse(1))
```