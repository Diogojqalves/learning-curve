// let variable can´t be declared 2 times
let catName = "Quincy";
catName = "Beau"

//let is a block scope variable
function checkScope() {
    let i = "function scope";
    if (true) {
        let i = "block scope";
        console.log("Block Scope i is: ", i);
    }
    console.log("Function Scope i is: ", i);
    return i;
}
checkScope();

// const = let but its read only, can´t be reasigned

//Prevent Object Mutation

function freezeObj() {
    "use strict";
    const MATH_CONSTANTS = {
        PI: 3.14
    };
    Object.freeze(MATH_CONSTANTS); // keep value from changing
    try {
        MATH_CONSTANTS.PI = 99;
    } catch (ex) {
        console.log(ex); //catches 99 as ab error;
    }
    return MATH_CONSTANTS.PI;
}

const PI = freezeObj();
console.log(PI);