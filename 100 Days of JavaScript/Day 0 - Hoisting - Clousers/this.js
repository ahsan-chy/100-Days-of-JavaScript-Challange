// console.log(global);

// console.log(this);

// console.log(window);

var z = 20;

function greet() {
    // var z = 10;
    console.log('Hello, ' + this); // Outputs "Hello, [object Window]"
  }
  console.log(this.z) // undefined
  
  greet();

  let user = {
    name: 'Ahsan Iqbal',
    age: 24,
    say() {
      //here this is current object which is user
      console.log(this.name); //print Ahsan Iqbal
    },
  };

  user.say();