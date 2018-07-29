// -------------------jQuery---------------------
jQuery: a library that helps with manipulating the DOM
1. it makes selecting and manipulating the DOM easier, faster, and more fun.
2. It is not a framework. it is a library = just a collection of reusable methods to serve some purpose. A framework has an implied design pattern.

3. LINK to get jquery. cdnjs.com

<head>
  <meta charset="utf-8">
  <title></title>
  <link rel="stylesheet" href="style.css">
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.js">
</head>

//
4. CDN = Content Delivery Network. It send packages of code to use that we can use in our application.
//

____________________________________________________________________________

BASIC JQUERY SELECTION SYNTAX
selections - grabbing an element off the DOM.

You could select anything...
$('h2') would select all the h2 elements on the page.
$('.barry') would select all the elements with a class name of barry.
$('#mel') would select the element with the id name mel.


Step 1: use the dollar sign.
Step 2: in a string put what you want to grab.

____________________________________________________________________________

SELECTING AN ELEMENT IN JQUERY

// This is the basic syntax for jQuery selections
$(' ')

// To select a particular element by tag, you do
$('h2') // selects all h2 elements

// To select by ID, you use the same syntax as CSS selectors
$('#someID') // Would select the element with ID="someID"

// To select all elements of a particular class, use CSS syntax again
$('.someClass') // Selects all elements of the class "someClass"

// This is easier to type and read than:
document.getElementByClassName('someClass');

// And you can use more complicated CSS selectors as well
$('p.anotherClass') // Selects all <p> tags that also have the class "anotherClass" (<p class="anotherClass")



____________________________________________________________________________
CHANGING AN ELEMENT


//STEP 1: GET THE H2 ON THE PAGE.
const $h2 = $('h2');
console.log($h2, ' this is h2');

//STEP 2: EDIT THE ELEMENT H2 ON THE PAGE.
$h2.text('Im changing the text that previously said H2..Im and h2');


//YOU COULD CREATE AN LI ELEMENT. DOESNT GET ON THE DOM

// const $li = $('<li>banana</li>');
// const $li = $('howdy<li/>') is shorthand for the above.

// //ADD A NEW FRUIT TO THE DOM NAMED ORANGE
const $li = $('<li/>'); //create a list node.
$li.text('orange'); //name the list node orange.
$ul = $('ul');  //grabs the unordered list ul.

APPEND, PREPEND, DETACH

append = end of list.
prepend = beginning of list
detach = takes it off the list.

$ul.append($li);
$ul.append('<li>Grape2</li>'); //creates a Grape2 in the list
$ul.append('<li>Lemons</li>') //added lemons to the end.
$ul.prepend('<li>Kiwi</li>') //added kiwi to the beginning.
$ul.detach('<li>Grape2</li>') //this detached <the h2 Howdy Neighbor and nothing else.>
$h2.detach(); //detaches both h2s
$h2.append('<h2>HOWDY NEIGHBOR</h2>')
//

____________________________________________________________________________

CHANGING STYLES
//-------------change the background color------------.
$('body').css('background-color', 'red');
//selects body. grabs css. goes to the key, changes the value.

//------------randomly change a background color---------------
$(document).ready(function() {
  $("body").css("background-color", "hsla(" + Math.floor(Math.random() * (360)) + ", 75%, 58%, 1)");
});

//hsla: hue, saturation, lightness, alpha.
//*alpha: The alpha parameter is a number between 0.0 (fully transparent) and 1.0 (fully opaque).
//
//
// // https://api.jquery.com/ has all the jQuery methods.
// //selecting - selects, of course.
// //traversing - going through the DOM to find something.
//
// //ex: fadeIn() or fadeOut() or fadeTo() <-- fades to a certain opacity level.
//
//
// //NAMING jQuery VARIABLES:
// // it is common to put a dollar sign in fron of the variable to indicate it is a DOM element.
//
// //parents contain hmtl tags inside of them.
// //children are inside of an html tag.
// //siblings are html tags that are next to each other.


____________________________________________________________________________

EVENT LISTENERS

 SET UP A CLICK EVENT.
1. an element to set it on
2. then we need the listener for whatever we are listening (click, onKeyPress)
3. we need a handler, which is a function to executre when we hear something.

const $btn = $('#btn'); //step 1: grabs the button.



we created 2 callback functions below. They both do not have a name. the function gets called when the click happens. we don't call the function ourselves from our js file.

//FUNCTION 1: this one logs 'hi' when you click the button. it has an event listener to it.
$btn.on('click', (event) =>  {    //step 2: set up the listener with a function.
  //on this click listener, run this function
  console.log('hi');
  $('body').append('<span>Helllloooooo</span>'); //this part appends the word Helllloooo to the body when you click the button.
});


const addText = () => {  //This function adds text to the p tag.
  //we want to add a p tag with text to the body.
  const $p = $('<p>');  //step 1: create a p tag.
    $p.text('Im reall boyyyy');
    $('body').append($p);
}

If you are putting a named function as the handler.
you don't call it/invoke it.



```Make a seperate button and attach an event listener to it that listens for a click and changes the background color of the page when clicked```
const  $btn2 = $('#btn2');

$btn2.on('click', (event) => {
  console.log('hello');
  $('body').css('background-color', 'red');
});


TOGGLE CLASS METHOD.
lets toggle the background color of the page using .toggleClass


const $btn3 = $('#btn3');

$btn3.on('click', (event) => {
  $('body').toggleClass('addColor'); //.toggleClass toggles the body element. Body element does not have this new color attached to it. So not when you click the button for toggleClass it attaches the class to it. Then you click it again and it takes it off. Like an on/off switch.
});


```Make it so that when you click on a button, an image will toggle on and off the page. There is no toggleImage method so you'll have to do it programmatically. Click once = message appears. Click again = message disappears. Click again = message reappears, etc. Hint:, you can use a global variable boolean and toggle it upon click.```



const $btn4 = $('#btn4');

let imageToggle = false;  //creates a boolean. needs let b.c you will change the value of the variable. this is why you can't use const.

$btn4.on('click', (event) => {
    console.log(event)  //logs the event
    if(imageToggle === false){  //if you toggle and it hits false this will happen.
        $('body').css('background-image', 'url("https://i.imgur.com/CPwmfc5.jpg")');
        imageToggle = true;
    } else {
        $('body').css('background-image', 'none');
        imageToggle = false;
    }
})


const $square = $('#square'); //you can add a click listener to any element, not just buttons.

$square.on('mouseenter', (event) => {
  $(square).css('background-color', 'blue');
});

//this one doesnt work. it should put it as yellow once your mouse leaves.
$square.on('mouseleave', (event) => {
  $(square).css('background-color', 'yellow');
});

event could be called anything. Most likely youll see e online, which is shorthand for event.




----------------------------PM LAB---------------------------------------
In the following exercises you will play with five of the most common DOM events in jQuery:

ready
submit
change
click
keypress

1. get the page to say "Go!" without touching the html


//TIMBO WAY
const $body = $('body'); //you grab the body.
const loaded = () => { //you create a function called loaded
  console.log('hi'); //just for checking that the function works.
  $('body').append('<p>Go!</p>') //you append the word Go! to the body in a p tag.
}
$body.ready(loaded);

//JIMBO WAY, with a little bit shorthand
const $body = $('body'); //gets the body.
$body.ready( (e) => { //e is shorthand for event.
  // console.log(this); //testing. this would log out the window object.
  console.log('testing'); //testing that it works.
  const $p = $('<p/>') //makes the p element into a variable but it's empty.
  $p.text('Loaded'); //this puts the text inside the p element.
  $body.append($p); //not in '' b.c p became a variable.
});
