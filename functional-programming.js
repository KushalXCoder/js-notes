// Higher Order Functions

// Functions that take other functions as arguments or returns a function from it is called Higher Order Functions.

// Example of Higher Order Function
// function greet() {
//     console.log("Hello, World!");
// }

// function y(x) {
//     x();
// }

// Here, y is the higher order function and x is the function that is passed as an argument to y, or x is a callback
// function for y.


// Example of Higher Order Function

// And this way of coding is better, than writing 3 loops, which calculates area, circumference and diameter of the circles
// with the given radius, because it is more reusable and less error prone.

// const radius = [3, 1, 2, 4];

// const area = function(r) {
//     return Math.PI * r * r;
// };

// const circumference = function(r) {
//     return 2 * Math.PI * r;
// };

// const diameter = function(r) {
//     return 2 * r;
// }

// const calculate = function(radius,logic) {
//     let ans = [];
//     for(let i = 0; i < radius.length; i++) {
//         ans.push(logic(radius[i]));
//     }
//     return ans;
// }

// Array.prototype.calculate = function(logic) {
//     let ans = [];
//     for(let i = 0; i < this.length; i++) {
//         ans.push(logic(this[i]));
//     }
//     return ans;
// }

// console.log(radius.calculate(area));

// Using Array.prototype.calculate, we can directly call calculate on the radius array, and pass the logic function
// as an argument, which is more intuitive and easier to read. Now, we can use calculate, with any array in our code.

// This code is more abstract and reusable, and every function has it's own resppnsibility. So, it makes it easier to maintain
// and debug.

// Reusability, Modularity, etc.

// --------------------------------------------------

// Map, Filter and Reduce - Higher Order Functions

// Map - It is used to transform an array. Applied to each element of the array and returns a new array.

let arr = [1, 2, 3, 4, 5];

const doubled = arr.map(x => x * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

const binary = arr.map(x => x.toString(2));
console.log(binary); // ['1', '10', '11', '100', '101']

// Polyfill for map

Array.prototype.map1 = function(callback) {
    let ans = [];
    for(let i = 0; i < this.length; i++) {
        ans.push(callback(this[i]));
    }
    return ans;
}

const triple = arr.map1(x => x * 3);
console.log(triple); // [3, 6, 9, 12, 15]

// Filter - It is used to filter an array. Applied to each element and returns a new array with only the elements that
// satisfy the condition.

arr = [1, 2, 3, 4, 5];

const even = arr.filter(x => x % 2 === 0);
console.log(even); // [2, 4]

// Polyfill for filter

Array.prototype.filter1 = function(callback) {
    let ans = [];
    for(let i = 0; i < this.length; i++) {
        if(callback(this[i])) ans.push(this[i]); // Only push if the condition is satisfied
    }
    return ans;
}

const even1 = arr.filter1(x => x % 2 === 0);
console.log(even1); // [2, 4]

// Reduce - It is used, when you have to take all the elements of the array and return a single value. It returns a single
// value only.

// --------------------------------------------

// To understand the use of reduce, we first need to see a normal code we need to write to calculate the sum of all
// elements of the array.

function sum(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

arr = [1, 2, 3, 4, 5];
console.log(sum(arr)); // 15

// Same code using reduce

const output = arr.reduce((acc,curr) => acc + curr, 0); // 0 is the initial value of acc
console.log(output); // 15

// What happens is, that this function, run on every element of the array. Now, acc is like a variable to store, what we 
// want to calculate, and curr is the current element of the array. So, on the first iteration, acc is 0 and curr is 1,
// so it returns 1.

// -----------------------------------------------

// Finding max element of the array with and without reduce

function max(arr) {
    let ans = 0;
    for(let i = 0; i < arr.length; i++) {
        ans = Math.max(ans, arr[i]);
    }
    return ans;
}

console.log(max(arr)); // 5

const max1 = arr.reduce((acc,curr) => Math.max(acc,curr), 0);
console.log(max1); // 5

// ------------------------------------------------

// Polyfill for reduce

Array.prototype.reduce1 = function(callback,val) {
    let acc = val;
    for(let i = 0; i < this.length; i++) {
        acc = callback(acc, this[i]);
    }
    return acc;
}

const sum1 = arr.reduce1((acc,curr) => acc + curr, 0);
console.log(sum1); // 15
const max2 = arr.reduce1((acc,curr) => Math.max(acc,curr), 0);
console.log(max2); // 5

// ------------------------------------------------

// Real life example of higher order functions

const users = [
    {name: 'Alice', lastname: 'Smith', age: 25},
    {name: 'Bob', lastname: 'Johnson', age: 30},
    {name: 'Charlie', lastname: 'Williams', age: 35},
    {name: 'David', lastname: 'Brown', age: 40},
    {name: 'Eve', lastname: 'Davis', age: 45}
];

// Output the list of full names

const fullnames = users.map(user => user.name + ' ' + user.lastname);
console.log(fullnames); // ['Alice Smith', 'Bob Johnson', 'Charlie Williams', 'David Brown', 'Eve Davis']


// Find the users with a same age
// { 25: 1, 30: 1, 35: 1, 40: 1, 45: 1 }

// Hint: We need to use reduce, as we need only one final value, and not a list of values.

const ageCnt = users.reduce((acc, curr) => {
    if(acc[curr.age]) {
        acc[curr.age]++;
    } else {
        acc[curr.age] = 1;
    }
    return acc;
}, {});

console.log(ageCnt); // { 25: 1, 30: 1, 35: 1, 40: 1, 45: 1 }

// Output first name of all people, whose age is less than 40
const names = users
.filter((x) => (x.age < 40))
.map((x) => x.name);

console.log(names); // ['Alice', 'Bob', 'Charlie']