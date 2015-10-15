// Things to do:
// 1. Flow text to fit browser screen
// 2. Fix line breaking at hyphens and em dashes
// 3. Get classes to ignore punctuation
// 4. Add interactive aspect - hover over a coloured word to see it's frequency 

var address = [];
var paragraph = [];
var wordsRough;
var wordsClean = [];
var all;
var div;

function preload() {
  address = loadStrings("stateOfTheUnionAddress.txt");
}

function setup() {
  noCanvas();

  for (var i in address) {
    wordsRough = address[i].split(' ');
    for (var j in wordsRough) {
      wordsClean.push(wordsRough[j].replace(/[,\/#!|!@#$%^&\*():{}]/g, ""));
      // console.log(wordsClean);
    }
  }

  div = createElement("div");
  div.style("padding-left", "7%");
  div.style("padding-top", "4%");
  div.style("padding-bottom", "5%");

  for (i = 0; i < wordsClean.length; i++) {
    var element = createElement("span", wordsClean[i]);
    element.class(wordsClean[i]); 
    element.parent(div); 
  }
  
  var credit = createElement("div", "Thematic analysis adapted from http://tech.co/state-of-the-union-quotes-2015-01");
  credit.style("padding-left", "35px");
  credit.style("padding-bottom", "35px");
  credit.style("padding-top", "10px");
  credit.style("color", "#242323");
  credit.style("font-size", "9pt");
  credit.style("font-family", "Helvetica");
  credit.style("background-color", "#F2F2F2");
}