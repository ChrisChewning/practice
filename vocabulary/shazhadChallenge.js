HTML

Tags - <a href=""/>
tables -
id -
class -
charset -
form validation


CSS

css tricks -
z index -
flexbox -
margins -
ems -
animations -
css grids  -
media queries -



Why accessibility is important?


Difference between semantics and syntax? Syntax is the structure of the language. Semantics is your codes meaning.


JAVASCRIPT

____________________________________________________________________________

VARIABLES
1. const - const doesn't change. use this the most.
2. let - let does change. example: math, scores, etc.
3. var - var will just go ahead and declare the variable, which can cause a lot of bugs, because you might accidentally use the same variable twice.

____________________________________________________________________________

FUNCTIONS: WHY THE ARROW FUNCTION
1. shorter syntax
2. no binding of the keyword 'this'
//function rules
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

JAVASCRIPT EDITIONS
ES 5, 6, 7, 8 are all javascript editions. (es5: 2009; es8: 2017)

____________________________________________________________________________

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


            - anonymous vs named functions and variables
            - stack trace


LOOPS (all 3 or 4 types)

            - for loop & for each
            - nested loops

____________________________________________________________________________

            - array methods
            - object methods
            - string methods (all on MDN)

____________________________________________________________________________

            - scope
            - conditionals (if else)
            - Events

            - this (https://codeburst.io/javascript-the-keyword-this-for-beginners-fb5238d99f85)
            - return
            - DOM Manipulation
            - Higher order functions (map, filter, reduce etc..)
            - constructors v classes
            - prototype chain
            - algorithms
            - Third Party Libraries and Frame works
                - jQuery
                - bootstrap
                - materialize

____________________________________________________________________________

Difference between Object Oriented Programming and Functional Programming

____________________________________________________________________________

Wire-framing
User Stories
ReadMe formatting

____________________________________________________________________________

Git/Github - clone v fork - Why is it useful? Why could it be dangerous?
     - Branching
    - Pull requests

____________________________________________________________________________

NODE STUFF
module.exports
HTTP Server

MVC (Models Views Controllers)***
Models vs Schema


request, response (what is happening here?)
req.body v req.params.id

____________________________________________________________________________

CRUD - Create Read Update Delete

When we are building APIs, we want our models to provide four basic types of functionality. The model must be able to Create, Read, Update, and Delete resources. Computer scientists often refer to these functions by the acronym CRUD. A model should have the ability to perform at most these four functions in order to be complete. If an action cannot be described by one of these four operations, then it should potentially be a model of its own.



EJS Templates
Server app.listen
app.use

SQL v NoSQL Databases

____________________________________________________________________________

ASYNC AND AWAIT

Async & Await (a better way to do promises)
* asynch is a function. This is for asynchronous functions when one function awaits another one. Async can be used without await. "When you create a function with the async keyword that function will always return a Promise. When you return inside your async function it wraps your value in a Promise."

* await is a keyword that can only be used inside await.
Await lets you pause the execution of an async function until it receives the results of a promise. This lets you write async code that reads in the order that it’s executed.

*Await allows you to write asynchronous code with no callbacks at all. This makes your code much more readable. And await works with any promise, not just promises created by async functions.
