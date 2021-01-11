//Writing Functions with ES6
const sum = (x, y) => x + y;
console.log(sum(3, 4));  //This works without a return value.

const isBigger = (num1, num2) => num1 < num2;
console.log(isBigger(1, 2));   

const printFullWord = (firstName, age, add) => 
console.log(`Hi my name is ${firstName}. I am ${age} years old and I am from ${add}.`)
printFullWord("Alex", 30, "Hamburg");

let isLogged = false;
const login = () => {
    isLogged = true;
};
login()

//Arrays  (Assigning Multiple Values to a Variable)
let namesArr = ["Mark", "Alexis", "Albaran"];
console.log(namesArr[0]);

const numbers = [0, 1, 2 ,3 , 4, 5, 6 ,7];
console.log(numbers[3]);

//Loops
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
    }
    
//Printing Multiplication Table
for (let i = 1; i <=10; i++) {
    console.log(`${i} * 1 = ${i * 1}`);
}   //console.log(i, " * 1 = ", i * 1); 


