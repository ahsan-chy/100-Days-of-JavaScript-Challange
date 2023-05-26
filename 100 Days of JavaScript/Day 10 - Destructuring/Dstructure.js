const user = {
    name: "Anonymous",
    age: 21,
    friend: {
        name: 'Ali',
        age: 23
    },
//    fun: () => {
//         console.log(age)
//     }
}

// const userdeep = {...user};
// const userdeep = JSON.parse(JSON.stringify(user));
const userdeep = structuredClone(user);

userdeep.friend.name = "Khan";

console.log(user);
console.log(userdeep);