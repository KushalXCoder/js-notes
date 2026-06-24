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

console.log("------------------------------------------------------");
console.log("Comparison Questions in JS");
console.log("------------------------------------------------------");

/*

- Comparison Questions in JS

Q) Two types of equality checks in JS - Strict Equality (===) and Loose Equality (==)

Ans - Strict Equality (===) checks for both value and type equality. It returns true only if both
the value and type are the same.

*/

// - Loose Equality (==)

console.log(5 == "5"); // true, because the string "5" is coerced to a number before comparison.
console.log("" == false); // true, because the empty string is coerced to false before comparison.
console.log("" == 0); // true, because the empty string is coerced to 0 before comparison.

// - Strict Equality (===)

console.log(5 === "5"); // false, because the types are different (number vs string).
console.log("" === false); // false, because the types are different (string vs boolean).
console.log("" === 0); // false, because the types are different (string vs number).

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

console.log(null == undefined); // true
console.log(null === undefined); // false

console.log(null == 0); // false
console.log(undefined == 0); // false

console.log(null >= 0); // true
console.log(null > 0); // false
console.log(undefined > 0); // false

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

console.log([] == []); // false
console.log([] == ![]); // true

console.log({} == {}); // false
console.log({} == !{}); // false

// Similiarly think of this too

console.log({} == false); // false
console.log({} == true); // false

console.log([] == false); // true
console.log([0] == false); // true
console.log([1] == true); // true


// ------------------------------------------------------