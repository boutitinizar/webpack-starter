import _ from "lodash";

import $ from "jquery";
import "bootstrap"; //js

import "bootstrap/dist/css/bootstrap.min.css";
import "./sass/custom.scss";

import printMe from "./print.js";

if (process.env.NODE_ENV !== "production") {
  console.log("Looks like we are in development mode!");
  document.title = "Debug mode on";
}

// lodashExample();

$(".container").append(boxgenerator());

function boxgenerator() {
  var arr = [];
  // var row = "<div class='row'>";
  for (let index = 0; index < 12; index++) {
    var random = Math.floor(Math.random() * 11);
    var column = $("<div class='box'></div>");
    random = "<div class='value'>" + random + "</div>";
    column = column.append(random);

    arr.push(column);
  }

  console.table(arr);
  return arr;
}
