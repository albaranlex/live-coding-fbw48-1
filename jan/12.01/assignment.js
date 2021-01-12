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

//  Dog Years. Create a function which calculates how old a dog is in dog years. 
//The function should accept one argument that is the dog's age in human years. 
//PS:  calculate the dog's age in dog years based on the calculation of 1 human year = 7 dog years.
function dogYearsCalc(age) {
   let dogsAge = age * 7;
    console.log(`Your dog is ${dogsAge} in dog years.`);
}
dogYearsCalc(8);

//  A Lifetime Supply...
// You just won a lifetime supply of your favorite snack! 
// The snack company needs to calculate what that actually means and how much they need to give you over your "lifetime". 
//Create a function to help you calculate that amount for yourself to make sure you get the right amount. 
//The function should accept two arguments: person age and the amount he will eats per day. 
//The function should calculate the amount that will be consumed for the rest of your life given a constant maximum age of 100.

function rightAmount(age, foodConsumption) {
    let lifeTimeFood = age * foodConsumption;
    console.log(`The snack company should provide you with ${lifeTimeFood} units, until you are a ripe old age of 100. Happy snacking!"`);
}
rightAmount(40, 50);

//  Number to Month Name
// Create a function that takes a number (from 1 to 12) and returns its corresponding month name as a string.
// For example, if you're given 3 as input, your function should return "March", because March is the 3rd month.

let months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];

function whichMonth(num) {
    if (num > 1 && num <= 12) {
        console.log(months[num-1]);
    }
    else {
        console.log("Please enter a number between 1 and 12")
    }
}
whichMonth(13);


// Try to do it by yourself and don't look in yesterday solution. I trust you :)
// Count Occurrences.
// Create a function that accepts two arguments: a string and a letter. The function should count the number of occurrences of that letter in the string.

// Example:

// countOccurrences("this is a string", "i") ➞ 3

// draw this shapes in your console

//First shape
function art1 (baseShape) {
for (var i = 0; i <=4; i++) {
    console.log(baseShape);
    }
}
art1("T");


/*Second shape
****
***
**
*
Third shape
1
12
123
1234
12345
Bounce: Forth shape
Be creative and show us your Artistic side
*/

//console.log("--------Exercise-------");
/*  Finish the following function so it outputs looks like this:
1
12
123
1234
12345
 const numbersCount = () => {
  for (let i = 0; i <= 5; i++) {
    // something
    for (let j = 1; j <= i; j++) {
        // something
    }
      // something
  }
};
numbersCount();
Bonus: create another function by doing some changes to the previous function in order to have the following outputs :
  12345
  1234
  123
  12
  1
*/

//console.log("--------Exercise-------");
/* create a function should that checks if a store contains a specific product in it's inventory.
for example:
let storeArr= ["milk", "eggs", "cheese", "butter"];
// try includes might help :)
// Examples
inventoryCheck("cheese") returns true
inventoryCheck( "ham") returns false 
*/

//console.log("--------Exercise-------");
// Extra work :)
// create a repo for this app. we are coming later to it :)
// Create a program that generate a random password with the length of 30 character, every time you call the function should give you a different password

// Examples you will have other passwords for sure

// passwordGen()  ➞ Y3mI9x7bvPY86T?oM§hIbgh!MLwA77N
// passwordGen()  ➞ Oy$tkBGoo5fg§mO4AdV&Kh8XXZR4d7K
// passwordGen()  ➞ v0ZwDrn@hfI€kOKWH§k6kqub6zfpuyP
//console.log("--------Exercise-------");