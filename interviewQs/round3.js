QUESTION 1: What is asynchronous code and how do Javascript developers use it?

definition: Asynchronous programming is a means of parallel programming in which a unit of work runs separately from the main application thread and notifies the calling thread of its completion, failure or progress.

note: Synchronous program execution is somewhat similar to the above. Your program is executed line by line, one line at a time. Each time a function is called, program execution waits until that function returns before continuing to the next line of code.

link: https://visualstudiomagazine.com/articles/2011/03/24/wccsp_asynchronous-programming.aspx https://dev.to/siwalik/async-programming-basics-every-js-developer-should-know-in-2018-a9c


Examples...

1. CALLBACK
$("body").click(function() { //the click parameter is a callback fn.
    alert(`clicked on body`);
});

2. PROMISE
// This is how a sample promise declaration looks like. The promise constructor
// takes one argument which is a callback with two parameters, `resolve` and
// `reject`. Do something within the callback, then call resolve if everything
// worked, otherwise call reject.

var promise = new Promise(function(resolve, reject) {
  // do a thing or twenty
  if (/* everything turned out fine */) {
    resolve("Stuff worked!");
  }
  else {
    reject(Error("It broke"));
  }
});


3. ASYNC AWAIT

Async- await is being supported in javascript since ECMA2017. They allow you to write promise-based code as if it were synchronous code, but without blocking the main thread. They make your asynchronous code less "clever" and more readable.

To be honest, async-awaits are nothing but syntactic sugar on top of promises but it makes asynchronous code look and behave a little more like synchronous code, that's precisely where it's power lies.


4. .THEN



QUESTION 2: * What is an MVC app and why would we use this pattern?

Model = All the data-related logic the user works with. Can be data transferred from View and Controller components or any other business-logic related data.

View = UI logic, like text boxes, dropdowns, etc.

Controller = All the business logic and incoming requests, manipulate data using the Model component and interact with the Views to render the final output.

How it plays out:

A customer requests something, which is queried from the database. If needed, it is manipulated and updated but it is rendered out.





link: https://www.tutorialspoint.com/mvc_framework/mvc_framework_introduction.htm
