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

const url = "https://api.github.com/users/kushalxcoder"; // Public API

const user = fetch(url);
console.log(user); // Promise { <pending> }

user.then(function(data) {
    console.log(data);
});

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

createOrder(cart)
.then(function(orderId) {
    return proceedToPayment(orderId);
})
.then(function(paymentId) {
    return showOrderSummary(paymentId);
});