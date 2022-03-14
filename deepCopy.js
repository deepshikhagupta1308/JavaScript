const object = {
    name: "Deepshikha",
    qualification:"Graduation",
    city:"Indore",
    details : {
        address:"168",
        phone:{
            number1:"1234567892",
            number2:"9876540321"
        }
    }
  };
  
  function deepCopy(object){
    const object1 = {};
    
    for (const property in object) {

    if (typeof object[property] !== "object") {
      
      object1[property] = object[property];
    
    }
    else if (typeof object[property] === "object") {
      
      object1[property] = deepCopy(object[property]);
    
    }
  }
  
    return object1;
  };
  
  object2 = deepCopy(object);
  object2.details.address = "789";
  console.log(object2);
  console.log(object.details.address);