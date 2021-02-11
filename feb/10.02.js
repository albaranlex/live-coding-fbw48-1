const car = {
  brandName: "Audi",
  modelYear: "2021",
  price: 20,
  colors: ["red", "black", "white"],
};
// Shallow Cloning an object using .assign()
const newClonedObj = { ...car };
console.log(newClonedObj);
newClonedObj.brandName = "BMW"; // no problem - with simple values
newClonedObj.colors[0] = "orange"; // problem with complex values like array
console.log(car); // brandName has the same values while colors has been modified

//**Note: newClonedObj.brandName is making a deep clone here while newClonedObj.colors[0] is just a reference.

//Recursion
//Factorial Example
const factorial = (num) => {
  if (num == 1) {
    return 1;
  }
  return num * factorial(num - 1); // calling the factorial fx loops the condition;
  // if we remove the factorial fx here, the fx will only run once;
};
console.log(factorial(7));

//*Deep Copy Using Recursiom
function deepCopy(obj) {
  if (typeof ob == "object") {
    return Object.keys(obj)
      .map((key) => ({ [key]: deepCopy(obj[key]) }))
      .reduce((acc, cur) => Object.assign(acc, cur), {});
  } else if (typeof obj == "array") {
    return obj.map(deepCopy);
  }
  return obj;
}

const testScores = {
  anna: 1,
  tom: 2,
  c: 1,
  d: 2,
  e: 2,
};

let score = Object.values(testScores);
const total = score.reduce((acc, cur) => {
  return acc + cur;
});
console.log(total);

const objectUserInfo = {
  userName: "Zain",
  age: 22,
};
console.log(objectUserInfo.hasOwnProperty(""));

Object.seal(objectUserInfo);
objectUserInfo.add = "Berlin";
console.log(objectUserInfo);
