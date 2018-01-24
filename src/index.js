import _ from "lodash";

import $ from "jquery";
import "bootstrap"; //js
// import printMe from "./print.js";
import getContrast from "./calculateContrast.js";

import colors from "./material-colors.json";
import "bootstrap/dist/css/bootstrap.min.css";
import "./sass/custom.scss";

if (process.env.NODE_ENV !== "production") {
  console.log("Looks like we are in development mode!");
  document.title = "Debug mode on";
}

// lodashExample();

$(document).on("click", ".box", function() {
  // _this = this;
  $(this).toggleClass("active");
});
function boxgenerator() {
  var arr = [];

  Math.random(colors.index);
  for (let index = 0; index < 12; index++) {
    var random = Math.floor(Math.random() * 11);
    var box = $("<div class='box'></div>");
    var rndColor = colorGenerator();

    var rgbColor = convertHex(rndColor, 100);
    var contrast = getContrast(rgbColor, [33, 37, 41]);
    if (contrast > 4.5) {
      random =
        "<div class='value'>" +
        random +
        "<small>" +
        "good" +
        "</small>" +
        "</div>";
    } else {
      random = "<div class='value'>" + random + "</div>";
    }
    box.css("background-color", rndColor);
    box.attr("data-color", rndColor);

    box = box.append(random);

    arr.push(box);
  }
  return arr;
}

function convertHex(hex) {
  hex = hex.replace("#", "");
  var r = parseInt(hex.substring(0, 2), 16);
  var g = parseInt(hex.substring(2, 4), 16);
  var b = parseInt(hex.substring(4, 6), 16);

  var result = [r, g, b];
  return result;
}

function colorGenerator() {
  var colorList = Object.keys(colors);
  var randomColor = _.sample(colorList);

  var palette = colors[randomColor];
  var randomSwatch = _.sample(palette);

  return randomSwatch;
}

$(".container").append(boxgenerator());
