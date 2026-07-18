// Q1

console.log("--- Q1 ---");

let arr = [1,2,3,4,5];
let arr1 = arr; // Till this point, both point to the same object in memory. So, updating one will update the other.

// Applying mutations - This will modify the actual array object
arr1.length = 0;
arr1.push(6);
arr1.pop();
arr1[0] = 100;

console.log(arr);
console.log(arr1);

// But, this is reassignin the variable, so it creates a new array, and
// makes arr1 point to that
arr1 = [1,2,3];

console.log(arr);
console.log(arr1);

// Q2

console.log("--- Q2 ---");

x = 10;
console.log(x);
var x;

// Uses the concept of hoisting. Hoisting is a JS mechanism, where the variable and function
// declarations are moved to the top of their scope beforoe the code execution.

// Q3

console.log("--- Q3 ---");

let a = { x: 1, y: 2 }
let b = a;

b.x = 3;
b.z = 2; // Adds z : 2 in both

// Remember - Every missing property in JS objects returns undefined, and not an error
console.log(a.w); // Prints undefined and not error

console.log(a);
console.log(b);

// Again, same concept, object and array are reference types, means when they are copied
// they share the same reference in memory. So, when we update one, the other is also updated.

// Imp Theory

/*

- Undefined vs Null in JS

Ans - Both are special keywords in JS and used to represent the absence of a value. But, they are different.

1) undefined means a value has not been assigned yet, while null means the value is intentionally empty.
2) undefined is automatically assigned by JS, while null is assigned by the programmer.
3) type of undefined is "undefined", while type of null is "object" :)

- Follow up, use cases of both

Ans - undefined is assigned to variables when they are declared, in the memory execution phase of JS.
And we use null, when we use the useRef hook, where we define it's type to be <ElementRef | null>
where null indicates that the element hasn't been created in the DOM.

*/

// Q4 - Includes scope, timeouts, closure, event loop, microtask queue, etc.

console.log("--- Q4 ---");

for(var i = 0; i < 10; i++){
    // setTimeout(function(){
    //   console.log("value is " + i);
    // })
}

/*

So, the loop runs and the callback function is stored in the web api container attached with a timer.
As, the timer gets complete, the func is added to the microtask queue, where event loop constantly
checks the call stack to be empty, but it executing the for loop. When the for loop, ends, the call stack
is empty and the event loop picks the first callback function from the microtask queue and executes it.
But, the value of i is 10 cause we have used var which has a global or function scope, as the for loop
has ended. So, all the 10 callbacks will print 10.

- Follow up, then how to correct this ?

Ans - First, solution is to use let instead of var (Dont use const, error dega :)
Second solution is to use IIFE (Immediately Invoked Function Expression) to create a
new scope for each iteration of the loop.

- More on scopes

var is function scoped, so it has only one shared binding for the entire loop, while let is block scoped,
so it creates a new binding for each iteration of the loop.

- Binding

It is the association of an identifier (like a variable name) with a value in memory.

Code with IIFE

for(var i = 0; i < 10; i++){
    (function(x) {
        setTimeout(function(){
            console.log("value is " + x);
        })
    })(i);
}

*/

// Q5

console.log("--- Q5 ---");

function hello() {
  console.log("1");
    // setTimeout(() => {
    //     console.log("2");
    // })
  console.log("3");
}
hello();

// Again the event loop, microtask queue, call stack, etc. comes into play here.

// Q6 - Type coersion, Operators

console.log("--- Q6 ---");

let f = "8";
let val = 1;
console.log((+f)+val+1);

/*

+f makes the string f to a number, so the output is 10. If we remove the +,
then it will be string concatenation and the output will be 811.

But, if we remove + from f, and do f + val + 1, then answer will ne "811" and
not "82", cause + operator is left associative, so it will first do f + val, which
is string concatenation.

In case of -, f + val gives "81", but then - makes the string to number, so the output
will be 80.

And, -f makes the number negative, so the output will be -8 + 1 + 1 = -6.

*/

// Q7 - Scope

console.log("--- Q7 ---");

let num = 10;
if(true){
   let num = 20;
   console.log(num, "inside");
}
console.log(num, "outside");

/*

Again, let has block scope, so inside, the if condition, the variables are stored
in a different memory location, and outside, the variable is stored in a different
memory location.

In case of var, the val is overwritten and in case of const, same behavior as let.

*/

// Q8

console.log("--- Q8 ---");

const p1 = { name: "John", age: 20 };
const p2 = { age: 21, ...p1 };
console.log(p2);


/*

Now, after the spread operator, p2 will be like this { age: 21, name: "John", age: 20 },
now an object cant have duplicate keys, so the last key will overwrite the previous one,
so the final output will be { age: 20, name: "John" }.

In JS, the order is left to right.

*/

// Q9 - Type Coersion

console.log("--- Q9 ---");

console.log(5 < 6 < 7);
console.log(5 < 6 == 6);

/*

In JS, the comparison operators are left associative, so it will first do 5 < 6, which is true
and then we have true < 7, so there will be type coersion, and true will become 1, so we now have
1 < 7, which is true.

*/

// Imp Theory - Equality Checks

/*

- There are 2 types of equality checks in JS, == and ===. The first one is called loose equality check,
and the second one is called strict equality check.

In the == operator, JS does type coersion, so it converts the operands to the same type before comparing them.
And in the === operator, JS does not do type coersion, so it compares the operands (value and their types).

*/

// Q10

console.log("--- Q10 ---");

console.log("--- Loose Equality Check ---");

console.log(0 == false);
console.log(1 == true);
console.log({} == {});

console.log("--- Strict Equality Check ---");

console.log(0 === false);
console.log(0 === true);
console.log({} === {});

console.log("--- Important Comparisons ---");

console.log(undefined == null); // A special rule in JS, no coercion
console.log(undefined === null);

console.log(null == 0);
console.log(null === 0);

console.log(undefined == 0);
console.log(undefined === 0);

console.log(Number(null));
console.log(Number(undefined));

/*

- Thing to note here is that, in JS, objects are reference types, so when we compare two objects
it checks their references in memory. So, it doesn't matter if it's a loose or strict equality check,
the output will be false.

*/

// Q11 - String methods - split


console.log("--- Q11 ---");

console.log("apple".split('')); // Means split on every character

// Q12 - Array methods - indexOf, lastIndexOf

console.log("--- Q12 ---");

const arr2 = [1, 2, 5, 10, 8, 5, 3, 1];

console.log(arr2.indexOf(5));
console.log(arr2.lastIndexOf(5));

const result = arr2.map(el => el + 2)
.filter(el => el > 5);

console.log(result);

delete arr2[2];
console.log(arr2.length);

// Element is deleted but array isn't reiindex, it stores
// undefined instead.

// Q13

console.log("--- Q13 ---");

function sum(a = 5, b = 7) {
    console.log(a+b);
}
sum(null,20);

/*

The function would take default values of 5 for a and 7 for b, if no
value is passed, i.e. undefined is passed.

But in case of null, we will have null + 20, so the output will be 20, cause
null is treated as 0 in JS.

*/

// Q14

console.log("--- Q14 ---");

console.log(greet());
function greet() {
    return "Hello";
}

// console.log(greet1());
var greet1 = () => {
    return "Hello";
}

/*

So, JS hoists function declarations, but not function expressions. So, the first greet() call works, but the second greet1() call throws an error.
Cause, in greet1, the variable is hoisted, but not the function expression, so it is undefined at the time of calling. And hence greet1() shows
is not a function error.

*/

// Q15 - Shallow and Deep Copy

console.log("--- Q15 ---");

const userDetails = {
  firstName: "Surbhi",
  lastName: "Dighe",
  age: 20,
  address: {
    city: {
        name: "Hyderabad",
        street: "ABC",
    },
    country: "India",
  },
};

// Spread Operator creates a shallow copy of the object
let cloneUserDetails = { ...userDetails };

userDetails.age = 22;
// userDetails.address.city = "Banglore";

console.log(cloneUserDetails.age); 
console.log(cloneUserDetails.address.city);

/*

The spread operator creates a shallow copy of the object, which means that it copies the properties of the object to a new object.
However, if the object has nested objects, the nested objects are still referenced in memory. So, when we change the nested object
in the original object, it also changes in the cloned object.

- Follow up, then how to prevent this ?

Ans - Create a deep copy of the object, which means that it copies the properties of the object and all nested objects to a new object.
It can be created using JSON.parse(JSON.stringify(obj)) or using a library like lodash.

- Maybe asked, Implement the Deep Copy Pollyfill  (VVIMP)

function deepCopy(obj) {
    // Check if it's a nested array or object
    let ans = Array.isArray(obj) ? [] : {};

    // Iterate the object
    for(const val in obj) {
        if(typeof obj[val] === "object") {
            // Recursively explore the object
            ans[val] = deepCopy(obj[val]);
        } else {
            // Store the value
            ans[val] = obj[val];
        }
    }
    return ans;
}

// Test obj
const obj1 = {
    user: "Kushal",
    age: 20,
    address: ["Gota", "Ahmedadbad", "Gujarat", "India", "382481"],
    details: {
        clg: "AU",
        year: 4,
        sem_marks: ["3.22","3.22","3.22"],
    }
}

const res = deepCopy(obj1);
console.log(res);
console.log(obj1);

- Follow up, how to create shallow and deep clones

Ans - For shallow, use spread operator or direct assignment and for deep
use structuredClone method or JSON.parse(JSON.stringify(obj)) or use
external lib's like lodash.

*/

// Q16

console.log("--- Q16 ---");

const arr3 = [10,-1,2];

arr3.sort();
arr3.sort((a,b) => a - b);
arr3.sort((a,b) => b - a);

console.log(arr3);

/*

- Sorting in JS was meant to sort strings, so whenever we use sort(), JS convert the
array elements to strings and then compare.

So, in our case, the answer is -1, 10, 2 (interesting). Cause, comparing "10" and "2",
1 comes before 2 in unicode. And when we see, "-1" and "10", - comes before 1 in unicode.
So, this is the answer.

- Follow up, How to sort in ascending or descending, based on numbers ?

Use this :-

sort((a,b) => a - b) // For ascending
sort((a,b) => b - a) // For descending

what happens is, they do a - b, so "-1" - "10", which return -11 in number, which is < 0,
so a should come before b, and if result is > 0, a comes after b and if result is 0, keep
their order

*/

// Q17

console.log("--- Q17 ---");

const user = { 
	name1: "Surbhi dighe", 
	country: "India"
};
const { name1: fullname, country } = user;

console.log(fullname);
// console.log(name1); // Reference error, name1 is not defined

const { age = 20 } = user;
console.log(age);

/*

- So, when we destructure an object, and we do name1 = fullname, then we
are assigning, name1 to a local variable fullname, and hence now, name1 is
not directly accessible.

- And, when we do, age = 20, so initially age is undefined in the user obj,
but we added a default or fallback value of 20, which will be used in case
if the value is undefined or doesn't exist. Note, if age is assigned null or NaN, then the
fallback value won't be used.

*/

// Q19

console.log("--- Q19 ---");

// console.log("Hi");
// var a = 10;
// let a = 20;
// console.log(a);

/*

- It might look simple, that the result will be an error. But, the interviewer,
will ask, will anything be printed in the console ? And you might think, Hi will
be printed but no, this error is caught when JS is in the memory phase, even before
execution phase, so nothing will be logged !

*/

// Q20

console.log("--- Q20 ---");

function modify(obj) {
    obj.name = "Updated";
}

let person = { name: "Original" };
modify(person);

console.log(person.name);

function reassign(obj) {
    return obj = { name: "New Object" };
}

const res = reassign(person);

console.log(res);
console.log(person.name);

/*

Remember :-

JS does not allow true pass by reference. It uses call by value for primitives
(numbers, strings, booleans, null, undefined and symbols) and call by sharing
for objects and arrays.

So, in case of obj and array the reference is copied and not the object, which
is not the case with primitives.

- Again the same concept of updating value and reassinging obj / arr.
When we update value, it gets updated in both the copies since they share
the reference, but when we assign a new obj, then obj starts pointing to
the new object { name: "New Object" }

*/

// Q20 - Event loop, Queues (VVIMP)

console.log("--- Q20 ---");

console.log('Start');

// setTimeout(() => {
//   console.log('setTimeout');
// }, 0);

// Promise.resolve().then(() => {
//   console.log('Promise');
// });

// console.log('End');

/*

- Very imp question, checks the JS working knowledge. So, first start and end
will be printend, and the callback func of setTimeout and Promise, will be in
queue, but the callback func of Promise will be in the macrotask queue, which
is given priority by event loop and hence, Promise will be printed and at last
the setTimeout will be printed.

*/

// Q21

console.log("--- Q21 ---");

const user2 = {
    age: '20',
    logMessage() {
        console.log(this.age);
    }
}; 
console.log(user2.logMessage);

// setTimeout(user2.logMessage, 1000); // Undefined

// // Should give error, but idk chrome doesnt and prints nothing

// setTimeout(user2.logMessage(), 1000); // Prints 20 though
// setTimeout(() => user2.logMessage, 1000);

// // Prints the age
// setTimeout(() => user2.logMessage(), 1000);

// Q22

console.log("--- Q22 ---");

let a1 = {};
let b1 = { key: "abc" };
let c1 = { key: "efg" };

a1[b1] = 111;
a1[c1] = 222;

console.log(a1[b1]);
console.log(a1[c1]);

/*

- Whenever we try to call a key in obj, it is first converted to a string,
now b1 is an object, so String(object) is [object Object], so in a, we would
have "[object Object]": 111, and then when we do a1[c1], c1 is converted to
string which is again "[object Object]" and since a already has this value
it is overriden and becomes 222.

*/

// Q23

console.log("--- Q23 ---");

function printName(firstName, lastName) {
    firstName = "Aman";
    lastName = "Bhoria";
    return arguments[0] + " " + arguments[1];
}

let name = printName("John", "Doe");
console.log(name);

/*

- In non-strict mode, the parameters and the arguments are linked together, i.e. firstName --> arguments[0]
and lastName --> arguments[1], and hence changes in firstName and lastName also changes in arguments.

But, in strict mode, this won't happen, and John Doe will be printed.

*/