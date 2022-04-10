

// var a = 10;
// var b = 20;
// var c = a < b ? a : b ;

// a < b ? console.log(true) : console.log(false);

// console.log(c);

const object = {
    id:1,
    name:"deepshikha",
    city:"indore",
    key: function display(){
       //console.log("hi");
    }
};
object.key();

//console.log(object["name"]);
object["org"] = "TCS";
//console.log(object);

const d = 10;
object[d] = "sumeet";
//console.log(object);
object.display = function (){
    // console.log(object.name);
    // console.log(object.city);
    // console.log("hi");
}
object.display();

for(let i in object){
    //console.log(i);
}

const person = Object.create(null);
person.fname = "avinash";
person.city = "Bhopal";
//console.log(person);

const person1 = new Object();
person1.name ="sumeet";
person1.city = "Indore";
//console.log(person1);

// console.log(Object.keys(person1));

// console.log(person1.hasOwnProperty("name"));

delete person1.name;
//console.log(person1);


const employee = {
   address:{
       city:"Indore",
       code:"4547475",
       details:{
           houseNo:"147"
       },
   },
   org:"VSS",
   hobbies:['music','sports','books']
};

//console.log(employee.address.city);

const {address} = employee;
//console.log(address.city);

const {city} = employee.address;
console.log(city);

const {org} = employee;
//console.log(org);

const {houseNo} = employee.address.details;
//console.log(houseNo);


let hobbies = ['books','music','sports'];
let num = [1,2];
console.log(hobbies=[...hobbies,num]);

const [xyz,...rest] = hobbies;
cons
//console.log(xyz,rest);

for(let j of hobbies){
    //console.log(j);
}

console.log(Object.keys(employee).length);

