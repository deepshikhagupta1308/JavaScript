//Problem 1

const object = {
    message: 'Hello, World!',
    getMessage() {
      const message = 'Hello, Earth!';
      return this.message;
    }
  };
  console.log(object.getMessage()); // What is logged?


//Problem 2

const object1 = {
    message: 'Hello, World!',
    getMessage() {
      const message = 'Hello, Earth!';
      return this.message;
    }
  };
  
  const getMes = object1.getMessage;
  console.log(getMes); 
  

//Problem 3

function Pet(name) {
    this.name = name;
    this.getName = () => this.name;
  }
  const cat = new Pet('Fluffy');
  console.log(cat.getName()); // What is logged?
  const { getName } = cat;
  console.log(getName());     // What is logged?

//Problem 4

const object2 = {
    who: 'World',
    greet() {
      return `Hello, ${this.who}!`;
    },
    farewell: () => {
      return `Goodbye, ${this.who}!`;
    }
  };
  console.log(object2.greet());    // What is logged?
  console.log(object2.farewell()); // What is logged?
  

//Problem 5

function func(x){
    console.log(typeof x, arguments.length);
   }
   func(); //==> ??
   func(7); //==> ??
   func("1", "2", "3"); //==> ??


//Problem 6

const fn = (a, ...numbers, x, y) => {
    console.log(x, y)
};
fn();


//Problem 7

function greet() {
    console.log(this.name);
}
const sayHello1 = greet.bind({name: "Tom Cruise"});
sayHello1();
const sayHello2 = sayHello1.bind({name: "Zac Efron"});
sayHello2();



this.x = 9;    // 'this' refers to global 'window' object here in a browser
const module = {
  x: 81,
  getX: function() { return this.x; }
};

module.getX();








   
  




  
  