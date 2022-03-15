const object = {
  name: "Deepshikha",
  qualification: "Graduation",
  city: "Indore",
  details: {
    address: "168",
    phone: {
      number1: "1234567892",
      number2: "9876540321",
    },
  },
};

function deepCopy(object) {
  const copiedObject = {};

  for (const property in object) {
    if (typeof object[property] !== "object") {
      copiedObject[property] = object[property];
    } else if (typeof object[property] === "object") {
      copiedObject[property] = deepCopy(object[property]);
    }
  }

  return copiedObject;
}

newObject = deepCopy(object);
newObject.details.address = "789";
console.log(newObject);
console.log(object.details.address);
