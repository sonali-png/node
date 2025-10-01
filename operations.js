import {subtract, multiply, division} from './math.js';
import {capitalize, reverseString} from './utility.js';
let a = 24;
let b = 6;
console.log(`Subtraction of ${a} and ${b} is : ${subtract(a, b)}`);
console.log(`Multiplication of ${a} and ${b} is : ${multiply(a, b)}`);
console.log(`Division of ${a} and ${b} is : ${division(a, b)}`);

console.log(`Capitalized string of "hello, node js" is : ${capitalize(`hello, node js`)}`);
console.log(`Reverse of string "programming language" is : ${reverseString(`programming language`)}`);