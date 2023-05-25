// + Hoisting on Variables
console.log(i);
// console.log(j);
// console.log(k);

// * Hoisting on Functions 
sayhello();
// saysalam();
// goodbye(); 


// * Hoisting on Functions 
function sayhello(){
    console.log("Hello Function");
}
const saysalam = function(){
    console.log("Salam Function");
}
let goodbye = () => console.log("Good Bye")

// + Hoisting on Variables
var i = 10;
let j ;
const k = 10;


