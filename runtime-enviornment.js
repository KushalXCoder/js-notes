/*

- JavaScript Runtime Enviornment

So, browser is just able to execute the JS code cause it has the
JS Runtime Enviornment.

It's like a container, consisting of the JS Engine, Web APIs, Event Loop, Callback Queue,
and Microtask Queue.

With, the JS Runtime Enviornment, we can run JavaScript code outside of
the browser, such as in Node.js.

So, different enviornments can have different Web APIs, but they all have
the same JS Engine, Event Loop and other things.

- JS Engine

So, it's not a machine, but it's a low level program that executes the
JavaScript code. Like, Google's V8 engine, is written in C++.

- JS Engine Archirecture

It takes human written code as input and then it goes through the following
steps in the JS Engine:

1. Parsing: The code is broken down into tokens and then a Syntax Parser,
takes the code and converts it into an AST (Abstract Syntax Tree),
which is nothing but a tree representation of the code.

2. Compilation: So, JS has a JIT Compilation, i.e. a Just In Time
Compliation.

Interpretter - In this the code is executed line by line, and if there
is an error, it will stop. But, code is fast and inefficient.

Compiler - The code is compiled first and a new optimized version of the
code is generated, which is then executed. So, if there is an error,
it will be thrown. But, code is slow, and efficient.

Now, JS is kinda both, interpretter and compiler language. So, JIT means
it uses both the interpretter and compiler.

Now, the AST goes to the interpretter, and it converts in into bytecode and
sends it to the execution phase. And while the code is being interpretted,
it is also being compiled in the background, and an optimized version of
the code is generated, which is then executed.

And JS can't do this both, without the help of Memory Heap and
Call Stack. Memory Heap is the place where all the variables and
functions are assigned memory.

We also have a garbage collector, which is responsible for freeing up
the memory that is no longer being used. It uses a Mark & Sweep Algorithm.

Thecompiler optimizes the code by doing inlining, copy elision, inline
caching, etc.

3. Execution: So, the code is executed in the execution phase, and the
result is returned.

*/