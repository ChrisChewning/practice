When you are defining a function the input is anything you put into the function, is called a parameter. An argument is when you invoke the function.

A method is different. That is something you can do to an array or string, etc.



____________________________________________________________________________

DESTRUCTURING
easily extract array elements or object properties and store them in variables.

Array destructuring ex:

[a,b] = ['Hello', 'Max']
console.log(a); //Hello
console.log(b); //Max


Object destructuring ex:
{name} = {name: 'Max', age: 28}
console.log(name); //Max. this is b.c name on the left side targets name on the right side and pulls out the value.
console.log(age); //undefined

____________________________________________________________________________

PRIMITIVE TYPES

In JavaScript there are two different kinds of data: primitives, and objects. A primitive is simply a data type that is not an object, and has no methods.

In JS, there are six primitive data types:

Boolean
Number
String
Null
Undefined
Symbol



OBJECTS 
Objects are not a primitive data Type.

An object is a collection of properties. These properties are stored in key/value pairs. Properties can reference any type of data, including objects and/or primitive values.
