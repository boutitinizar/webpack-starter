import _ from "lodash";

import $ from "jquery";

import "bootstrap/dist/css/bootstrap.min.css";

import printMe from "./print.js";
import "./style.css";

if (process.env.NODE_ENV !== "production") {
  console.log("Looks like we are in development mode!");
}

function component() {
  var element = document.createElement("div");
  var btn = document.createElement("button");
  btn.classList.add("btn");
  element.innerHTML = _.join(["Hello", "webpack"], " ");
  element.classList.add("hello");
  console.log(element);
  $(".hello").addClass("header");

  btn.innerHTML = "click me";
  // btn.onclick = printMe;

  element.appendChild(btn);

  return element;
}
function lodashExample() {
  var arr = [1, 2, 3, 4];
  var x = _.tail(arr);
  console.log("original arr: " + arr + " .tail of arr: " + x);
}

document.body.appendChild(component());
$(".btn").addClass("btn-primary large");
$(".btn").on("click", printMe);
lodashExample();
