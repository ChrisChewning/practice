
1. What is a class?

class = Classes are in fact "special functions." Is hoisted. Classes take a capital letter. You first need to declare your class and then access it, otherwise code like the following will throw a ReferenceError:

const p = new Rectangle(); // ReferenceError
class Rectangle {}



2. prototype = All JavaScript objects inherit properties and methods from a prototype.

The prototype property allows you to add new properties and methods to existing object types.

Note: Prototype is a global property which is available with almost all JavaScript objects.


3. object oriented vs functional programming = https:

//medium.com/@sho.miyata.1/the-object-oriented-programming-vs-functional-programming-debate-in-a-beginner-friendly-nutshell-24fb6f8625cc


4. difference between undefined and not defined =
In JavaScript if you try to use a variable that doesn't exist and has not been declared, then JavaScript will throw an error "var name is not defined" and the script will stop execute thereafter.


A variable can be declared but not defined. This is undefined.
var x; // Declaration
typeof x === 'undefined'; // Will return true


5. what are character encodings?

UTF-8 is the most widely used way to represent Unicode text in web pages, and you should always use UTF-8 when creating your web pages and databases. But, in principle, UTF-8 is only one of the possible ways of encoding Unicode characters. In other words, a single code point in the Unicode character set can actually be mapped to different byte sequences, depending on which encoding was used for the document. Unicode code points could be mapped to bytes using any one of the encodings called UTF-8, UTF-16 or UTF-32. The Devanagari character क, with code point 2325 (which is 915 in hexadecimal notation), will be represented by two bytes when using the UTF-16 encoding (09 15), three bytes with UTF-8 (E0 A4 95), or four bytes with UTF-32 (00 00 09 15).


6. REST Framework
A RESTful API is an application program interface (API) that uses HTTP requests to GET, PUT, POST and DELETE data.

A RESTful API -- also referred to as a RESTful web service -- is based on representational state transfer (REST) technology, an architectural style and approach to communications often used in web services development.

A RESTful API is a method of allowing communication between a web-based client and server that employs representational state transfer (REST) constraints.


7. API
An API for a website is code that allows two software programs to communicate with each another. The API spells out the proper way for a developer to write a program requesting services from an operating system or other application.


8. Django vs. Express
When I pick Django it’s because I value development speed, DRY, less code.
