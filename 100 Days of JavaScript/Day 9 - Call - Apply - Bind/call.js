const person = {
    about: function(){
        return this.name + " is " + this.age + " year old";
    }
}

const p1 = {
    name: "Ahmed",
    age: 25,
}
const p2 = {
    name: "Kashif",
    age: 22,
}

console.log(person.about.call(p1));
console.log(person.about.call(p2));

console.log(typeof 0)