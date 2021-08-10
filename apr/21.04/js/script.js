// Any code you will write for your website (in the future!) should go here
//   Javascript in the browser
//  XMl, JSON, jQuery, Ajax, API

//  JS Engines:
//   V8 (Chrome, Node, Edge)
//    SpiderMonkey (Firefox)
//    Chakra (Internet Explorer)

//   DOM aka Document Object Module
//   DOM tree.

// Adding javascript to HTML:
// - The `<script>` tag
// - External JS with `<script src="...">`

// The Window object
// (objects functions and variables) are member of window object.
// document object is also member of the window object
// the window object contain many Properties and methods

// -Host object-
// are objects supplied by a certain environment.
// Like in browser environment you will find window
// Or in node.js environment you will find Process

// -Native object-
// are standard built-in objects provided by Javascript.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects

// window.alert("Hi");
// let username = window.prompt("Please enter your name");
// console.log(username);

  function multiply() {
    let userNum1 = document.querySelector("#num1").value;
    let userNum2 = document.querySelector("#num2").value;
    document.querySelector(".result").innerHTML = `${userNum1 * userNum2}`;
  };