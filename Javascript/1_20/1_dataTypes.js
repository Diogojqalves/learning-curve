/*
Data Types
*/
var myName = "Beau"; //global scope variable
let ourName = "freeCodeCamp"; // scoped variable, only used in the instance
const pi = 3.14; //can´t be changed

var a;
a = 5;
console.log(a);

var b = 2 * 10;
b = a + 2;
console.log(b);

const frase = "Uma string";
console.log(frase);

let properCamelCase = "outra string";

const estado = true;

let divisao = 10 / 2;
divisao++;
console.log(divisao);

var resto;
resto = 11 % 3;

a += 12; // *= /= -=
console.log(a);

var myStr = 'I am a "double quoted string"';
console.log(myStr);

var ourStr = "I come first. " + "I come second.";
ourStr += " I come third.";
console.log(ourStr);

var othStr = ourStr + " End of string";
console.log(othStr);

const firstName = "Diogo";
let firstNameLength = firstName.length;
console.log(firstNameLength + " Length");

const lastName = "Alves";
const firstLetter = lastName[0];
console.log(firstLetter);
