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

//For Loops
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
    }
    
//Printing Multiplication Table
for (let i = 1; i <=10; i++) {
    console.log(`${i} * 1 = ${i * 1}`);
}   //console.log(i, " * 1 = ", i * 1); 

//UpperCasing the Entire Array
const chrArr = ["Hello", "From", "The Other", "Side"]
for (let i = 0; i <chrArr.length; i++) {
    console.log(chrArr[i].toUpperCase());
}

//Making the First Character of Each Array Capital 
const names = ["mark", "alexis", "albaran"]
for (let i = 0; i <names.length; i++) {
    console.log(`${names[i][0].toUpperCase()}${names[i].slice(1)}`);
    
}

//Excercises Starts Here

//OOD/EVEN REPORTER
for (var i = 0; i <=20; i++) {
    if (i % 2 === 0) {
        console.log(`${i} is even`)
    }
    else {console.log(i)
    }
}

//A Program That Produces the following Results

//100 200 300 400 500 600 700 800 900 1000
let text = "";
for (var i = 100; i<=1000; i += 100) {
    text += i + " ";
}
console.log(text);
console.log("-------------");


//0 2 4 6 8 10
text = "";
for (let i = 0; i <= 10; i++) {
    if (i % 2 == 0) {
        text += i + " ";
    }
}
console.log(text);
console.log("-------------");

//3 6 9 12 15
text = "";
for (let i =1; i <= 15; i++) {
    if (i % 3 == 0) {
        text += i + " ";
    }
}
console.log(text);
console.log("-------------");

//9 8 7 6 5 4 3 2 1 0
text ="";
for (var i = 9; i >= 0; i--) {
    text += i + " ";
}
console.log(text);
console.log("-------------");

//1 1 1 2 2 2 3 3 3 4 4 4 // Using Nested Loops
text = "";
for (let i =1; i <= 4; i++) {
    for (let r = 0; r < 3; r++) {
        text += i + " ";   
    }
}
console.log(text);
console.log("-------------");

//0 1 2 3 4 0 1 2 3 4 0 1 2 3 4
text = "";
for (let i =1; i <= 3; i++) {
    for (let r = 0; r <= 4; r++) {
        text += r + " ";   
    }
}
console.log(text);
console.log("-------------");

//1 1 1 2 2 2 3 3 3 4 4 4 // Without Using Nested Loops
text = "";
textRepeat = "";
for (var i = 1; i <= 4; i++) {
    if (i += 4) { 
    }
   
}

console.log(text);
console.log("-------------");

//SPLIT
let st = "Hi this is me";
let stToArr = st.split(" "); //Removes all spaces and converts string tp an array
console.log(stToArr);

//JOIN
let backToSt = stToArr.join(" ");
console.log(backToSt);
