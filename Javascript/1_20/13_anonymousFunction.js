// anonymous function can be turned into arrow function~

var magic = function() {
    return new Date();
};

const magic2 = () => new Date();

// Example 2
var myConcat = function(arr1, arr2) {
    return arr1.concat(arr2);
};
console.log(myConcat([1, 2], [3, 4, 5]));


var myConcat2 = (arr1, arr2) =>  arr1.concat(arr2) ;
console.log(myConcat2([1, 2], [3, 4, 5]));


// Example 3
const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];
const squareList = (arr) => {
    const squareIntegers = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x); //filter gets 4, 42 and 6; map calcultes n^2
    return squareIntegers
}

const squareIntegers = squareList(realNumberArray);
console.log(squareIntegers);

// Example 4
// * even numbers by 2
// * odd numbers by 3
function modifyArray(nums) {
    return (nums || []).map(num => num * (num % 2 === 0 ? 2 : 3));
}