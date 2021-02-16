//SOLUTIONS

//emptySpaces using filter
const emptySpaces = (str) => {
  let counter = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] == " ") {
      counter++;
    }
  }
  return str.length - counter;
};
console.log(emptySpaces("Hi i"));
console.log(emptySpaces("i    Hi i"));
const emptySpacesAdvancedVersion = (str) => {
  return str.split("").filter((chr) => chr != " ").length;
};
console.log(emptySpacesAdvancedVersion("Hi  "));
console.log("____________________");

//salaryCalculator
const salaryCalculator = (userName, salary, ...kids) => {
  let netto, percentValue;
  switch (kids.length) {
    case 0:
      percentValue = 0.55;
      break;
    case 1:
      percentValue = 0.3;
      break;
    case 2:
      percentValue = 0.25;
      break;
    default:
      percentValue = 0.2;
  }
  netto = salary - salary * percentValue;
  return `${userName} has ${kids.length} kids, so his/her salary after taxes ${netto}`;
};
console.log(salaryCalculator("Fabi", 5000, "Zain", "Uschi"));
console.log(salaryCalculator("Olga", 7000, "Zain"));
console.log(salaryCalculator("Jack", 200));
console.log("____________________");

//Number Checker using find
const phone = (str) => {
  let numberToCheck = str
    .split(" ")
    .find(
      (number) => number.slice(0, 3) == "030" || number.slice(0, 3) == "017"
    );
  if (numberToCheck == undefined) {
    return `Sorry, please enter your phone number.`;
  }
  if (numberToCheck.length == 10 && numberToCheck == parseInt(numberToCheck)) {
    //                                    "030" == 30 -> true
    return `Your phone number is ${numberToCheck}`;
  } else {
    return `This is not valid phone number ${numberToCheck}`;
  }
};
console.log(phone("hi 0302220000"));
console.log(phone("hi 030222Q000"));
console.log(phone("hi "));
