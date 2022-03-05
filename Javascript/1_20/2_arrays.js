var ourArray = ["John", 23];

var myArray = [["the universe", 42], ["everything", 101010]];

var exArray = [5, 6, 7];

var myData = exArray[0];

exArray[1] = 9;

console.log(exArray);

console.log(myArray[0][0]);

var thisArray = ["Stinson", "J", "Cat"];
thisArray.push("happy", "joy");
console.log(thisArray);

var removedFromThisArray = thisArray.pop() // pop´s the last element
console.log(removedFromThisArray)

var removeFirstElement = thisArray.shift() // removes the first element
var addFirstElement = thisArray.unshift("Barney") // add element to the first position