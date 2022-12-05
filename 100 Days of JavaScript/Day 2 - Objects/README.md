### Object -- Shallow Copy 

```JavaScript
  const car = {
  id:1,
  name: "Audi",
  model: 2020
}
console.log(Object.values(car))

```


### Object -- Shallow Copy -- 

```JavaScript
const user = {
    firstName:"John",
    lastName:"Doe",
    age:50, eyeColor:"blue"
  }
  
  const u = user;  // --- Shallow Copy of User
  u.age = 10;      // Will change both x.age and user.age

  console.log(u.age)     //Output: 10
  console.log(user.age)  //Output: 10
```

### Object -- JSON.stringify() 

```JavaScript
const products = [
{ id: 1, title: 'laptop' },
{ id: 2, title: 'Mobile' },
{ id: 3, title: 'Charger'},
{ id: 4, title: 'watch' },];

console.log(typeof JSON.stringify(products), JSON.stringify(products));

```

### Object -- JSON.parse() 

```JavaScript

const person = '{"name":"John", "age":30, "city":"New York"}'

console.log(typeof JSON.parse(person), JSON.parse(person));


```
