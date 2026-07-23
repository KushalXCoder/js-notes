// - Some important JS interview questions and answers

// ------------------------------------------------------

/*

- Deep Copy vs Shallow Copy in JavaScript

Ans - Shallow copy is copying the reference of an object to a new variable. In this only the top-level properties are copies, while nested objects or arrays still
reference the original memory location. Means, changing nested objects properties in the one, reflects in the other as they share the same memory reference.

Primitive values are copied by value, not by reference.

*/

// Example of Shallow Copy

// const obj = {
//     a: 2,
//     b: { c : 4 }
// }

// console.log(obj);

// Two ways of creating a shallow copy is using the spread operator or using the Object.assign() method.

// Note - Using the assignment operator, just references the original object and not copies it, so both the objects point to the same location, any changes in one
// will reflect in the other.

// const sc = { ...obj };
// sc.a = 6;

// console.log(obj); // { a: 2, b: { c: 4 } }
// console.log(sc); // { a: 6, b: { c: 4 } }

// Note: In dev tools, it may show, { a: 2, b: { c: 12 } } for obj, but it is not the case, it is just showing the current state of the object,
// but in reality, it is still { a: 2, b: { c: 4 } }. It's just a browser quirk, cause the object is being logged by reference, and when we change
// the nested object, it reflects in both the original and the copied object. Try, JSON.stringify(obj) to see the actual state of the object.

// sc.b.c = 12;
// console.log(obj); // { a: 2, b: { c: 12 } }
// console.log(sc); // { a: 6, b: { c: 12 } }

// sc.b = { c: 12 };
// console.log(obj); // { a: 2, b: { c: 4 } }
// console.log(sc); // { a: 6, b: { c: 12 } }

// Note: In dev tools, the sc may show { a: 6, b: { c: 14 } } as again chrome quirks, change below, affected other console.log

// sc.b.c = 14;
// console.log(obj); // { a: 2, b: { c: 4 } }
// console.log(sc); // { a: 6, b: { c: 14 } }

/*

A deep copy, on the other hand, creates a completely independent copy of the object, including all nested objects or arrays. Each object is stored in a
separate memory location, making them entirely independent. Changes made in one, doesn't affect the others.

To create a deep copy, we use JSON.parse() and JSON.stringify() methods, needs to be used together.

JSON.stringify() converts a JavaScript object into a JSON string.
JSON.parse() converts the JSON string back into a new JavaScript object.

Functions, methods, undefined, and symbols are not serializable and are removed.

Lodash (_.cloneDeep) are a better option as they handle methods and nested structures safely.

*/

// let employee = {
//     eid: "E102",
//     ename: "Jack",
//     eaddress: "New York",
//     salary: 50000,
//     fn: function() {
//         console.log("Hello, I am a function inside the employee object");
//     }
// }

// console.log(JSON.stringify(employee));

// let newEmployee = JSON.parse(JSON.stringify(employee));

// console.log("Employee=> ", employee);
// console.log("New Employee=> ", newEmployee);

// newEmployee.ename = "Beck";
// newEmployee.salary = 70000;

// console.log("Employee=> ", employee);
// console.log("New Employee=> ", newEmployee);

// Note: You will again notice the dev tools, quirks, so please ignore :)

/*


While the JSON approach is simple, it has its limitations:

--> Non-Serializable Properties: Functions, undefined, and certain other non-serializable values are lost when using JSON.stringify().
--> Circular References: Objects with circular references will cause JSON.stringify() to throw an error.
--> Date Objects: Dates are converted to strings during the process, losing their original type.

*/

// Imp Question

// Implement deep copy function for array using recursion.
// deepCopy([1,[2,[3,4,[5,6]]]]);

// function deepCopy(arr) {
//     let ans = [];

//     for(let i = 0; i < arr.length; i++) {
//         if(Array.isArray(arr[i])) {
//             ans.push(deepCopy(arr[i]));
//         } else {
//             ans.push(arr[i]);
//         }
//     }

//     return ans;
// }

// const arr = [1,[2,[3,4,[5,6]]]];
// const copiedArr = deepCopy(arr);

// arr[0] = 5;
// console.log(arr);

// copiedArr[0] = 10;
// console.log(copiedArr);

// ------------------------------------------------------

// console.log("------------------------------------------------------");
// console.log("Comparison Questions in JS");
// console.log("------------------------------------------------------");

/*

- Comparison Questions in JS

Q) Two types of equality checks in JS - Strict Equality (===) and Loose Equality (==)

Ans - Strict Equality (===) checks for both value and type equality. It returns true only if both
the value and type are the same.

*/

// - Loose Equality (==)

// console.log(5 == "5"); // true, because the string "5" is coerced to a number before comparison.
// console.log("" == false); // true, because the empty string is coerced to false before comparison.
// console.log("" == 0); // true, because the empty string is coerced to 0 before comparison.

// - Strict Equality (===)

// console.log(5 === "5"); // false, because the types are different (number vs string).
// console.log("" === false); // false, because the types are different (string vs boolean).
// console.log("" === 0); // false, because the types are different (string vs number).

/*

- The Special Rule

The rule or the exception in JS is that null == undefined is true. Although, null === undefiend is false, because they
are of different types. But for loose equality, they are considered equal, cause they both are considered missing value.

And everything else like, null == anything (like 0, false, "", etc.) is false. Same for
undefined == anything (like 0, false, "", etc.) is also false.

One thing to notice, that Number(null) is 0, but Number(undefined) is NaN. So, one thing to confuse about is that, if null is 0,
then why null == 0 is false. The reason is that, the loose equality (==) does not convert null or undefined to a number for comparison.
It only considers them equal to each other and not to any other value.

So, during equality comparison, null and undefined are never coerced to a number, and they are only equal to each other (in loose equality)
and not to any other value.

- Important

Now, if we do, null >= 0, then it is true, because >, <, <=, >= are ordering operators (operators that determine the order of
two values). And, hence they coerce null to a number (0) for comparison. So, null >= 0 is true, but null > 0 is false,
because null is not greater than 0. And, undefined >= 0 is false, because undefined is coerced to NaN, and any comparison
with NaN is false.

*/

// console.log(null == undefined); // true
// console.log(null === undefined); // false

// console.log(null == 0); // false
// console.log(undefined == 0); // false

// console.log(null >= 0); // true
// console.log(null > 0); // false
// console.log(undefined > 0); // false

/*

- Some Important Questions

[] == [], is false, cause in JS, objects (including arrays) are compared by reference, not by value. So, two different array
instances are not equal.

[] == ![], is true, because in JS, the objects are truthy (means, Boolean([]) or Boolean({}) is true). So, ![] is false, and
[] is coerced to string "", and then to number 0, and on the right side, false is coerced to number 0, so the comparison becomes 0 == 0,
which is true.

Now, {} == {}, is false, same reason as [] == [].

But, {} == !{}, is also false, cause, {} is truthy, so !{} is false, and {} is coerced to string, which is "[object Object]",
which is coerced to NaN, and false is coerced to 0, so the comparison becomes NaN == 0, which is false.

Note :- Anything compared with NaN is false, so the result is false.

*/

// console.log([] == []); // false
// console.log([] == ![]); // true

// console.log({} == {}); // false
// console.log({} == !{}); // false

// Similiarly think of this too

// console.log({} == false); // false
// console.log({} == true); // false

// console.log([] == false); // true
// console.log([0] == false); // true
// console.log([1] == true); // true


// ------------------------------------------------------

/*

- this keyword in JS

1) this in a global space
Ans - Initially, this is a window object or it will have the value of the global object.

Every place where JS is running, there is a global object. In browsers, the global object is window,
in Node.js, it is global.

2) this in a function scope
Ans - In a function scope, this refers to the object that is executing the current function. If the function
is called in the global context, this will refer to the global object (window in browsers, global in Node.js).
If the function is called as a method of an object, this will refer to that object.

3) this in a strict mode
Ans - In strict mode, this behaves differently. If a function is called in the global context, this will be undefined
instead of referring to the global object.

Note :-
Why not undefined in non-strict mode ?
Cause of this substituion.
this substitution says that if the value of this is undefined or null, this keyword will be replaced with global object.

4) this keyword with different types of calls
Ans - this value also depends on how this is called. If a function is called as a method of an object, this will refer
to that object. If a function is called as a constructor (using the new keyword), this will refer to the newly created
object, etc.

5) this inside a object's method
Ans - this inside an object's method refers to the object itself. When a method is called on an object, this points to
that object.

6) call, apply, and bind methods
Ans - Read the code example below, to understand more

7) this inside arrow functions
Ans - Arrow functions don't have a this binding associated with it. But the value of this inside an arrow function is
lexically inherited from the surrounding scope. So, if an arrow function is defined inside a regular function, this
will refer to the same value as in the enclosing function.

8) this with the DOM elements
Ans - It references the respective HTML element

*/

// Code examples for the above theory

"use strict";

// Global scope
console.log(this);

// Function scope
function x(){
    console.log(this);
}
// this will refer to the global obj, as it is called in the global context
// under strict mode, this will be undefined
x();

// Under the strict mode, this will also give globalObject as it is called with the window object,
// and in non-strict mode too, as it called in the global context.
window.x();

const obj = {
    name: "John",
    greet: function() {
        console.log(this);
    }
}

obj.greet(); // this refers to obj where the method is present / called with

// Sharing methods

// So, if obj2 also wants the same greet method, as it is in obj, it can be shared
// using the call, apply, or bind methods.

const obj2 = {
    name: "Jane",
};

// Basically, what it says is, use the greet method of obj and use
// the this value of obj2.
obj.greet.call(obj2);

// So, to make obj2 use the same greet method, it cant't access it directly, so we need to
// overrdie the this value.

// this inside arrow functions
const obj3 = {
    name: "Jack",
    greet: () => {
        console.log(this);
    }
}

// this refers to the global object, as it is an arrow function and doesn't have its own
// this binding, so it inherits from the surrounding scope (global scope in this case).
obj3.greet();

const obj4 = {
    name: "Beck",
    greet: function() {
        const arrowFunc = () => {
            console.log(this);
        }
        arrowFunc();
    }
}

obj4.greet();

// Applying debounce and throttling

// debounce

/*

- Debouncing is delaying the execution of a function until a certain of time has elapsed since
the last call.

*/

const user = {
    name: "Kushal",
    greet(msg) {
        console.log(msg, this.name);
    }
}

function debounce(fn,wait) {
    let timer;
    return function(...args) {
        clearTimeout(timer);
        timer = setTimeout(() => fn.apply(this,args), wait);
    };
}

user.debounced = debounce(user.greet,500);
user.debounced("Hi");

// Throttling

/*

- Throttling caps how often a function can run, that is at most once per time
interval, regardless of how many times it is called.

- Two types - leading and trailing

In leading, only the first call is executed and rest all in that interval are dropped
while in trailing the first call and the last call after the time interval has finished
is executed.

*/

// Leading call

// function throttle(fn,limit) {
//     let waiting = false;
//     return function(...args) {
//         if(waiting) return;

//         fn.apply(this,args);
//         waiting = true;

//         setTimeout(() => {
//             waiting = false;    
//         }, limit);
//     }
// }

// Trailing call
function throttle(fn, limit) {
    let waiting = false;
    let lastArgs = null;

    return function(...args) {
        if(!waiting) {
            waiting = true;
            fn.apply(this,args);
            // fn(...args);

            setTimeout(() => {
                waiting = false;
                if(lastArgs) {
                    fn.apply(this,lastArgs);
                    // fn(...lastArgs);
                    lastArgs = null;
                }
            }, limit);
        } else {
            lastArgs = args;
        }
    }
}

const ans = throttle((val) => {
    console.log(val);
}, 1000);

// window.addEventListener("scroll", ans);

// const ans = debounce((val) => {
//     console.log("Hello", val);
// }, 500);

document.getElementById('search').addEventListener('input', (e) => {
  ans(e.target.value);
});