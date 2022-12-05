const user = {
    firstName:"John",
    lastName:"Doe",
    age:50, eyeColor:"blue"
  }
  
  const u = user;  // --- Shallow Copy of User
  u.age = 10;      // Will change both x.age and user.age

  console.log(u.age)     //Output: 10
  console.log(user.age)  //Output: 10


// Object.values()
const car = {
  id:1,
  name: "Audi",
  model: 2020
}
console.log(Object.values(car))

// Find those comments who have Rating greater then 4
  let product = [
    {
    id: 101,
    price: 50000,
    title: "mobile",
    isAvail: true,
    color: ['red', 'green', 'blue'],
    reviews: [
      {
        id: 1,
        userName: "Ali",
        rating: 5,
        comments: "good product"
      },
      {
        id: 2,
        userName: "Ahmad",
        rating: 4.5,
        comments: " not sat product"
      },
      {
        id: 2,
        userName: "Ahmad",
        rating: 1.5,
        comments: " not sat product"
      }
    ]},
    {
      id: 101,
      price: 50000,
      title: "laptop",
      isAvail: true,
      color: ['red', 'green', 'blue'],
      reviews: [
        {
          id: 1,
          userName: "Ali",
          rating: 5,
          comments: "good product"
        },
        {
          id: 2,
          userName: "Ahmad",
          rating: 3.5,
          comments: " not sat product"
        },
        {
          id: 2,
          userName: "Ahmad",
          rating: 1.5,
          comments: " not sat product"
        }
      ]},
      {
        id: 101,
        price: 5000,
        title: "Power Bank",
        isAvail: true,
        color: ['red', 'green', 'blue'],
        reviews: [
          {
            id: 1,
            userName: "Ali",
            rating: 3.6,
            comments: "good product"
          },
          {
            id: 2,
            userName: "Ahmad",
            rating: 3.5,
            comments: " not sat product"
          },
          {
            id: 2,
            userName: "Ahmad",
            rating: 1.5,
            comments: " not sat product"
          }
        ]}
    ]; 

for(let p=0; p<product.length; p++) {
  for(let r=0; r<product[p].reviews.length; r++ )
  {
    if(product[p].reviews[r].rating >= 4)
    {
      console.log(product[p].title)
      console.log(product[p].reviews[r].userName)
      console.log(product[p].reviews[r].rating)
      console.log(product[p].reviews[r].comments)
    }
  }
}


  //JSON.stringify()
  const products = [
    { id: 1, title: 'laptop' },
    { id: 2, title: 'Mobile' },
    { id: 3, title: 'Charger'},
    { id: 4, title: 'watch' },];
    
    console.log(typeof JSON.stringify(products),"\n", JSON.stringify(products));
    
    // JSON.parser()
    const person = '{"name":"John", "age":30, "city":"New York"}'
    
    console.log(typeof JSON.parse(person),"\n", JSON.parse(person));
    