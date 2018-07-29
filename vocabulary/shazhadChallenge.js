
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


            - stack trace (understand which stack youre using and how it works = how they interact each other)

____________________________________________________________________________

STRING METHODS (all on MDN)



ARRAY METHODS



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
this is a keyword, used a lot of times to find information in objects.
The value of this is the object “before dot”, the one used to call the method.


let user = { //user object
  name: "John", //key: value pair
  age: 30,

  sayHi() {  //object method
    alert(this.name); //refers to the object name.
  }

};

user.sayHi(); // John //instatiates the object (?)



            - scope
            - conditionals (if else), switch
            - Events

            - this (https://codeburst.io/javascript-the-keyword-this-for-beginners-fb5238d99f85)

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


CALLBACKS
A callback function, also known as a higher-order function, is a function that is passed to another function (let's call this other function “otherFunction”) as a parameter, and the callback function is called (or executed) inside the otherFunction.

Note that the item in the click method's parameter is a function, not a variable.

EXAMPLE 1:
$("#btn_1").click(function() {  //pass a function as a parameter to the click method. the click method will call (execute) the callback function we passed to it.
  alert("Btn 1 Clicked");
});

EXAMPLE 2:




            - constructors v classes
            - prototype chain
            - algorithms


____________________________________________________________________________


- Third Party Libraries and Frame works

- jquery
a cross-platform JavaScript library designed to simplify the client-side scripting of HTML. ... The modular approach to the jQuery library allows the creation of powerful dynamic web pages and Web applications.
It simplifies event handling, HTML document traversing, Ajax interactions and animation for speedy website development. jQuery simplifies the HTML's client-side scripting, thus simplifying Web 2.0 applications development.


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

NODE STUFF

____________________________________________________________________________

HTTP Server

MVC (Models Views Controllers)***
Models vs Schema
Documents


request, response (what is happening here?)
req.body v req.params.id

next -

callbacks -
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
