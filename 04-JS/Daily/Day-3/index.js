//! Topic : Arrays ------------------------------------------------------------------------------------------------

//! Ways to create an array : 

//1. Using new keyword : 

// let arr1 = new Array();
// console.log(arr1); // []

//2. Using Square brackets : 

// let arr2 = [];
// console.log(arr2); // []

//3. Using Array : pass elements as arguments in Array() constructor without new keyword: 

// let arr3 = Array(5); // Creates an array with 5 empty slots
// console.log(arr3); // [empty × 5]

// let arr4 = Array(1, 2, 3, 4, 5); // Creates an array with the specified elements
// console.log(arr4); // [1, 2, 3, 4, 5]


//! Array Methods : 

//1. push() : Adds one or more elements to the end of an array and returns the new length of the array.

// let arr5 = [1, 2, 3];
// arr5.push(4);
// console.log(arr5); 

///2. pop() : Removes the last element from an array and returns that element.

// let arr6 = [1, 2, 3, 4];
// let poppedElement = arr6.pop();
// console.log("Last Element:", poppedElement); 
// console.log("Remaining Array:", arr6);

//3. slice() : Returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included). The original array will not be modified.

// let arr7 = [1, 2, 3, 4, 5];
// let slicedArray = arr7.slice(1, 4);
// console.log("Sliced Array:", slicedArray);

//4. toString() : Converts an array to a string and returns the result. The elements are separated by commas.

// let arr8 = [1, 2, 3, 4, 5];
// let stringRepresentation = arr8.toString();
// console.log("String Representation:", stringRepresentation);

//5. shift() : Removes the first element from an array and returns that removed element. This method changes the length of the array.

// let arr9 = [1, 2, 3, 4, 5];
// let shiftedElement = arr9.shift();
// console.log("Removed Element:", shiftedElement);
// console.log("Remaining Array:", arr9);

//6. map() : Creates a new array populated with the results of calling a provided function on every element in the calling array.

let arr10 = [1, 2, 3, 4, 5];
let mappedArray = arr10.map((element) => element * 2);
console.log("Mapped Array:", mappedArray);

//7. filter() : Creates a new array with all elements that pass the test implemented by the provided function.

let arr11 = [1, 2, 3, 4, 5];
let filteredArray = arr11.filter((element) => element > 2);
console.log("Filtered Array:", filteredArray);

//8. length : Returns the number of elements in an array.

let arr12 = [1, 2, 3, 4, 5];
console.log("Length of Array:", arr12.length);

//9. find() : Returns the value of the first element in the array that satisfies the provided testing function. Otherwise, undefined is returned.

let arr13 = [1, 2, 3, 4, 5];
let foundElement = arr13.find((element) => element > 3);
console.log("Found Element:", foundElement);

//10. findIndex() : Returns the index of the first element in the array that satisfies the provided testing function. Otherwise, -1 is returned.

let arr14 = [1, 2, 3, 4, 5];
let foundIndex = arr14.findIndex((element) => element > 3);
console.log("Found Index:", foundIndex);

//11. forEach() : Executes a provided function once for each array element.(does not return a new array)

let arr15 = [1, 2, 3, 4, 5];
arr15.forEach((element) => {
  console.log("Element:", element);
});

//12. includes() : Determines whether an array includes a certain value among its entries, returning true or false as appropriate.

let arr16 = [1, 2, 3, 4, 5];
let includesValue = arr16.includes(3);
console.log("Includes Value 3:", includesValue);

//13. reverse() : Reverses an array in place. The first array element becomes the last, and the last array element becomes the first.

let arr17 = [1, 2, 3, 4, 5];
arr17.reverse();
console.log("Reversed Array:", arr17);

//14. unshift() : Adds one or more elements to the beginning of an array and returns the new length of the array.

let arr18 = [1, 2, 3, 4, 5];
arr18.unshift(0);
console.log("Array after unshift:", arr18);

//15. splice() with 3 parameters : Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

let arr19 = [1,2,3,4,5];
arr19.splice(0,1,10);
console.log("Spliced Array with 3 parameters: ",arr19)

//16. concat() : Used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.

let arr20 = [1, 2, 3];
let arr21 = [4, 5, 6];
let concatenatedArray = arr20.concat(arr21);
console.log("Concatenated Array:", concatenatedArray);

//17. join() : Joins all elements of an array into a string and returns this string. You can specify a separator; if none is provided, a comma is used by default.

let arr22 = [1, 2, 3, 4, 5];
let joinedString = arr22.join("-");
console.log("Joined String:", joinedString);

//18. split() : Splits a string into an array of substrings based on a specified separator.

let str = "Hello,World,JavaScript";
let splitArray = str.split(",");
console.log("Split Array:", splitArray);

//19. sort() : Sorts the elements of an array in place and returns the sorted array. The default sort order is ascending,
//             built upon converting the elements into strings.
//            Phla element kk basis pp krta h . means agr 44 hh so 4 kk basis pp sort krega. 

let arr23 = [3, 1, 4, 2, 5];
arr23.sort();
console.log("Sorted Array:", arr23);

// 20. indexOf() : Returns the first index at which a given element can be found in the array, or -1 if it is not present.

let arr24 = [1, 2, 3, 4, 5];
let index = arr24.indexOf(3);
console.log("Index of 3:", index);

// 21. lastIndexOf() : Returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex.

let arr25 = [1, 2, 3, 4, 5, 3];
let lastIndex = arr25.lastIndexOf(3);
console.log("Last Index of 3:", lastIndex);


//! Topic 2 : Functions -----------------------------------------------------------------------------------------------------

//! Ways to create a function :

//1. Regular Function Declaration :

function add(a, b) {
  return a + b;
}

//2. Arrow Function Expression :

const multiply = (a, b) => {
  return a * b;
};

//3. Function Expression :

const subtract = function (a, b) {
  return a - b;
};

//! 2. Parameters and Arguments :

// Parameters are the names listed in the function definition, while arguments are the real values passed to the function.

// Function Definition
function greet(name) { // 'name' is a parameter
  console.log("Hello, " + name + "!");
}

// Function Call
greet("Alice"); // 'Alice' is an argument

// Q1. 
function myFun() {
  return console.log("Hello Jii")
}


//Q2. 
const arrFun = () => {
  console.log("Hello Jii")
} 

//Q3. 
function intro(fname,lname,age) {
  return console.log(fname+lname + "Is" + age + "years old")
}

//! Topic 3 : Objects -----------------------------------------------------------------------------------------------------

//! Ways to create an object :

//1. Using Object Literal :

let obj1 = {
  name: "Alice",
  age: 30,
  city: "New York"
};


