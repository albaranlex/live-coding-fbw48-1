const express = require("express");
const app = express();

// app.use((req, res) => {
//   console.log("we got a request! ");
//   res.send("This is Jarvis responding to your request");
// });
app.get("/", (req, res) => {
  res.send("This is the homepage without a pathname. Basically your homepage!");
});

app.get("/cats", (req, res) => {
  res.send("MEOW!");
});

app.get("/dogs", (req, res) => {
  res.send("WOOF!");
});

app.listen(3000, () => {
  console.log("Listening to port 3000");
});
