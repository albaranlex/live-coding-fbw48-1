// objects
const obj1 = {};
obj1["name"] = "Olga";
console.log(obj1);

const obj2 = {
  userName: "Hadi",
};
console.log(obj2);

const obj3 = new Object();

//Making an array of keys and values
const person = {
  userName: "Alex",
  age: 22,
  adress: "Hamburg",
};
console.log(Object.entries(person));
