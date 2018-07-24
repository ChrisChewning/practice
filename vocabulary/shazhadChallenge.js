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

variables - (const and let and var): const doesn't change, while let does. var will just go ahead and declare the variable, which can cause a lot of bugs, because you might accidentally use the same variable twice.

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



CONSOLE LOG()
A debugger, or 'sandbox' to test your code.


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


JAVASCRIPT EDITIONS
ES 5, 6, 7, 8 are all javascript editions. (es5: 2009; es8: 2017)



NUMBERS & OPERATORS
operators: + - * / % (modulus) ++ -- (++ or -- could also +2 -3 etc.)

ASSIGNMENT operators
= (assign)
+= (addition assignment operator adds a value to a variable)
-=
*=
/=
%=
note: + or += can be used to concatentate.


COMPARISON OPERATORS
==	equal to
===	equal value and equal type
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




            - anonymous vs named functions and variables
            - stack trace
            - truthy/falsy
            - for loop & for each
            - nested loops
            - array methods
            - object methods
            - string methods (all on MDN)
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

Difference between Object Oriented Programming and Functional Programming

Wire-framing
User Stories


Git/Github - clone v fork - Why is it useful? Why could it be dangerous?
     - Branching
    - Pull requests

Node Package Manager (npm) - the 'largest ecosystem of open source libraries in the world.'

npm start vs nodemon

npm init

package.json
module.exports
HTTP Server
Node JS
Express JS
MVC (Models Views Controllers)***
Models vs Schema
RESTful (GET POST PUT DELETE) Routes
request, response (what is happening here?)
req.body v req.params.id

CRUD

EJS Templates
Server app.listen
app.use
Middleware
    body-parser
    method-override
SQL v NoSQL Databases

MongoDB

Mongod

Mongoose js
    - basic mongoose methods (find, findById, create etc..)

Async & Await (a better way to do promises)
async - this is for asynchronous functions, which is when one function awaits another one.


bcrypt -

Sessions -

Sessions Secret - The secret is used to hash the session with HMAC. The session is then protected against session hijacking by checking the fingerprint against the hash with the secret. Withouth the string, access to the session will be denied.





Password Hash
Salt in password hash
how to connect css to express app?
Types of errors you have commonly seen. And their possible solutions.
