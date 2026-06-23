//! Topic : Decision Making ------------------------------------------------------------------------------------

// let x = 10;

// if (x > 5) {  
//   console.log("x is greater than 5");
// }  else if (x === 5) {
//   console.log("x is equal to 5");
// } else {
//   console.log("x is less than 5");
// }

//!Topic : Input from user (bydefault it is string)

// let userInput = prompt("Enter a number: ");
// let number = parseFloat(userInput);

// if (number > 5) {
//   console.log("The number is greater than 5");
// } else if (number === 5) {
//   console.log("The number is equal to 5");
// } else {
//   console.log("The number is less than 5");
// }

//! Topic : Switch case  ------------------------------------------------------------------------------------------

// Q1.

// let userInput = prompt("Enter a number:");
// let number = parseInt(userInput);

// switch(number) {
//   case 1:
//     console.log("Today is Monday");
//     break;
//   case 2:
//     console.log("Today is Tuesday");
//     break;
//   case 3:
//     console.log("Today is Wednesday");
//     break;
//   case 4:
//     console.log("Today is Thursday");
//     break;
//   case 5:
//     console.log("Today is Friday");
//     break;
//   case 6:
//     console.log("Today is Saturday");
//     break;
//   case 7:
//     console.log("Today is Sunday");
//     break;
//   default:
//     console.log("Invalid input. Please enter a number between 1 and 7.");
// }

// Q2. 

// let userInput = prompt("Enter a number:");
// let marks = parseInt(userInput);

// switch(true) {
//   case (marks >= 11 && marks <= 20):
//     console.log("You got grade D");
//     break;
//   case (marks >= 21 && marks <= 30):
//     console.log("You got grade C");
//     break;
//   case (marks >= 31 && marks <= 40):
//     console.log("You got grade B");
//     break;
//   case (marks >= 41 && marks <= 50):
//     console.log("You got grade A");
//     break;
//   default:
//     console.log("Invalid input. Please enter a number between 11 and 50.");
// }


//! Topic : Loops ----------------------------------------------------------------------------------------------------

// For loop : 

// let number = 10;
// for(let i = 1; i <= 10; i++) {
//   if(i < 6) {
//     console.log(i)
//   } else {
//     console.log(number);
//     number--;
//   }
// }

// For-in loop :

// let obj = {
//   "name": "John",
//   "age": 30,
//   "city": "New York"
// }

// for (let key in obj) {
//   console.log(key + ": " + obj[key]);
// }

// do-while loop :

// let i = 1;
// do {
//   console.log(i);
//   i++;
// } while (i <= 5);

//! Strings ---------------------------------------------------------------------------------------------------- 

let str = "Hello, World! This is World";

console.log("Indexing : ", str[0]);
console.log("Length of the string:", str.length);
console.log("Character at index 7:", str.charAt(7));

console.log("Index of : 'World':", str.indexOf("World"));      // returns the index of the first occurrence of 'World't
console.log("Data Not Present : ", str.indexOf("JavaScript")); // returns -1 if not found
console.log("Last Index of 'o':", str.indexOf("o", 12)); // returns the last occurrence of 'o' , checking from index 12 (12 ke bd)

console.log("Last Index of 'o':", str.lastIndexOf("o")); // returns the last occurrence of 'o'

console.log("Slice (0, 5):", str.slice(0, 5)); // 0 inclusive, 5 exclusive
console.log("Negative Slice (0, 5):", str.slice(-5, -1)); // negative indexing (start from the end), -5 inclusive, -1 exclusive

let str1 = "hello";
let str2 = "world";
console.log("Concatenation:", str1.concat(" ", str2)); // Concatenates str1 and str2 with a space in between.

var name = "John";
var newMessage = name.substr(0, 2); // Extracts a substring from index 0 to index 2 (exclusive)
console.log("Substring using substr:", newMessage); // Output: "Jo"

var string = " I am the awesome JavaScript developer";
var newString = string.replace(" ", "-"); // Replaces the first occurrence of " " with "-"
var newString2 = string.replaceAll(" ", "-"); // Replaces all occurrences of " " with "-"
console.log("String after replacement:", newString); // Output: "I-am the best JavaScript developer"
console.log("String after replacement:", newString2); // Output: "I-am the best JavaScript developer"
console.log("Uppercase:", str.toUpperCase()); // Converts the string to uppercase
console.log("Lowercase:", str.toLowerCase()); // Converts the string to lowercase

var trimmedString = string.trim(); // Removes whitespace from both ends of the string
console.log("Trimmed:", trimmedString); // Removes whitespace from both ends of the string

var splitString = str.split(","); // Splits the string into an array using "," as the separator
console.log("Split:", splitString); // Output: ["Hello", " World! This is World"]
