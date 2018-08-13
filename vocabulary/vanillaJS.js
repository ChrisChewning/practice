

PARAMETERS V. ARGUMENTS
When you are defining a function the input is anything you put into the function, is called a parameter. An argument is when you invoke the function.

A method is different. That is something you can do to an array or string, etc.




OBJECT
A collection of properties and actions.
So basically the idea is to describe real things in code with properties (called object properties) and actions (called methods).

If we want to model a cat, we will create an object Cat that has some properties such as color, age, mood (like good, bad, or sleepy ;)), and owner (which could be assigned a Person object – or maybe, in case of a stray cat, this property could be empty).

Then the Cat has some actions: purr, scratch, or feed (in which case, we will give the cat some CatFood, which could be a separate object with properties, like taste).

Cat
--------
color
age
mood
owner
purr()
scratch()
feed(cat_food)


MODEL
A model is a special kind of object – it is saved in the database.
A database is a collection of data. This is a place in which you will store information about users, your blog posts, etc.

You can think of a model in the database as a spreadsheet with columns (fields) and rows (data).


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
