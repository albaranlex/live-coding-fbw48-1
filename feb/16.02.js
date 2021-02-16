//##### 3. Word Converter
//- Given an array of words, create a function named "_wordConverter_" which uses an array method to add _"er"_ to the end of each string in the array. Look at the expected output below. **Important**: Do **not** use a loop to complete this task. Print your solution to the console.

const wordArr = ["smart", "kind", "sweet", "small", "clear"];

//Method One
const wordConverter1 = (arr) => arr.map((item) => item + "er");
console.log(wordConverter1(wordArr));

//Method 2
const wordConverter2 = (arr) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i] + "er");
  }
  return result;
};
console.log(wordConverter2(wordArr));

//Method 3
const wordConverter3 = (arr) => {
  let result = [];
  for (let word in arr) {
    result.push(arr[word] + "er");
  }
  return result;
};

console.log(wordConverter3(wordArr));
