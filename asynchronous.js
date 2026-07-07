// Handling async operations in JS

/*

We use the callbacks to handle async operations in JS. A callback is a function that is passed as an argument to another function and
is executed after the completion of that function.

Example :- We have a cart, which has 2 API's, createOrder and proceedToPayment. We want to create an order and then proceed to payment. We can
use callbacks to achieve this.

In the below code, it is the work of the createOrder API to call the callback function after it has completed its work. Once the createOrder API has
completed its work, it will call the callback function, which will then call the proceedToPayment API. And in this way asynchronous code is executed
in a synchronous manner.

*/

// ----------------------------------------

// api.createOrder(cart, function() {
//     api.proceedToPayment();
// });

// -----------------------------------------

/*

Now, if we have a showOrderSummary API, which is also an async operation, and we want to show the order summary after the payment is done, we will use
the callback again to achieve this.

But notice one thing, we are getting nested callbacks, to achieve the desired result. This is known as callback hell, and it can make the code difficult to read
and maintain.

So, Callback Hell is a situation where we have multiple nested callbacks, which can make the code difficult to read and maintain. It is a common problem in JavaScript
when dealing with asynchronous operations. It is also called as Pyramid of Doom.

- Another issue

Inversion of Control is a design principle in which the control of the flow of a program is inverted. In the context of callbacks, it means that the control of the flow of the program is
inverted from the main function to the callback function. This can lead to callback hell, as we have seen in the above example.

*/

// -----------------------------------------

// api.createOrder(cart, function() {
//     api.proceedToPayment(function() {
//         api.showOrderSummary();
//     });
// });

// ------------------------------------------

/*

- Things to remember

1) Callbacks are very important and play important role in performing async oprerations in JS.
2) Callbacks can lead to 2 major issues
--> Callback Hell
--> Inversion of Control

*/

// --------------------------------------------

/*

- Promises in JS

Promise is like an empty object, which will be filled with the value based on the result of the async operation. It will initially

Initial empty object of Promise - { data: undefined }
And, later after some time, when data is recieved, it will be filled with the data like { data: 'some data' }

Now in the earlier case, we use to pass a function to other function, while now we are attaching a function to the promise object.
And, passing a function and attaching a function are different things. When we pass a function, we are giving the control to that function,
while when we attach a function, we are not giving the control to that function, we are just attaching it to the promise object.

- Benefits from Promises

1) It only calls the callback function, when the promis is filled with data.
2) It doesn't give the control to the callback function, it just attaches the callback function to the promise object.
3) It solves the worry of the function getting called multiple times.

*/

// -----------------------------------------

// const promise = createOrder(cart);  // initially empty, later filled with data
// promise.then(function(orderId) {
//     proceedToPayment(orderId);
// });

// -----------------------------------------

/*

- The actual Promise object and code

To see the actual Promise object, we will use a fetch API, which returns a Promise. Using the fetch API, we are
calling a public github API, and see the result.

So, the promise object has a prototype, promise state, and a promise result.

Result of a promise stores the data which is returned by the async operation. It can be either resolved or rejected. If the async operation is successful, the promise is resolved and the
result is stored in the promise result. If the async operation fails, the promise is rejected and the error is stored in the promise result.

Promise state is the current state of the promise. It can be either pending, fulfilled, or rejected. When a promise is created, it is in the pending state. When the async operation is successful,
the promise is fulfilled and the state is changed to fulfilled. When the async operation fails, the promise is rejected and the state is changed to rejected.

- Imp Points about Promises

1) Promise can only be resolved once in JS, i.e. either resolved or rejected.
2) Promise objects are immutable, i.e. once a promise is resolved or rejected, it cannot be changed. It will always return the same result.

- Promise for Interviews

1) What is a Promise in JavaScript?
Ans: It is an object, which represents the eventual completion or failure of an async operation.

2) What is eventual completion or failure of an async operation?
Ans: It means that the async operation will eventually complete or fail, but we don't know when it will happen.
It can happen in the future, but we don't know when.

*/

// const url = "https://api.github.com/users/kushalxcoder"; // Public API

// const user = fetch(url);
// console.log(user); // Promise { <pending> }

// user.then(function(data) {
//     console.log(data);
// });

/*

- Promise Chaining in JS

Now, as we saw earlier, we created nested callbacks for the cart function, and the below code shows
how can we achieve this using promises.

The below code implements, Promise Chaining, an another important feature of Promises in JS.

So, this handles the issue of Callback Hell and also follows the order of execution of async operations in JS.

Remember, while chaining the functions, we need to return the promise object, so that the next function in the
chain can access the result of the previous function, as we are creating a pipeline of flow of data from one function
to another.

*/

// createOrder(cart)
// .then(function(orderId) {
//     return proceedToPayment(orderId);
// })
// .then(function(paymentId) {
//     return showOrderSummary(paymentId);
// });

// --------------------------------------------------------

/*

- Creating a Promise in JS

So, to create a promise, we need to use the Promise constructor, which takes a function as an argument. This function takes two arguments, resolve and reject.
Resolve and Reject are function provided by the JS engine, which we can call to resolve or reject the promise.

A promise can either be resolved or rejected, but not both. Once a promise is resolved or rejected, it cannot be changed.
It will always return the same result.

*/

const cart = ["shoes", "pants", "kurta"];

// This is consuming the promise, i.e. we are attaching a function to the promise object, which will be called when
// the promise is resolved or rejected.

// const promise = createOrder(cart);
// console.log(promise); // Promise { <fulfilled> } as it gets the value instantly

// promise.then(function(orderId) {
//     console.log("Order created with orderId: " + orderId);
//     // proceedToPayment(orderId);
// })
// .catch(function(error) {
//     console.log(error.message);
// });

// Creating a promise, i.e. we are creating a promise object, which will be filled with the
// result of the async operation.\

// function createOrder(cart) {
//     const pr = new Promise(function(resolve,reject) {
//         // create order
//         // validate cart

//         if(!validCart(cart)) {
//             const error = new Error("Cart is not valid");
//             reject(error);
//         }

//         // Assuming we got the orderId from the db
//         const orderId = "12345";
//         if(orderId) {
//             // Whatever attached here will be attached to the promise object and will be
//             // called when the promise is resolved.

//             // Suppose, we do function(id) { console.log(id); }, then the id will be the orderId,
//             // which will be given to the function when the promise is resolved.
//             resolve(orderId);
//         }
//     });

//     return pr;
// }

// Dummy function to validate the cart

// function validCart(cart) {
//     // validate cart
//     return true;
// }

/*

- Promise Chaining in JS

But, now we need to call proceedToPayment as soon as the createOrder is resolved. So, what we do ? We do
something like this.

Note :- Any then block even after catch block will be executed, as the catch block is only for handling the error and not for
stopping the execution of the code.

*/

// createOrder(cart)
// .then(function(orderId) {
//     console.log("Order created with orderId: " + orderId);
//     return orderId;
// })
// .then(function(orderId) {
//     return proceedToPayment(orderId);
// })
// .then(function(paymentInfo) {
//     console.log(paymentInfo);
//     return paymentInfo;
// })
// .catch(function(error) {
//     console.log(error.message);
// })
// .then(function(paymentInfo) {
//     console.log("Order completed with payment info: " + paymentInfo);
// });

// function proceedToPayment(orderId) {
//     return new Promise(function(resolve,reject) {
//         resolve("Payment done for orderId: " + orderId);
//     });
// }

// ------------------------------------------------------------------------------

/*

- Promise API's in JS

1) Promise.all() :- Used for parallel API calls or handling multiple promises at once. It takes an array of promises as input.
Promise.all([p1,p2,p3])

Let's assume, p1 takes 3s for response, p2 takes 1s to resolve and p3 takes 2s.

Case - I (All calls are successful) - Then the result will be an array containing the result of all the promises in the order they
were passed to the Promise.all() method. The result will be available after 3s, as p1 takes the longest time to resolve.

Case - II (One of the promise gets rejected) - If, after 1s p2 gets rejected, then as soon as p2 gets rejected, promise.all will throw an error,
and it will be the same error returned by the rejected promise.

Now, p1 and p3 will be resolved and rejected according to their own time, but the result of promise.all will be the error returned by p2, as it was
rejected first.

*/

// function apiCall1() {
//     const p1 = new Promise(function(resolve,reject) {
//         setTimeout(function() {
//             reject("API 1 rejected");
//         },3000);
//     });
//     return p1;
// }

// function apiCall2() {
//     const p2 = new Promise(function(resolve,reject) {
//         setTimeout(function() {
//             reject("API 2 rejected");
//         },1000);
//     });
//     return p2;
// }

// function apiCall3() {
//     const p3 = new Promise(function(resolve,reject) {
//         setTimeout(function() {
//             reject("API 3 rejected");
//         },2000);
//     });
//     return p3;
// }

// const promise = Promise.all([apiCall1(),apiCall2(),apiCall3()]);
// promise.then(function(data) {
//     console.log(data);
// })
// .catch(function(error) {
//     console.error(error);
// });

/*

- What if I want result from my successful promises, even if one of the promise gets rejected ?
For this, we use another Promise API, Promise.allSettled().

2) Promise.allSettled() :- Again, if all are successful, then for the same example above, after 3s
we will get the result of all the promises in the order they were passed to the
Promise.allSettled() method.

Now, if, p2 is rejected, it will still wait for all promises to fulfill or to get settled. And after 3s,
we will get the result in the array (this time array of objects), but if it is resolved, it will contain
the value of the promise, and if it is rejected, it will contain the reason for rejection or the error.

- Result will be something like this

0: {status: 'fulfilled', value: 'API 1 resolved'}
1: {status: 'rejected', reason: 'API 2 rejected'}
2: {status: 'fulfilled', value: 'API 3 resolved'}

Promise.all() is kind fo fail fast while, Promise.allSettled() will wait instead of failing fast, and will give the
result of all the promises, whether they are resolved or rejected.

*/

// const promise = Promise.allSettled([apiCall1(),apiCall2(),apiCall3()]);
// promise.then(function(data) {
//     console.log(data);
// })
// .catch(function(error) {
//     console.error(error);
// });

/*

3) Promise.race() :- It again takes an array of promises as input, and it will return the result of the
first promise that gets resolved or rejected.

It will not wait for the other promises to get settled.

Gives value of the first settled promise. Whether it be an resolved value or a rejected value (error).

If, two promises have the same time, then the one which is first in the array will be returned.

*/

// const promise = Promise.race([apiCall1(),apiCall2(),apiCall3()]);
// promise.then(function(data) {
//     console.log(data);
// })
// .catch(function(error) {
//     console.error(error);
// });

/*

4) Promise.any() :- Takes an array of promises as input. It is similiar to race, but here it will wait for
the first promise to be successful. So, if the promise which is settled first but rejected, then it won't be
returned, it will wait for the next promise to be settled and if it is resolved, then it will be returned.

Now, what if all the promises in the array are rejected ? Then it will return an AggregateError, which is a
new error type in JS, which is used to represent multiple errors.

This will be shown in the browser - AggregateError: All promises were rejected

Note :- To print those errors, you need to do console.log(error.errors);

*/

// const promise = Promise.any([apiCall1(),apiCall2(),apiCall3()]);
// promise.then(function(data) {
//     console.log(data);
// })
// .catch(function(error) {
//     console.log(error);
//     // To print the errors of all the rejected promises
//     console.error(error.errors);
// });

// -------------------------------------------------------------------------

/*

- Async/Await in JS

Note :- An async function will always returns a promise. Either you return a promise or return any non-promise
value the function will wrap that value in a promise and return it. So, anyhow, an async function will always
return a promise.

- Async/Await is a combo, used to handle promises. But, how we used to handle promises earlier ? Let's see that
first.

*/

// This is an async function

// async function getData() {
//     return "Hello";
// }

// const dataPromise = getData();
// dataPromise.then(res => console.log(res));

// ---------------------

// const p = new Promise((resolve,reject) => {
//     resolve("Promise Resolved Value!!");
// });

// // Without async/await, we used to handle promises like this
// function handleData() {
//     p.then(res => console.log(res));
// }

// handleData();

// // With async/await, we can handle promises like this
// async function handlePromise() {
//     const val = await p; // So, the resolved value of the promise will be stored in val
//     console.log(val);
// }

// handlePromise();

/*

- Async is a keyword, which is used to declare an async function. An async function is a function that returns a promise.
It can be used to handle promises.

- Await is a keyword, which can only be used inside an async function. And you write await in front of a promise, and it
will wait for the promise to be resolved or rejected, and then it will return the value of the promise.

The main use of async/await is to make the code stop and wait for the promise to be resolved or rejected, and then it will
return the value of the promise and then the code will continue to execute. So, it makes the code look like synchronous code,
but it is still asynchronous.

*/

// const p = new Promise((resolve,reject) => {
//     setTimeout(() => {
//         resolve("Promise Resolved Value!!");
//     }, 5000);
// });

// Normal way of handling promises
// function handleData() {
//     p.then(res => console.log(res));
//     console.log("I will be printed first!");
// }
// handleData();

// // Using async/await to handle promises
// async function handlePromise() {
//     const val = await p;
//     console.log("I will be printed after 5 seconds!");
//     console.log(val);
// }
// handlePromise();

// Some complex example of async/await

// async function handlePromise() {
//     console.log("Hello");

//     const val = await p;
//     console.log("Namaste");
//     console.log(val);

//     const val2 = await p;
//     console.log("Namaste 2");
//     console.log(val);
// }

// handlePromise();

// So, this will print Hello, and then after 5 seconds, it will print Namaste
// and the value of the promise, and with that, it will also print Bonjour
// and the value of the promise.

// const p2 = new Promise((resolve,reject) => {
//     setTimeout(() => {
//         resolve("Promise Resolved Value 2!!");
//     }, 10000);
// });

// async function handlePromise() {
//     console.log("Hello");

//     // Now this time, it will print Hello, and then after 10 seconds, it will print
//     // Namaste and the value of the promise, and along with that, it will print
//     // Namaste 2 and the value of the promise.

//     // const val = await p;
//     // console.log("Namaste");
//     // console.log(val);

//     // const val2 = await p2;
//     // console.log("Namaste 2");
//     // console.log(val2);

//     // If we reverse the order, make p2 wait for 10s and p1 for 5

//     // In this case, Hello will be printed, and then after 5 seconds,
//     // Namaste and the value of the promise will be printed, and then
//     // after 5 seconds, Namaste and the value of the promise will be
//     // printed.

//     const val = await p;
//     console.log("Namaste");
//     console.log(val);

//     const val2 = await p2;
//     console.log("Namaste 2");
//     console.log(val2);
// }

// handlePromise();