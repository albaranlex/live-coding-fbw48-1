//Min and Max
console.log(Math.min(-1, 1, 2, 3, 4));
console.log(Math.max(-1, 1, 2, 3, 4));

//Rounding Up Solution 1
function roundUp (randomNum) {
    console.log(Math.ceil(randomNum));
}
roundUp(3321.32);
roundUp(326.76);
roundUp(76788.7);
roundUp(-9.78);
roundUp(43.342);

//Round Down
function roundDown (randomNum) {
    console.log(Math.floor(randomNum));
}
roundDown(3321.32321);
roundDown(326.76);
roundDown(76788.7);
roundDown(-9.78);
roundDown(28.329);

//Concatenation
let intro = "Hi, my name is Alex and I am ";
let age = 25;
console.log(intro + 25);

//What is the "+" operator doing? It's concatenating two variables. The output is always a string however and idk why.

//Converting
let str1 = "1005";
console.log(parseInt(str1, 10));

let num1 = "10.05";
console.log(parseFloat(num1));
