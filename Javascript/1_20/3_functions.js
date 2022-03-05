function wordBlanks(myNoun, MyAdjective, myVerb, myAdverb) {
  let result = "";
  result += "The " + MyAdjective + " " + myNoun + " " + myVerb + " to the store " +  myAdverb;
  return result;
}
console.log(wordBlanks("dog", "big", "ran", "quickly"));

function ourReusableFunction() {
  console.log("Hey, world");
}
ourReusableFunction();

function reusableFunction () {
  return "Hello";
}
console.log(reusableFunction());

function ourFunctionWithArgs (a, b) {
  return a - b;
}
console.log(ourFunctionWithArgs(10, 5));

// Global Scope
var myGlobal = 10;

function funs(){
  oopsGlobal = 5; // without var keyword, becames global var - check browser to work
}

function fun () {
    var output = ""; // local scope
    if (typeof myGlobal != "undefined") {
      output += "myGlobal: " + myGlobal
    };
    if (typeof oopsGlobal != "undefined") {
      output += "oopsGlobal: " + moopsGlobal;
    };
    return output;
}

console.log(fun());


function nextInLine(arr, item) {
  arr.push(item);
  return arr.shift();
}

var testArr = [1, 2, 3, 4, 5]

console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));






