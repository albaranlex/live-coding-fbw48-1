module.exports = "1084cef01e4d2764bc434144e4a4d241d";

// module.exports = {
//   apiID: "1234567",
//   apiKey: "123KEY",
// };

function capitalizeFirstLetter(string) {
  return `${string.charAt(0).toUpperCase}${string.slice(1)}`;
}

console.log(capitalizeFirstLetter("hello"));
