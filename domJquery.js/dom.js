-------------------THE DOM---------------------
the DOM: Document Object Model
our HTML page is turned into a document, which is structured like a js object.
the page has properties and methods, which are keys and values.
we can manipulate and change the properties and methods. This allows us to add some interactivity to our page.

when you are in your console log you can type in document. Then scroll down and see what all you can do.




DOM MANIPULATION
- the HTML Dom model is a tree of objects.
- Dom, jQuery, React, etc. do this.

examples...
document.getElementById("demo").innerHTML = "Hello World!";
//The most common way to access an HTML element is to use the id of the element.
//innerHTML property is useful for getting or replacing the content of HTML elements.
//


Finding HTML Elements (methods)
document.getElementById(id)	Find an element by element id
document.getElementsByTagName(name)	Find elements by tag name
document.getElementsByClassName(name)	Find elements by class name

Changing HTML Elements (methods)
element.innerHTML =  new html content	Change the inner HTML of an element
element.attribute = new value	Change the attribute value of an HTML element
element.setAttribute(attribute, value)	Change the attribute value of an HTML element
element.style.property = new style	Change the style of an HTML element

Adding and Deleting Elements (methods)
document.createElement(element)	Create an HTML element
document.removeChild(element)	Remove an HTML element
document.appendChild(element)	Add an HTML element
document.replaceChild(element)	Replace an HTML element
document.write(text)


EVENT HANDLER
document.getElementById(id).onclick = function(){code}

FINDING HTML OBJECTS
https://www.w3schools.com/js/js_htmldom_document.asp


The following HTML objects (and object collections) are also accessible:
document.anchors
document.body
document.documentElement
document.embeds
document.forms
document.head
document.images
document.links
document.scripts
document.title

CHANGING THINGS


1. To change the text of an HTML attribute, use this syntax:
document.getElementById(id).innerHTML = new HTML //innerHTML is easiest way.


2. To change the value of an HTML attribute, use this syntax:
document.getElementById(id).attribute = new value

3. To change the style: https:
document.getElementById("p2").style.color = "blue";

//www.w3schools.com/js/js_htmldom_css.asp
