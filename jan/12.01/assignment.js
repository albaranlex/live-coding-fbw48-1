// Create a function that takes a number as its only argument and returns true if it's less than or equal to zero, otherwise return false.
function isZero(num) {
    if (num <= 0) {
        return true;
    }
    else {
        return false;
}
}
console.log(isZero(3));
console.log(isZero(0));

// Dog Years. 
function dogYearsCalc(age) {
   let dogsAge = age * 7;
    console.log(`Your dog is ${dogsAge} in dog years.`);
}
dogYearsCalc(8);

// A Lifetime Supply...
function rightAmount(age, foodConsumption) {
    let result = "";
    let amountPerYear = foodConsumption * 365;
    let yearsToLive = 100 - age;
    result = amountPerYear * yearsToLive;
    console.log(`The snack company should provide you with ${result} units, until you are a ripe old age of 100. Happy snacking!"`);
}
rightAmount(40, 50);

//  Number to Month Name
let months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
function whichMonth(num) {
    if (num > 1 && num <= 12) {
        console.log(months[num-1]);
    }
    else {
        console.log("Please enter a number between 1 and 12")
    }
}
whichMonth(12);

//DRAWING
//First Shape
let firstShape = "T";
  for (let i = 1; i <= 4; i++) {
    console.log(firstShape.repeat(i));
  }
   
//Second Shape
  let secondShape = "*";
  for (let i = 4; i >= 1; i--) {
    console.log(secondShape.repeat(i));
  }

//Third Shape
let thirdShape = "";
for (let i = 1; i <= 5; i++) {
  thirdShape += i + "";
  console.log(thirdShape);
}

let fourthShape = "*";
function pac () {
  for (let i = 10; i >= 1; i--) {
    console.log(fourthShape.repeat(i));
}
for (let i = 1; i <= 10; i++) {
  console.log(fourthShape.repeat(i));
}
}
pac();

//COUNTER
const numbersCount = () => {
  let str = "";
  for (let i = 0; i <= 5; i++) {
    // something
    for (let j = 1; j <= i; j++) {
        // something
    }
      console.log(str);
  }
};
numbersCount();

//REVERSE COUNTER



/*Bonus: create another function by doing some changes to the previous function in order to have the following outputs :
  12345
  1234
  123
  12
  1
*/

let printer = "";
for (let i = 1; i <= 5; i++) {
  printer += i + "";
  console.log(printer);
}
//Inventory Check

function inventoryCheck (str) {
  let storeArr = ["milk", "eggs", "cheese", "butter"];
  let available = storeArr.includes(str);
  if (available) {
    return true;
  }
  else {
   return false;
  }
}

console.log(inventoryCheck("milk")); //or console.log(inventoryCheck("milk"))
console.log(inventoryCheck("coffee")); // console.log(inventoryCheck("coffee"))



//console.log("--------Exercise-------");
// Extra work :)
// create a repo for this app. we are coming later to it :)
// Create a program that generate a random password with the length of 30 character, every time you call the function should give you a different password

// Examples you will have other passwords for sure

// passwordGen()  ➞ Y3mI9x7bvPY86T?oM§hIbgh!MLwA77N
// passwordGen()  ➞ Oy$tkBGoo5fg§mO4AdV&Kh8XXZR4d7K
// passwordGen()  ➞ v0ZwDrn@hfI€kOKWH§k6kqub6zfpuyP
//console.log("--------Exercise-------");