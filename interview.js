// - Some important JS interview questions and answers

// ------------------------------------------------------

/*

- Deep Copy vs Shallow Copy in JavaScript

Ans - Shallow copy is copying the reference of an object to a new variable. In this only the top-level properties are copies, while nested objects or arrays still
reference the original memory location. Means, changing nested objects properties in the one, reflects in the other as they share the same memory reference.

Primitive values are copied by value, not by reference.

*/

// Example of Shallow Copy
const obj = {
    a: 2,
    b: { c : 4 }
}

console.log(obj);

// Two ways of creating a shallow copy is using the spread operator or using the Object.assign() method.

// Note - Using the assignment operator, just references the original object and not copies it, so both the objects point to the same location, any changes in one
// will reflect in the other.

const sc = { ...obj };
sc.a = 6;

console.log(obj); // { a: 2, b: { c: 4 } }
console.log(sc); // { a: 6, b: { c: 4 } }

// Note: In dev tools, it may show, { a: 2, b: { c: 12 } } for obj, but it is not the case, it is just showing the current state of the object,
// but in reality, it is still { a: 2, b: { c: 4 } }. It's just a browser quirk, cause the object is being logged by reference, and when we change
// the nested object, it reflects in both the original and the copied object. Try, JSON.stringify(obj) to see the actual state of the object.

// sc.b.c = 12;
// console.log(obj); // { a: 2, b: { c: 12 } }
// console.log(sc); // { a: 6, b: { c: 12 } }

sc.b = { c: 12 };
console.log(obj); // { a: 2, b: { c: 4 } }
console.log(sc); // { a: 6, b: { c: 12 } }

// Note: In dev tools, the sc may show { a: 6, b: { c: 14 } } as again chrome quirks, change below, affected other console.log

sc.b.c = 14;
console.log(obj); // { a: 2, b: { c: 4 } }
console.log(sc); // { a: 6, b: { c: 14 } }

/*

A deep copy, on the other hand, creates a completely independent copy of the object, including all nested objects or arrays. Each object is stored in a
separate memory location, making them entirely independent. Changes made in one, doesn't affect the others.

To create a deep copy, we use JSON.parse() and JSON.stringify() methods, needs to be used together.

JSON.stringify() converts a JavaScript object into a JSON string.
JSON.parse() converts the JSON string back into a new JavaScript object.

Functions, methods, undefined, and symbols are not serializable and are removed.

Lodash (_.cloneDeep) are a better option as they handle methods and nested structures safely.

*/

let employee = {
    eid: "E102",
    ename: "Jack",
    eaddress: "New York",
    salary: 50000,
    fn: function() {
        console.log("Hello, I am a function inside the employee object");
    }
}

console.log(JSON.stringify(employee));

let newEmployee = JSON.parse(JSON.stringify(employee));

console.log("Employee=> ", employee);
console.log("New Employee=> ", newEmployee);

newEmployee.ename = "Beck";
newEmployee.salary = 70000;

console.log("Employee=> ", employee);
console.log("New Employee=> ", newEmployee);

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

function deepCopy(arr) {
    let ans = [];

    for(let i = 0; i < arr.length; i++) {
        if(Array.isArray(arr[i])) {
            ans.push(deepCopy(arr[i]));
        } else {
            ans.push(arr[i]);
        }
    }

    return ans;
}

const arr = [1,[2,[3,4,[5,6]]]];
const copiedArr = deepCopy(arr);

arr[0] = 5;
console.log(arr);

copiedArr[0] = 10;
console.log(copiedArr);

// ------------------------------------------------------