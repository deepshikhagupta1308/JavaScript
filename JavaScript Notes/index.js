//Constructor Functions: It is used to create object using new keyword.
//Construction function create only in normal function.
//In Arrow function we can not create constructor function.



// function person(name,org){
//      this.name=name;
//      this.org=org;
// }
// const avinash = new person("Avinash Rawat","VSS");
// console.log(avinash);

// const person = (name,org) => {
//    this.name=name;
//    this.org=org;
// }
// const avinash = new person("avinash","vss");
// console.log(avinash);

class Person {
    constructor(name,org){
        this.name=name;
        this.org=org;
    }
    // newPerson = () => {        //creating copy with every object
    //     console.log("hi");
    // }
    display(){
        console.log("display",this.name);
    }
}
const deepshikha = new Person("deepshikha","vss");
const avinash = new Person("sumeet","VSS");
const abc = new Person("XYZ","PQR");
console.log(avinash.display());





