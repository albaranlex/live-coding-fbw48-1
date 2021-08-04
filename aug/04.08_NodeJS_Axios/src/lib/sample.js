function capitalizeFirstLetter(text) {
  let upper = text.charAt(0).toUpperCase + text.slice(1);
  return upper;
}

console.log(capitalizeFirstLetter("Hello"));
