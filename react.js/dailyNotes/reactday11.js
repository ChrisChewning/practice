webpack bundles multiple JavaScript files into one file for the browser.

Babel will convert ES6 (ES2015) code to ES5, since most browsers don't yet understand all of ES6. As this article ages, browsers will support ES6 and Babel may not be needed.


*Core idea:


1. to render a list use the js map operator.
map is used to render an array of whatever data you have (json, js objects, etc.). You want to change them to jsx elements and render them to the screeen.

Use two arguments.

ex:  {this.state.persons.map(( person, index) => { //person of persons is the element. index is the index of person.

})}


2. ternary expressions are great. A better approach is to create variables and use if statements. IF YOU WANT TO return something conditionally, put that in your render section above your return.

3. to remove an element, best practice is to attach an id to the object in your state. Then set a key equal to that id so you have a unique identifier.



.MAP is a really important use for when you have an array of JS OBJECTS.
