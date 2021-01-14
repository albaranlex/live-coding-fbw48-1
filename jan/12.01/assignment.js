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
console.log("-----------------");

// Dog Years. 
function dogYearsCalc(age) {
   let dogsAge = age * 7;
    console.log(`Your dog is ${dogsAge} in dog years.`);
}
dogYearsCalc(8);
console.log("-----------------");

// A Lifetime Supply...
function rightAmount(age, foodConsumption) {
    let result = "";
    let amountPerYear = foodConsumption * 365;
    let yearsToLive = 100 - age;
    result = amountPerYear * yearsToLive;
    console.log(`The snack company should provide you with ${result} units, until you are a ripe old age of 100. Happy snacking!"`);
}
rightAmount(40, 50);
console.log("-----------------");

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
console.log("-----------------");

//DRAWING
//First Shape
let firstShape = "T";
  for (let i = 1; i <= 4; i++) {
    console.log(firstShape.repeat(i));
  }

  console.log("-----------------");
   
//Second Shape
  let secondShape = "*";
  for (let i = 4; i >= 1; i--) {
    console.log(secondShape.repeat(i));
  }
  console.log("-----------------");

//Third Shape
let thirdShape = "";
for (let i = 1; i <= 5; i++) {
  thirdShape += i + "";
  console.log(thirdShape);
}
console.log("-----------------");

//Fourth Shape
let fourthShape = "*";
function pac () {
  for (let i = 6; i >= 1; i--) {
    console.log(fourthShape.repeat(i));
}
}
pac();
console.log("-----------------");

//COUNTER (NEED TO)
const numCount = () => {
  let text = "";
  for (let i = 0; i <= 5; i++) {
    for (let j = 1; j <= i; j++) {
      text += j + " ";  // something
    }
      console.log(text);
  }
};
numCount();
console.log("-------------");


/*Count Occurences (NEED TO DO)
function countOccurences (str, letter) {
  let result = "";
  let count = check.length;

  if str = str.contains(letter) 
  return count;
  }
  else {

  }

}

countOccurences("This is a string", "i"); */

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

console.log(inventoryCheck("milk")); 
console.log(inventoryCheck("coffee"));

//REVERSE COUNTER
// 1 2 3 4 5
// 1 2 3 4
// 1 2 3
// 1 2
// 1 

let text ="";
for (i = 5; i >= 1; i--) {
  text = "";
  for (let j = 1; j <= 5; j++) {
    text += j;
  }
}

/*const revNumCount = () => {
  let text
  for (let i = 5; i >= 1; i--) {
    text = "";
    for (let j = 1; j <= i; j++) {
      text += j;
    }
      console.log(text);
  }
}

/* 
Round 1:
-  i = 5;
- j = 1;
- grab my text + J (1)
- Text = 1

Round 2

revNumCount();
console.log("-----------------"); */