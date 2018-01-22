import _ from "lodash";

import $ from "jquery";
import "bootstrap"; //js

require("./sass/custom.scss");
import "bootstrap/dist/css/bootstrap.min.css";

import printMe from "./print.js";
import "./style.css";

if (process.env.NODE_ENV !== "production") {
  console.log("Looks like we are in development mode!");
  document.title = "Debug mode on";
}

function component() {
  var element = document.createElement("div");
  element.innerHTML = _.join(["Hello", "webpack"], " ");
  element.classList.add("hello");
  console.log(element);
  $(".hello").addClass("header");

  return element;
}

function btn() {
  var btn = document.createElement("button");
  btn.classList.add("btn");
  btn.innerHTML = "click me";
  return btn;
}

function lodashExample() {
  var arr = [1, 2, 3, 4];
  var x = _.tail(arr);
  console.log("original arr: " + arr + " .tail of arr: " + x);
}

// lodashExample();
var body = document.body.appendChild(container());
body.appendChild(component()).appendChild(boxgenerator());
$(".btn").addClass("btn-primary large");

function container() {
  var container = document.createElement("div");
  container.classList.add("container");
  return container;
}

function boxgenerator() {
  var box = document.createElement("div");
  box.classList.add("box");
  return box;
}
