//3 Types of Errors:
//* Compilation aka compiler fails to complile
//* Runtime
//* Logic

//try and catch error
let userName = "";
try {
  let userAdd = "Berlin";
  //cool();
  if (userName == "") throw " Sorry, I need a userName"; // customized error msg
  if (userAge > 55) throw "Sorry, you are not a kid anymore";
  console.log("I am try");
} catch (err) {
  console.log("There was a error:" + err);
} finally {
  console.log("I will run anyway");
}

console.log("_________________");
