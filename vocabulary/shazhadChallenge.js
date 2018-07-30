
ACCESSIBILITY
Accessibility is important for...
- disabilities. ex: alt in imgs for screen readers
- different screen sizes.
- attention spans.

____________________________________________________________________________

SEMANTICS & SYNTAX
Difference between semantics and syntax? Syntax is the structure of the language. Semantics is your codes meaning.



JAVASCRIPT
__________

JAVASCRIPT EDITIONS
ES 5, 6, 7, 8 are all javascript editions. (es5: 2009; es8: 2017)

____________________________________________________________________________


VARIABLES
1. const - const doesn't change. use this the most.
2. let - let does change. example: math, scores, etc.
3. var - var will just go ahead and declare the variable, which can cause a lot of bugs, because you might accidentally use the same variable twice.

____________________________________________________________________________

FUNCTIONS: WHY THE ARROW FUNCTION
1. shorter syntax
2. no binding of the keyword 'this'

function rules
1. name contains a verb b.c they do something
2. they get or set (assign a value) data.
3. check data
4. print data


ex1: var feedTheCat = (cat) => {
  if (cat === 'hungry') {
    return 'Feed the cat';
  } else {
    return 'Do not feed the cat';
  }
}

ex2: var addValues = (x, y) => {
  return x + y
}


ARROW FUNCTIONS: WHEN NOT TO USE

1. Object Methods
var cat = {
  lives: 9,
  jumps: () => {
    this.lives--;
  }
}

2. Callbacks
var button = document.getElementById('press');
button.addEventListener('click', () => {
  this.classList.toggle('on');
});

____________________________________________________________________________

CONSOLE LOG()
A debugger, or 'sandbox' to test your code.

____________________________________________________________________________

DATA TYPES
1. Boolean = true/false.
2. Null = a variable that is defined to have a null value.

ex: var nullVariable = null; // null
typeof nullVariable // "object"

3. Undefined = isnt defined.
4. Number = number
5. String = "" ()
6. Symbol = ?? lets you add private-ish properties to data?
7. Object = everything in javascript.

____________________________________________________________________________

OPERATORS

NUMBERS & OPERATORS
operators: + - * / % (modulus) ++ --
++ (increment) or -- (decrement) could also more than just going up or down by one. You could say +2 or -3.

ASSIGNMENT OPERATORS
= (assign)
+= (addition assignment operator adds a value to a variable)
-=
*=
/=
%=
note: + or += can be used to concatentate.


COMPARISON OPERATORS
==	equal to value (loose equality). Performs type coercion. This means we compare two values after converting them to a common type.
===	equal value and equal type (strict equality)  ex 3 === '3' is false
!=	not equal
!==	not equal value or not equal type
>	greater than
<	less than
>=	greater than or equal to
<=	less than or equal to
?	ternary operator (usually used as a shortcut for if statements)

ternary ex: var func1 = function( .. ) {
  if (condition1) { return value1 }
  else { return value2 }
}

var func2 = function( .. ) {
  return condition1 ? value1 : value2
}


LOGICAL OPERATORS
&&	logical and
||	logical or
!	logical not


TYPE OPERATORS
typeof	Returns the type of a variable
instanceof	Returns true if an object is an instance of an object type

____________________________________________________________________________

TRUTHY/FALSY (link: https://codeburst.io/javascript-showdown-vs-7be792be15b5)

FALSY VALUES (6 OF THEM)
false  (false == 0 //true)
0 zero  (0 == "")//true
“” (empty string) ("" == false) //true
null (equal only to itself) //null == null is true
undefined (equal only to itself) //undefined == undefined is true. so is null == undefined.
NaN (Not A Number) //NaN isn’t equivalent to anything (not even itself!)

Whenever possible, you should use triple equals to test equality. By testing the type and the value, you are always executing a true equality test.

Type coercion can have some crazy rules involved (as I’ve shown above). Unless you’re very familiar with JavaScript, double equals can lead to more trouble and headaches than it’s worth. Knowing the six falsy values can go a long way to determining why something is evaluating to true or false.

____________________________________________________________________________
STACK TRACE


Node: Server-side Javascript.
Express: Framework that runs over Node.
React:
MongoDb: Where the data is stored.

MEAN stack: Node, Express, Angular, and MongoDb
MERN stack: Node, Express, React, MongodDb
____________________________________________________________________________

STRING METHODS (all on MDN)



ARRAY METHODS (https://javascript.info/array-methods)

Add/remove items
arr.push(...items) – adds items to the end,
arr.pop() – extracts an item from the end,
arr.shift() – extracts an item from the beginning,
arr.unshift(...items) – adds items to the beginning.
arr.splice()
arr.splice(start, end) - a swiss army knife for arrays. It can do everything: add, remove and insert elements.
arr.concat( , ) - joins the array with other arrays and/or items.




OBJECT METHODS
Here is an object:
let user = {
  name: "John",
  age: 30
};

Here is an object method:
user.sayHi = function() {
alert("Hello!");
};
user.sayHi(); // Hello!

Here is method shorthand:
let user = {
  sayHi() { // same as "sayHi: function()"
    alert("Hello");
  }
};


____________________________________________________________________________

THIS
(https://javascript.info/object-methods)
(https://codeburst.io/javascript-the-keyword-this-for-beginners-fb5238d99f85)

this is a keyword, used a lot of times to find information in objects.
The value of this is the object “before dot”, the one used to call the method.

example 1...
let user = { //user object
  name: "John", //key: value pair
  age: 30,

  sayHi() {  //object method
    alert(this.name); //refers to the object name.
  }

};
user.sayHi(); // John //instatiates the object (?)




example 2...
var myFunction = function () {
  console.log(this); // this = global, [object Window]
};
myFunction();

var myObject = {};
myObject.myMethod = function () {
  console.log(this); // this = Object { myObject }
};

var nav = document.querySelector('.nav'); // <nav class="nav">
var toggleNav = function () {
  console.log(this); // this = <nav> element
};
nav.addEventListener('click', toggleNav, false);




____________________________________________________________________________

SCOPE
JavaScript has two scopes – global and local. Any variable declared outside of a function belongs to the global scope, and is therefore accessible from anywhere in your code. Each function has its own scope, and any variable declared within that function is only accessible from that function and any nested functions.

lexical scope
Whenever you see a function within another function, the inner function has access to the scope in the outer function, this is called Lexical Scope or Closure - also referred to as Static Scope. The easiest way to demonstrate that again:

// Scope A
var myFunction = function () {
  // Scope B
  var name = 'Todd'; // defined in Scope B
  var myOtherFunction = function () {
    // Scope C: `name` is accessible here!
  };
};



____________________________________________________________________________

EVENTS
- HTML events are "things" that happen to HTML elements.
- When JavaScript is used in HTML pages, JavaScript can "react" on these events.

- Event handlers can be used to handle, and verify, user input, user actions, and browser actions:

* Things that should be done every time a page loads
* Things that should be done when the page is closed
* Action that should be performed when a user clicks a button
* Content that should be verified when a user inputs data

HTML event attributes can execute JavaScript code directly
HTML event attributes can call JavaScript functions
You can assign your own event handler functions to HTML elements
You can prevent events from being sent or being handled
And more ...


Common HTML Events

onchange:	An HTML element has been changed
onclick //when a user clicks something
onkeydown:	The user pushes a keyboard key
onload:	The browser has finished loading the page
onmouseover //when a user mouses over something
onmouseout //The user moves the mouse away from an HTML element
onfocus //when a user puts the cursor in a form field
onblur //When a user leaves a form field

example...
<button onclick="this.innerHTML = Date()">The time is?</button>


REAL WORLD EXAMPLE...

Timers
You can add events that have a time delay. For example, if you want a pop-up message to appear after the user has been on the page for 10 seconds, you can do this through the setTimeOut method.

For example, lets say you have a simple message:

function welcomeVisitor() {
alert("Welcome to the site");
}
However, you dont want this message to appear until the user has been on the page for a while. You delay the action through the setTimeOut function:

setTimeOut(welcomeVisitor,8000);
The setTimeOut function has two parameters. The first allows you to call a function (which we declared earlier), and the second refers to the timer. The function will not be called for 8000 milliseconds.

There are other timer functions, such as setInterval, that initiate the function at the interval you specify.



____________________________________________________________________________

RETURN
In JavaScript, return statements cease execution in a function and return a value to the caller; JavaScript functions require an explicit return statement for returning the result of an expression (the value) from a function. When a return statement is not present, the interpreter automatically returns undefined.

____________________________________________________________________________

FUNCTIONS

Functions are executed when they are called. This is known as invoking a function.

A Function Declaration defines a named function. To create a function declaration you use the function keyword followed by the name of the function. When using function declarations, the function definition is hoisted, thus allowing the function to be used before it is defined.


ANONYMOUS Function
Has no name, is not hoisted, and therefore cannot be used before they are defined..
let name = function(parameters){
  statements
}


PARAMETERS
Parameters are used when defining a function, they are the names created in the function definition. In fact, during a function definition, we can pass in up to 255 parameters! Parameters are separated by commas in the (). Here’s an example with two parameters — param1 & param2:

const param1 = true;
const param2 = false;
function twoParams(param1, param2){
  console.log(param1, param2);
}

ARGUMENTS
Arguments, on the other hand, are the values the function receives from each parameter when the function is executed (invoked). In the above example, our two arguments are true & false.


____________________________________________________________________________

HIGHER ORDER FUNCTIONS
(map, filter, reduce etc..)



____________________________________________________________________________


CALLBACKS
A callback function, also known as a higher-order function, is a function that is passed to another function as a parameter, and the callback function is called (or executed) inside the otherFunction.

Note that the item in the click method's parameter is a function, not a variable.

EXAMPLE 1: jQuery example
$("#btn_1").click(function() {  //pass a function as a parameter to the click method. the click method will call (execute) the callback function we passed to it.
  alert("Btn 1 Clicked");
});



EXAMPLE 2: Node example
const http = require('http');
var server = http.createServer(function (request, response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello World\n");
});
server.listen(4000);

^^^ Line 2, 3, 4: This function is a callback → We use the response variable that’s passed in to the callback to write the head and pass in the content type and we end that response with hello world. → This function returns an object that we are going to put in to our server variable and this object is going to have another function called “listen” →


____________________________________________________________________________

CLASS
- A class is like a blueprint — a description of the object to be created.
- class syntax allows usage of additional keywords such as extends and super for extending other classes

- When an object is created from a class, that object is said to be an instance of the class.

class Person {
constructor(name, age) {
this.name = name
this.age = age
   }
}


CONSTRUCTOR - An ordinary js function that has the logic needed to create a new object instead of regular program logic. It helps you mass produce objects.

Instances are typically instantiated via constructor functions with the `new` keyword.

//is this a constructor?
function Pet(name, species, hello){
    this.name = name;
    this.species = species;
    this.hello = hello;
    this.sayHello = function()
    {
        alert(this.hello);
    }
}

PROTOTYPE CHAIN

normally described as a chain going downwards, with null at the very top and the object we’re using at the bottom.

When performing a lookup, the engine will traverse up the chain looking for the property and return the first one it finds, or undefined if it’s not present in the prototype chain.


var obj = {};
obj.__proto__.testValue = 'Hello!';
console.log(obj); // -> {}
console.log(obj.testValue); // -> Hello!
This prototype chain is depicted below.

__proto__ === null
|
|
__proto__ === Object.prototype -> testValue: 'Hello!'
|
|
obj
When we log obj, we get an empty object because the property testValue isn’t present directly on the object. However, logging obj.testValue triggers a lookup. The engine goes up the prototype chain and finds testValue present on the object’s prototype and we see that value printing out.



JavaScript’s class inheritance uses the prototype chain.

____________________________________________________________________________


- Third Party Libraries and Frame works

- jquery
a cross-platform JavaScript library designed to simplify the client-side scripting of HTML. ... The modular approach to the jQuery library allows the creation of powerful dynamic web pages and Web applications.
It simplifies event handling, HTML document traversing, Ajax interactions and animation for speedy website development. jQuery simplifies the HTMLs client-side scripting, thus simplifying Web 2.0 applications development.


- bootstrap (https://getbootstrap.com/docs/3.3/css/)
Bootstrap is a free and open-source front-end framework (library) for designing websites and web applications. It contains HTML- and CSS-based design templates for typography, forms, buttons, navigation and other interface components, as well as optional JavaScript extensions.
Bootstrap is developed to be instantly compatible with all sizes of screens, so you dont have to worry about which device the user is accessing your site from. Yet if you prefer, you can disable responsiveness of Bootstrap.


- materialize (https://materializecss.com/getting-started.html)
Based on Googles material design. Ranked #8 best CSS framework on one site.
Has starter templates.

____________________________________________________________________________

OOP vs. FP


functional programming - The main aspects of Functional Programming is Pure and smaller Functions, Immutability and less Side Effects. Functional programming allows declarative pattern, which focuses on what the program should accomplish without specifying how the program should achieve the result.

var books = [
  {name:'JavaScript', pages:450},
  {name:'Angular', pages:902},
  {name:'Node', pages:732}
];
/* Imperative Pattern */
for (var i = 0; i < books.length; i++) {
  books[i].lastRead =  new Date();
}
/* Declarative Pattern */
books.map((book)=> {
  book.lastReadBy = 'me';
  return book;
});
console.log(books);

In functional programming...
- Its pure function is to provide confidence of not changing things outside of its scope.
- It reduces the complexity, need not to worry about how it is doing it, focus will be only on what it is doing.
- Ease of testing, because it does not depend on state of the application and result verification also will be easy.
- It makes the code more readable and easier to understand.


object oriented programming - Based on the concept of objects, which contains data(attributes) and procedures(methods). Significant object-oriented languages include C++, Java, PHP, C#, Python, Ruby, Swift etc.


____________________________________________________________________________

HTTP Server

"Web server" can refer to hardware or software, or both of them working together.

On the hardware side, a web server is a computer that stores web server software and a website's component files (e.g. HTML documents, images, CSS stylesheets, and JavaScript files). It is connected to the Internet and supports physical data interchange with other devices connected to the web.
On the software side, a web server includes several parts that control how web users access hosted files, at minimum an HTTP server. An HTTP server is a piece of software that understands URLs (web addresses) and HTTP (the protocol your browser uses to view webpages). It can be accessed through the domain names (like mozilla.org) of websites it stores, and delivers their content to the end-user's device.

At the most basic level, whenever a browser needs a file which is hosted on a web server, the browser requests the file via HTTP. When the request reaches the correct web server (hardware), the HTTP server (software) accepts request, finds the requested document (if it doesn't then a 404 response is returned), and sends it back to the browser, also through HTTP.

Basic representation of a client/server connection through HTTP

To publish a website, you need either a static or a dynamic web server.

A static web server, or stack, consists of a computer (hardware) with an HTTP server (software). We call it "static" because the server sends its hosted files "as-is" to your browser.

A dynamic web server consists of a static web server plus extra software, most commonly an application server and a database. We call it "dynamic" because the application server updates the hosted files before sending them to your browser via the HTTP server.

For example, to produce the final webpages you see in the browser, the application server might fill an HTML template with contents from a database. Sites like MDN or Wikipedia have many thousands of webpages, but they aren't real HTML documents, only a few HTML templates and a giant database. This setup makes it easier and quicker to maintain and deliver the content.

____________________________________________________________________________
MODELS v. SCHEMA
In mongoose, a schema represents the structure of a particular document, either completely or just a portion of the document. It's a way to express expected properties and values as well as constraints and indexes.

A model defines a programming interface for interacting with the database (read, insert, update, etc). So a schema answers "what will the data in this collection look like?" and a model provides functionality like "Are there any records matching this query?" or "Add a new document to the collection".


example...
const mongoose = require('mongoose');

const articleSchema = mongoose.Schema({  //this is the schema.
  title: String,
  body: String
});

const Article = mongoose.model('Article', articleSchema); //this whole thing (file?) is the model.

module.exports = Article;


____________________________________________________________________________

Schema
A Mongoose ‘schema’ is a document data structure (or shape of the document) that is enforced via the application layer.

Models
‘Models’ are higher-order constructors that take a schema and create an instance of a document equivalent to records in a relational database.

Documents - ‘Documents’ are equivalent to records or rows of data in SQL. While a SQL row can reference data in other tables, Mongo documents usually combine that in a document.

____________________________________________________________________________

REQ, RES
req is an object containing information about the HTTP request that raised the event. In response to req, you use res to send back the desired HTTP response.


REQ - HTTP(S) REQUEST OBJECT.
The request will be an object with properties like these (just to name a few):

request.url, which will be "/people.json" when this particular action is triggered

request.method, which will be "GET" in this case, hence the app.get() call.

An array of HTTP headers in request.headers, containing items like request.headers.accept, which you can use to determine what kind of browser made the request, what sort of responses it can handle, whether or not it is able to understand HTTP compression, etc.

An array of query string parameters if there were any, in request.params (e.g. /people.json?foo=bar would result in request.params.foo containing the string "bar").



RES - HTTP(S) RESPONSE OBJECT.
The response back to the client browser.
You can put new cookies value and that will write to the client browser (under cross domain rules)
Once you res.send() or res.redirect() or res.render(), you cann do it again, otherwise, there will be uncaught error.

____________________________________________________________________________

REQ.BODY
req.body properties come from a form post where the form data (which is submitted in the body contents) has been parsed into properties of the body tag. You want to get back what is on the body.

Contains key-value pairs of data submitted in the request body. By default, it is undefined, and is populated when you use body-parsing middleware such as body-parser and multer.



REQ.PARAMS
req.params comes from path segments of the URL that match a parameter in the route definition such a /song/:songid. So, with a route using that designation and a URL such as /song/48586, then req.params.songid === "48586".

This property is an object containing properties mapped to the named route “parameters”. For example, if you have the route /user/:name, then the “name” property is available as req.params.name. This object defaults to {}.



____________________________________________________________________________


NEXT
https://stormpath.com/blog/how-to-write-middleware-for-express-apps

var app = express();
app.use(function(req,res,next)){
    console.log("Request URL - "req.url);
    next();
}

The above code would be executed for each request that comes in and would log the request url, the next() method essentially allows the program to continue. If the next() function is not invoked, the program would not proceed further and would halt at the execution of the middleware.

____________________________________________________________________________

CRUD - Create Read Update Delete

When we are building APIs, we want our models to provide four basic types of functionality. The model must be able to Create, Read, Update, and Delete resources. Computer scientists often refer to these functions by the acronym CRUD. A model should have the ability to perform at most these four functions in order to be complete. If an action cannot be described by one of these four operations, then it should potentially be a model of its own.

C (post route)
R (get route)
U (put route)
D (delete route)

____________________________________________________________________________

ADDING CSS IN NODE
1. In your server.js (not controllers)...
app.use(express.static ’public’));
public is the folder you are keeping your stylesheet etc. in.

public: All the files you can access directly from your browser like static assets.

*keep your css like this:  public folder --> css folder --> styles.css

____________________________________________________________________________

EJS TEMPLATES
A simple templating language that lets you generate HTML markup with plain JavaScript. This is because the browser cant read it otherwise.

<%= EJS %> shows.
<% EJS %> doesnt show. (ex:  <% include ../partials/head %>)
<%# %> Comment tag, no execution, no output

to loop...
<h2>Loop</h2>
<ul>
    <% drinks.forEach(function(drink) { %>
        <li><%= drink.name %> - <%= drink.drunkness %></li>
    <% }); %>
</ul>


____________________________________________________________________________

SQL VS NoSQL DATABASES
SQL (Structured Query Language)
 - primarily called as Relational Databases (RDBMS). These are table-based databases. (ex: MySQL).
 - SQL uses structured query language (SQL) for defining and manipulating data.
- SQL requires that you use predefined schemas to determine the structure of your data before you work with it. A change in structure could be disruptive and it takes significant upfront, preparation.

NoSQL
 - primarily called as non-relational or distributed database. These are document based, key-value pairs, graph databases or wide-column stores. (ex: mongoDB)
 - You can create documents without having to first define their structure
Each document can have its own unique structure.
 - The syntax can vary from database to database, and you can add fields as you go
____________________________________________________________________________

ASYNC AND AWAIT

Async & Await (a better way to do promises)
* asynch is a function. This is for asynchronous functions when one function awaits another one. Async can be used without await. "When you create a function with the async keyword that function will always return a Promise. When you return inside your async function it wraps your value in a Promise."

* await is a keyword that can only be used inside await.
Await lets you pause the execution of an async function until it receives the results of a promise. This lets you write async code that reads in the order that it’s executed.

*Await allows you to write asynchronous code with no callbacks at all. This makes your code much more readable. And await works with any promise, not just promises created by async functions.


____________________________________________________________________________
BLOCKING & NON-BLOCKING CODE
https://www.tutorialspoint.com/nodejs/nodejs_callbacks_concept.htm

-Blocking methods execute synchronously and non-blocking methods execute asynchronously. (see below for more details). Since node is event-driven you will have non-blocking methods.

-Event Driven Programming (https:medium.com/@LindaVivah/the-beginners-guide-understanding-node-js-express-js-fundamentals-e15493462be1)

is a computer programming paradigm in which control flow of the program is determined by the occurrence of events. These events are monitored by code known as an event listener that, if it detects that its assigned event has occurred, runs an event “handler”, typically a callback function or method. This handler deals with the event by responding to it with program code.

If you look back at the server function, the response only runs once we get a request — that’s event driven programming:

....
var server = http.createServer(function (request, response) {
....
It doesn’t just happen automatically. There is a process that happens and you have to wait for that.
