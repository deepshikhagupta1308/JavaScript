const object = {
  id: "0001",
  type: "donut",
  name: "Cake",
  image: {
    details: {
      url: {
        url: "images/0001.jpg",
      },
      dimension: {
        width: "200",
        height: "200",
      },
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
newObject.image.details.dimension.height = "500";
console.log(newObject);
console.log(object.image.details.dimension.height);
