// While loop
var myArray = [];
var i = 0;

while (i < 5) {
    myArray.push(i);
    i++
}
console.log(myArray)

//for loop

var ourArray = [];

for (var i = 0; i < 5; i++) {
    ourArray.push(i);
}
console.log(ourArray);

//array iteration
var ourArr = [9, 10, 11, 12];
var ourTotal = 0;

for (var i = 0; i < ourArr.length; i++) {
    ourTotal += ourArr[i]
}
console.log(ourTotal);

// nesting for loops
function multiplyAll(arr) {
    var product = 1;
    for (var i=0; i < arr.lenght; i++) {
        for (var j=0; j < arr[i].lenght; j++) {
            product *= arr[i][j];
        }
    }
    return product;
}

var product = multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);
console.log(product);

//do...while    It runs at least 1 time and then checks the proposition
var anArray = [];
var i = 10;

do {
    myArray.push(i);
    i++;
} while (i < 5)
console.log(i, myArray);


////Example
/*
 * Modify and return the array so that all even elements are doubled and all odd elements are tripled.
 * 
 * Parameter(s):
 * nums: An array of numbers.
 */
function modifyArray(nums) {
    for (var i = 0; i < nums.length; i++) {
        if(nums[i] % 2 == 0) {
            nums[i] = nums[i] * 2;
        } else {
            nums[i] = nums[i] * 3;
        }
        
    }
        return nums
}


function main() {
    const n = +(readLine());
    const a = readLine().split(' ').map(Number);
    
    console.log(modifyArray(a).toString().split(',').join(' '));
}