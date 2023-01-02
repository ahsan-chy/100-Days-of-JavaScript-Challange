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


.

### Convert an Object to an Array of Objects

- [Ref Link](https://bobbyhadz.com/blog/javascript-convert-object-to-array-of-objects)

```javascript
const obj = {
  emp1: {
    id: 1,
    name: 'Alice',
  },
  emp2: {
    id: 2,
    name: 'Bob',
  },
};

// ✅ Using Object.values()
const arrOfObj1 = Object.values(obj);
console.log(arrOfObj1); // 👉️ [{id: 1, name: 'Alice'}, {id: 2, name: 'Bob'}]

// ✅ Using Object.keys()
const arrOfObj2 = Object.keys(obj).map(key => obj[key]);
console.log(arrOfObj2); // 👉️ [{id: 1, name: 'Alice'}, {id: 2, name: 'Bob'}]

// ✅ Using Object.entries()
const arrOfObj3 = Object.entries(obj).map(entry => entry[1]);
console.log(arrOfObj3); // 👉️ [{id: 1, name: 'Alice'}, {id: 2, name: 'Bob'}]

// 🚨 Preserving nested keys
const withNestedKeys = Object.entries(obj).map(entry => {
  return {[entry[0]]: entry[1]};
});

// 👇️ [{emp1: {id: 1, name: 'Alice'}}, {emp2: {id: 2, name: 'Bob'}}]
console.log(withNestedKeys);

```