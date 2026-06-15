// console.log(x);
// console.log(getName); // Logs undefined as in memory it is stored as undefined, during the memory creation phase in the EC

// var x = 7;
// var getName = () => {
//     console.log("Hello, World!");
// }

// Function in JS

// 1

// va r x = 1;
// a(); b();
// console.log(x);

// function a() {
//     var x = 10;
//     console.log(x);
// }

// function b() {
//     var x = 100;
//     console.log(x);
// }

// window and this

// var a = 10;
// var x;

// function b() {
//     var a = 5;
//     console.log(this);
// }

// b();
// console.log(this);

// Undefined in JS

// It's a special keyword in JavaScript

// console.log(a); // Logs - undefined as in memory it is stored as undefined, during the memory creation phase in the EC
// var a;
// console.log(a); // Logs - 7 as after the code is executed, the value of a is updated to 7 in memory.

// if(a === undefined) {
//     console.log("a is undefined");
// } else {
//     console.log("a is not undefined");
// }

// Scope, Scope Chain and Lexical Environment

// function a() {
//     b = 5;
//     c();
//     function c() {
//         console.log(b); // Logs - 10
//     }
// }

// var b = 10;
// a();

/*
First, the EC of c is checked, where in the mem, it doesnt found b, then it checks the EC of it's lexical parent,
which is a. Again, it doesnt find b in the mem of a, so it then checks the EC of it's lexical parent, which is the
global EC, where it finds b and logs 10.

If, it hasn't find b, then b is not defined error would have been thrown, or if just b is created, but not assigned, then
undefined would have been logged.
 */

// function x() {
//     var num = 7;
//     y();
//     function y() {}
// }

// x();
// console.log(num); // Logs - num is not defined

// let, const and temporal dead zone

// console.log(b);
// // Logs - undefined as var is hoisted and hence stores as undefined in memory during the memory creation phase in the EC

// // console.log(a);
// // Logs - ReferenceError: As let is hoisted but not initialized, it is in the TDZ until the line where it is declared and
// // initialized is executed.

// let a = 10; // Window can't access this, as it isnt attached to the glabal scope / memory
// console.log(a); // Logs - 10 as after the code is executed, the value of a is updated to 10 in memory.

// var b = 100;

// ---------------------------

// console.log("Hello");
// let x = 10;
// var x = 100;

// The console will also not log anything, as seeing this, JS directly throws an error, SyntaxError.

// ----------------------------

// let x;
// x = 10;
// console.log(x);

// Logs - 10 as x is declared and initialized in the memory, and then its value is updated to 10, and hence 10 is logged.

// const b;
// b = 100;

// Logs - SyntaxError: Missing initializer in const declaration, as const variables must be initialized at the time of declaration.

// const b = 100;
// b = 1000;

// Logs - TypeError: Assignment to constant variable, as const variables cannot be reassigned after initialization.

// -----------------------------

// Block in JS

// Block is also known as a compound statement.
// It combines multiple JS statement into one group.

// {} // This defined a block and is a valid JS code

// {
//     var a = 10;
//     console.log(a);
// }

// Block Scope is the all the variables and functions we can access inside a block.

// var a = 10;
// let b = 20;
// const c = 30;

// Here, b and c are allocated separate memory in something called Script.

// {
//     var a = 10;
//     let b = 20;
//     const c = 30;
// }

// console.log(a); // Logs - 10 as a is stored in the global memory

// console.log(b);
// console.log(c);

// This both will show b is not defined and c is not defined, respectively, as b and c are block scoped,
// stored in a separate memory reserved for the block.

// Here, b and c are not allocated separate memory in something called Script, as they are block scoped.

// ------------------------------

// Shadowing in JS

// var a = 100;
// let b = 30;
// const c = 40;

// This doesnt throw an error, as you can see in the browser, this b and c are allocated separate memory in the Script,
// while the b and c inside the block below, are allocated separate memory in the block, and hence they are
// different and don't throw an error.

// {
//     var a = 10;
//     let b = 20;
//     const c = 30;

//     console.log(a); // Logs - 10, and this is called Shadowing, as this value of a shadows the previous one
//     console.log(b);
//     console.log(c);
// }

// console.log(a);
// console.log(b);
// console.log(c);

// If, we remove b from the scope, then what happens, the console.log(b) inside the block will check for b in
// it's own block scope, and if it doesn't find it (in our case, as we removed it), then it will check for b in
// the global scope, which is case of let and const is the Script, and if it finds it there, then it will log that
// value (which is 30 in our case), and if it doesn't find it there, then it will throw an error, b is not defined.

// ------------------------------

// Illegal Shadowing in JS

// let x = 20;
// {
//     var x = 20;
// }

// Throws error, Identifier 'x' has already been declared, as var is stored in the global mem, and let is also stored in the 
// gloabl mem (although in a different memory space called Script), and hence they are in the same scope,
// and var cannot shadow let, as it is function scoped, and let is block scoped.

// var y = 20;
// {
//     let y = 20;
// }

// This is allowed, as same reason as above, and let can shadow var, as let is block scoped, and var is function scoped,
// and hence they are in different scopes.

// let z = 20;
// function fn() {
//     var z = 20;
// }

// Now, this is also valid, as you know, when a function is invoked, a new EC is created, and z is stored in that EC,
// and not in the global EC, and hence they are in different scopes, and var can shadow let, as var is function scoped,
// and let is block scoped.

// ------------------------------

// Closure in JS

// function x() {
//     var a = 20;
//     function y() {
//         console.log(a);
//     }
//     // a = 100; // If we uncomment this, then it will log 100, as before the func is returned, the value of a is updated
//     return y;
// }
// var z = x();
// z();

// So, this is a closure. Closure means a function bundled together with its lexical environment.
// This is closure, as in function y, we need to access a, which is in the le of x, and hence y is bundled together with its le
// and returned and is called closure. If, it wouldnt require, to access a, then it wouldnt be closure.

// function x() {
//     var a = 20;
//     function y() {
//         var z = 100;
//         // console.log(a);
//     }
//     // a = 100; // If we uncomment this, then it will log 100, as before the func is returned, the value of a is updated
//     return y;
// }
// var z = x();
// z();

// Now this is not a closure, as in function y, we dont need to access a, which is in the le of x, and hence
// y is not bundled together with its le

// function z() {
//     var a = 30;
//     function x() {
//         var v = 20;
//         function y() {
//             console.log(a,v);
//         }
//         return y;
//     }
//     return x;
// }

// var f = z();
// var f1 = f();
// console.log(f);
// console.log(f1);
// f1();

// Multiple closures will be created

// -------------------------------

// setTimeout + Closures

// function x() {
//     var i = 1;
//     setTimeout(function() {
//         console.log(i);
//     }, 1000);
//     console.log("Hello");
// }
// x();

// Hello is printed first and then after 1 second, 1 is printed. So, setTimeout, takes the callback function and stores it
// somewhere and attached a timer to it. And JS continues executing. Now the callback function, forms a closure, and takes
// the variable i with it, where ever it goes.

// Print x after every x seconds, so like 1 after 1 second, 2 after 2 second, etc.

// function x(y) {
//     setTimeout(function() {
//         console.log(y);
//     }, y * 1000);
// }

// for(var j = 1; j <= 5; j++) {
//     x(j);
// }

// Why this works is because, every function call creates a new EC, and hence, each callback function, forms a closure with
// its own EC, and hence references to respective y in the memory.

// function x() {
//     for(var i = 1; i <= 5; i++) {
//         setTimeout(function() {
//             console.log(i);
//         }, i * 1000);
//     }
// }

// x();

// This will log 6, 5 times as var has a function scope and hence, the closure formed by the every callback function, shares
// the common reference of i in the memory, and when the loop end, at last, i = 6, and hence everyone prints 6, 5 times.

// How to correct this ?

// 1) Use a block scope variable - let

// function x() {
//     for(var i = 1; i <= 5; i++) {
//         setTimeout(function() {
//             console.log(i);
//         }, i * 1000);
//     }
// }

// x();

// This prints perfectly, and the reason is, let has a block scope, and hence, every iteration of the loop, creates a new block scope,
// and hence, every callback function forms a closure with its own block scope, and hence references to respective i in the memory.

// What if we have been told to use var only

// 2) By creating a closure / IIFE

// function x() {
//     for(var i = 1; i <= 5; i++) {
//         function close(i) {
//             setTimeout(function() {
//                 console.log(i);
//             }, i * 1000);
//         }
//         close(i);
//     }
// }

// x();

// This can also be written using IIFE as below

// function x() {
//     for(var i = 1; i <= 5; i++) {
//         (function close(i) {
//             setTimeout(function() {
//                 console.log(i);
//             }, i * 1000);
//         })(i);
//     }
// }

// x();

// --------------------------------

// More on closures

// function outer(b) {
//     // let a = 20;
//     function inner() {
//         console.log(a,b);
//     }
//     return inner;
// }

// let a = 30;
// var close = outer(10);
// close();

// console.log(a);

// Still works the same, as the inner function forms a closure with its lexical environment,
// which also includes the parameter b of the outer function

// Now, inner find a in its le, and if it doesnt find it, it goes one level deeper in the
// hierchy and finds a in the global scope and hence prints 30

// Data Encapsulation using closures

// var counter = 0;

// function increment() {
//     counter++;
// }

// Now anyone in the code, can access it and modify it

// function counter() {
//     var count = 0;
//     return function increment() {
//         count++;
//         console.log(count);
//     }
// }

// var counter1 = counter();
// counter1();

// Now, no one from outside can access or modify the count

// But this code, isnt scalable, like what if we also want a decrement counter,
// so we use a constructor function

// function Counter() {
//     var count = 0;
//     this.increment = function () {
//         count++;
//         console.log(count);
//     }
//     this.decrement = function () {
//         count--;
//         console.log(count);
//     }
// }

// var counter1 = new Counter();
// counter1.increment();
// counter1.increment();
// counter1.decrement();

// --------------------------------

// Anonymous Function
// Function without a name are called anonymous functions.

// Now, what are First Class Functions in JS ?
// Difference between Function Statement, Expression and Declaration ?

// a();
// b();

// Function Statement or Function Declaration - The Normal Way
// function a() {
//     console.log("a");
// }

// Function Expression - Assigning a function to a variable
// var b = function () {
//     console.log("b");
// }

// What's the difference between them ?

// The major difference is hoisting. As, you see during the memory creation phase, the function a is stored in the memory as it is,
// while the function b is assigned to a variable, and hence stored as undefined in the memory. And, so we can't
// call Function Expression / Arrow Function before its declaration, while we can call Function Statement before its declaration.

// Anonymous Functions

// function () {

// }

// But, this will throw an error, as function without a name cannot be a statement, and it cannot be stored in the memory, as it is
// not assigned to any variable, and hence it is not stored in the memory, and hence it throws an error.

// Named Function Expression

// Nothing but a function expression, with a function name.

// var c = function d() {
//     console.log("c");
// }

// d(); // Throws error, as d is not defined, cause, function is not declares in the global scope, and hence it is not stored in the global memory, and hence it is not accessible outside of the function expression.

// But, we can do this

// var c = function d() {
//     console.log(d);
// }

// c();

// Parameters and Arguments in JS

// Here, a and b are parameters - placeholders for the values, that the function will receive when it is called
// And they are local, can't be accessed outside

// function x(a, b) {
//     console.log(a,b);
// }

// x(1,2); // This are the arguments - values passed to the function

// First Class Functions in JS

// We can also pass functions as arguments to other functions

// var z = function (param) {
//     console.log(param);
// }

// function xyz() {};
// z(xyz);

// Functions can also return functions

// var z = function () {
//     return function () {

//     }
// }

// console.log(z());

// The ability of functions to be used as values and assign it to other variables, and to passed as arguments to other functions
// is called First Class Functions in JS. And this is what makes functions beautiful in JS.

// First Class Citizens - Means the same as First Class Functions

// Arrow Functions

// -------------------------------

// Callback Functions in JS

// A function passed as an argument to another function is called a callback function. But, it has some very powerful features.

// function x(y) {
//     console.log(y);
// }

// x(function y() {});

// Advantages - Used in setTimeout, event listeners, etc. and helps us to write asynchronous code.

// Main thread and Thread Blocking

// setTimeout(function () {
//     console.log("timer");
// }, 3000);

// function x(y) {
//     console.log("x");
//     y();
// }

// x(function y() {
//     console.log("y");
// });

// Now, JS uses only the call stack, so can call it as the main thread. So, everything, executed on the page
// will be done using the call stack.

// So, when any operation blocks the main thread, then it is known as Thread Blocking.
// And since, setTimeout takes time, we use async code, so that the main thread isnt blocked.

// --------------------------------

// Event Listeners and Closures

// Rememeber, when ever we add an event listerner to any element, we also need to remove it, so as to avoid memory leaks and this is called
// garbage collection and JS does this automatically, but we need to make sure that we remove the event listener when it is not needed,
// so that the memory can be freed up.

// Why, cause, event listeners are heavy. Heavy, cause, callback function, forms a closure, and even if we dont use any variable
// it is still hold up in the memory cause of the closure formed by the callback function.

// -------------------------------

// Trust Issues with setTimeout

// console.log("Start");

// setTimeout(function() {
//     console.log("Timer");
// }, 5000);

// console.log("End");
// More 1000 lines of code (approx ~10s)

// We expect to see the Timer after 5 seconds, but we see it after 10 seconds, cause, first the start is logged, then
// when the setTimeout is encountered, the callback function is stored somewhere and attached a timer to it, and JS
// continues executing the rest of the code, and after 10 seconds, when the main thread is free, then it checks for the
// callback function, and if the timer is expired, then it pushes the callback function to the call stack and executes it.
// So, this is how setTimeout works and this is why we see Timer after 10 seconds instead of 5 seconds.

// setTimeout of 0 seconds

// console.log("Start");

// function cb() {
//     console.log("Timer");
// };
// cb();

// setTimeout(function cb() {
//     console.log("Timer");
// }, 0);

// console.log("End");

// The output will be Start, End and then Timer. Even though, the timer is 0, but it will first stored in Web API enviornment,
// attach a timer, and then when the call stack is empty, then the callback function will be pushed to the call stack and
// executed.

// ----------------------------------------------

// Prototype and Prototypal Inheritance in JS

// Ever thought, how, variables, arr, function, object, etc. get access to various methods, like length, push, pop, etc. ?
// So, this is because of prototype in JS. So, whenver we create anyy variable, arr, function, object, etc. in JS, then
// a hidden property called __proto__ is created in the memory, and this __proto__ is a reference to the prototype of that
// variable, arr, function, object, etc. and this prototype is an object which contains various methods and properties that
// are accessible to that variable, arr, function, object, etc. and this is how they get access to various methods and properties.

// To, access the hidden object, that JS attaches, we can use the __proto__ or do Array.prototype, which gives us the object that is
// the prototype of the array, and this object contains various methods and properties that are accessible to the array.

// Prototype chain - So, arr.__proto__ is the prototype of arr, which is equal to the prototype of Array, and
// arr.__proto__.__proto__ is the prototype of the prototype of arr, which is equal to the prototype of Object,
// and arr.__proto__.__proto__.__proto__ is null, as it is the end of the prototype chain.

// So, you can say, prototype of prototype of Array is the prototype of Object, and prototype of prototype of Object
// is null, and hence it is the end of the prototype chain.

// So the chain is, arr --> Array.prototype --> Object.prototype --> null
// And, arr.__proto__ === Array.prototype, and object.__proto__ === Object.prototype

// arr = [1,2,3];
// console.log(arr.__proto__);

// const obj1 = {
//     city: "New York",
// }

// const obj = {
//     name: "John",
//     city: "Los Angeles",
//     getIntro: function() {
//         console.log(`My name is ${this.name} and I live in ${this.city}`);
//     },
// }

// const obj2 = {
//     name: "Jane",
//     age: 30,
// }

// This is called prototypal inheritance, as obj2 is inheriting the properties and methods of obj,
// and hence can access the getIntro method of obj, and this is possible because of the __proto__ property,
// which is a reference to the prototype of obj 2, which is obj, and hence obj2 can access the properties
// and methods of obj.

// obj2.__proto__ = obj;
// obj2.__proto__ = obj1;

// Here, the obj2 can access the properties of obj1, but it cannot access the getIntro method of obj, as it is not in
// the prototype chain of obj2, and hence it is not accessible to obj2, and hence undefined is logged.

// obj2.__proto__ = obj;
// obj.__proto__ = obj1;

// obj2.getIntro(); // Logs - My name is Jane and I live in Los Angeles, as it first checks for getIntro in obj2, and doesnt find it there, and then
// console.log(obj2.name); // Logs - Jane, as it first checks for name in obj2, and finds it there, and hence logs it
// console.log(obj2.city); // Logs - New York, as it first checks for city in obj2, and doesnt find it there, and then
// // checks for city in obj, and finds it there, and hence logs it
// console.log(obj.age); // Logs - undefined

// Remember, in object property lookup, if that property is not found, undefined is logged, but in case of a variable lookup,
// if the variable is not found, in it's scope chain, then a ReferenceError is thrown, variable is not defined.
// So, this is the difference between variable lookup and object property lookup in JS.

// In case of obj.city, first the obj2 is checked, and if not found, it's proto is checked and if not found, then the
// proto of proto is checked and so on, until it reaches null, and if not found, then undefined is logged.

// Imp questions based on this

// What is Prototype?
// What is Prototypal Inheritance?
// What is Prototype Chain?
// Why we call it _proto_ ?
// What is inhertance in Javascript?

// --------------------------------------