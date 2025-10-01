// Creating a Utility Module
export const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);
export const reverseString = str => str.split('').reverse().join('');
export const isEven = num => num % 2 === 0;
export const isOdd = num => num % 2 !== 0;