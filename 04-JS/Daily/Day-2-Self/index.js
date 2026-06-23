//! Topic 1 : Hoisting in JavaScript (Global Execution Context and Local Execution Context) -----------------------------------

/* 
  Hoisting is JavaScript's behavior of moving variable and function declarations into memory during the 
  Memory Creation Phase before code execution begins. Variables declared with var are initialized as undefined,
  function declarations are fully hoisted, while let and const remain inaccessible in the Temporal Dead Zone until initialized.
  1. var - global context or function context, initialized as undefined
  2. let and const - block context(TDZ - Temporal Dead Zone), not initialized until their definition is evaluated, resulting in a ReferenceError if accessed before initialization.
     Hoisting hoti h but TDZ concept ke wajah s e hum unhe access nahi kar sakte before initialization.
     TDZ is the upper area to the line of code where the variable is defined, and it is not accessible until the variable is declared and initialized.
  3. function declarations - hoisted in global context with their entire body, That is the reason why we can call a function before its declaration in the code.
*/


//! Example 1 : Output: undefined, 10 

console.log(a);
var a = 10;
console.log(a);

//! Example 2 : Output: ReferenceError: Cannot access 'b' before initialization

// let hoisting hoti h but TDZ concept ke wajah s e hum unhe access nahi kar sakte before initialization.
console.log(b); // TDZ me hai isliye error aayega
let b = 20;     // initialize krdi value
console.log(b); // Ab access kr sakte hai isliye 20 print hoga

//! Example 3 : 

console.log("Global Execution Context starts");

var globalVariable = "I am a global variable";

// Think Like : globalFunction is a variable that holds a value (function definition). 
function globalFunction() {
    var x = 10;
    console.log("Inside global function");
}

console.log(globalVariable);

// Now when we call the function , so now in code execution phase mm is function ka local execution context create hoga 
// which will have its own memory space and code space ,and then uske memory space me x variable create hoga and then code space me 
// function ka code execute hoga and then function ka local execution context destroy ho jayega and control wapas 
// global execution context me aa jayega

globalFunction();

console.log("Global Execution Context ends");

// OUTPUT : Global Execution Context starts - I am a global variable - Inside global function - "Global Execution Context ends"

//! Topic : Event Loop and Task Queue --------------------------------------------------------------------------

console.log("Start of script 2");

setTimeout(() => {
    console.log("This is from the Task Queue (setTimeout)");
}, 0);

console.log("End of script");


