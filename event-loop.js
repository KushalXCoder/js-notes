// Event Loop

/*

JS is a single-threaded, synchronouos language, using a call stack to managa 
function execution. When a function is called, it is added to the call stack.
The function at the top of the stack is the one currently being executed.
When a function finishes executing, it is removed from the stack.

JS waits for none, anything comes inside call stack is quickly executed.
Then what about executing code, after some time ?

Browser contains the JS Engine, whose call stack is a part of, and where
the functions are executed. Along with the JE Engine, browser has
localStorage, DOM, Web APIs, etc.

Browser connects to external enviorment like servers, databases, etc.

When a JS code running in the call stack, need to access this super powers
of the browsers, we need some way to do that.

*/

/*

So, to access this powers, we need to use Web APIs

1. setTimeout()
2. DOM APIs
3. Fetch API
4. localStorage API
5. console
6. location

This all are part of browser and not JS. So, this Web APIs give access to
the JS code, to use this powers / functionalities provided by the browser.

The browser provides these Web API's through a window object, which is the
global object in the browser environment. So, when we call setTimeout(),
we are actually calling window.setTimeout().

In short these API's are wrapped inside this window object.

*/

// console.log("Start");

// setTimeout(function cb() {
//     console.log("Callback");
// }, 3000);

// console.log("End");

// Output - Start End Callback
// You know why this will happen, in the before notes.


/*

- Event Loop and Callback Queue

Now, as the setTimeout() is called, the callback function is sent to the
Web API or stored in the Web API enviornment, and after 3 seconds, when
the timer ends, the callback function is added to the Call Stack, and
quickly executed, and then removed from the stack.


Imp - The callback function, isnt directly added to the call stack, it first
moves to the callback queue. And the work of the event loop is to work as
a gatekeeper, to check the callback queue, and puts its functions in the
call stack.

*/

// console.log("Start");

// document.getElementById("btn")
// .addEventListener("click", function cb() {
//     console.log("Callback");
// });

// console.log("End");

// Output - Start End Callback

// When the code is executed, the event listener is also excuted, and the
// callback function in it, is sent to the Web API enviornment and stored
// with a click event attached to it, and when then button is clicked, the
// callback function, is added to the callback queue, and the event loop
// checks the callback queue, and puts the callback function in the call
// stack, and executes it, and then removes it from the stack.

// The registered callback function, is stayed in the Web API enviornment,
// until the we remove the event listener, or the page is closed.

/*

- Event Loop Work

The main work of the event loop is to check the call stack and the
callback queue. And, whenever the call stack is empty, and the callback
queue has some functions, it takes that function and put it into the
call stack and gets quickly executed.

- Why we need a callback queue ?

When we click the button, 4-5 times, then all the callback functions, are
added to the callback queue, and the event loop checks the callback queue,
and executes the callback functions one by one.

There are multiple functions throughtout the web page, and hence, this
callback queue is needed to manage all and provide all with a fair
chance

*/

console.log("Start");

setTimeout(function cbT() {
    console.log("CB SetTimeout");
}, 5000);

fetch("https://api.netflix.com")
.then(function cbF() {
    console.log("CB Netflix");
});

console.log("End");

// Output - Start End CB Netflix CB SetTimeout

// Now, when the code is executed, again the cbT stored in the
// Web API enviornment, and so is the cbF. Now, if the Netflix API is
// fast and return data in 50ms, then the cbF is added to the callback
// queue.

// Imp - No, this doesn't happen. And here comes the Microtask Queue.

/*

- Microtask Queue

Microtask Queue is the same as the callback queue, but it has
higher priority than the callback queue. And since, cbF is a promise
it will go to the microtask queue.

Now, event loop checks if the call stack is empty, and when it is
it first checks the microtask queue, and if it has some functions,
it takes and executes them and then checks the callback queue, and
executes the functions in it.

- What are Microtasks ?

All the functions that comes through promises, goes here.

The mutation observer continuosly watched for any changes in the DOM,
and whenever it detects any change, it can execute some callback function.

Promises and Mutation Observer goes into the microtask queue.

- Callback Queue are also called Task Queue

- Starvation of functions in the Callback Queue

Now if the functions in the microtask, creates another microtask and this
goes on, then the function in the Callback Queue, will never get a chance
and this is called starvation of functions / tasks in the callback queue.

*/