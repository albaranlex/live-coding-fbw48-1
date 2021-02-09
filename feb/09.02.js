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

//Array of Arrays
const arrOfArr = [
    [1,2],
    [2,3],
    [3,4]
];
console.log(arrOfArr[1])[1] //outputs 3


//Compound Objects
const objects = [
    {name: 'Alex', lastName: 'Albaran'},
    {name: 'Jakob', lastName: 'Ehlers', 
    printOut: function() {
        console.log('Hi');  
    }};
];

objects[1].printOut(); // Calls out function

