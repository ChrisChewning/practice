
// ==============================
//       Dramatis Personae
// ==============================

const hobbits = [
  "Frodo Baggins",
  "Samwise 'Sam' Gamgee",
  "Meriadoc 'Merry' Brandybuck",
  "Peregrin 'Pippin' Took"
];

const buddies = [
  "Gandalf the Grey",
  "Legolas",
  "Gimli",
  "Strider",
  "Boromir"
];

const baddies = [
  "Sauron",
  "Saruman",
  "The Uruk-hai",
  "Orcs"
];

const lands = [
  "The-Shire",
  "Rivendell",
  "Mordor"
];

// ====================================
//           Chapters
// ====================================

// ============
// Chapter 1
// ============
const makeMiddleEarth = () => {  //function to make middle earth, with an empty parameter.

  console.log("Trying to make middle earth."); //test to see if the function is working.



const $section = $('<section id="middle-earth">'); // 1. create a section tag with an id of middle-earth
$('body').append($section); // 2. append the section to the body of the DOM.


  for(let i=0; i<lands.length;i++){ //loops over 'The-Shire', 'Rivendale', and 'Mordor'

    //ARTICLES
    const $article = $('<article/>'); //creates an article tag for 'The-Shire', 'Rivendell', and 'Mordor'. 3 total.
    $article.attr('id', lands[i]); //takes the attribute id from each lands. now 'The-Shire' has the id The-Shire, etc.

    //H1s
    const $h1 = $('<h1/>'); //creates an h1
    $h1.text(lands[i]); //puts each of the lands names in the h1.

    //APPEND THINGS
    $($section).append($article); //append section to the article.
    $article.append($h1); //append each h1 to the article.
}
};
makeMiddleEarth();
  // 3. use a for loop to iterate over the lands array that does the following:
  //   3a. creates an article tag (there should be one for each land when the loop is done)
  //   3b. gives each land article an `id` tag of the corresponding land name
  //   3c. includes an h1 with the name of the land inside each land article
  //   3d. appends each land to the middle-earth section


// ============
// Chapter 2
// ============

const $ul = $('<ul/>') //create an unordered list.

const makeHobbits = () => {
  for (let i = 0; i < hobbits.length; i++) {
  const $li = $('<li/>').text(hobbits[i]); //makes an li for each loop. with the text hobbits[i] so only one gets printed out per loop.
  $li.attr('class', 'hobbit'); //atrr adds an attribute of class to every hobbit.
  $($ul).append($li); //Select ul with the $ sign. $selects  then $ul gets selected. important: use two $ signs.
  //(1st $ sign selects. the 2nd is part of the variable. append the list to the ul
  $('#The-Shire').append($ul); //displays the unordered list of the hobbits to the shire section on your page. Remember you choose first what you want to append to. Then you decide what you want to append.

//didn't work..
  // const $li = <li class="hobbit"</li>
  // $('.hobbit:eq(0)').append($div);
  console.log('Make hobbits');
}
};
makeHobbits();
//

  // 1. display an unordered list of the hobbits in the shire.
  // 2. give each hobbit a class of "hobbit"
  // hint: create a 'ul' outside the loop upon which to append the 'li's
  // hint: get 'The-Shire' by using its id

// COMMIT YOUR WORK
// The commit message should read: "Chapter 2 complete - Made the Hobbits".

// ============
// Chapter 3
// ============


const keepItSecretKeepItSafe = () => {
  const $div = $('<div id="the-ring"></div>'); //empty div with id 'the-ring'
  $('.hobbit:eq(0)').append($div); //don't need quotes b.c it's a variable.
  //look in the class hobbit (which you gave each hobbit in step 2).
  //select the 1st hobbit. hobbit: eq(0). a
  //append the div variable you created with the id "the-ring"
};
keepItSecretKeepItSafe(); //have to call it for it to work.

 // 1. create an empty div with an id of 'the-ring'
 // 2. add the ring as a child of Frodo
 // hint: Frodo does not have an id, but there is a command to retrieve all elements with a certain class. This should give you an array for you to access . . .

 // when you think you have given Frodo the ring, check in your Elements tab
 //you have to press the button for it to work. why though?

// ============
// Chapter 4
// ============

const makeBaddies = () => {

  const $ulBaddies = $('<ul>').appendTo($('#Mordor'));

  for (let i = 0; i < baddies.length; i++){
  $('<li>').addClass('baddy').text(baddies[i]).appendTo($ulBaddies);
}
};
makeBaddies();


// COMMIT YOUR WORK
// The commit message should read: "Chapter 4 complete - Made the Baddies"..

// ============
// Chapter 5
// ============
const makeBuddies = () => {

  // 1. create an aside tag and append it to middle-earth below mordor

  const $aside = $('<aside>').appendTo($('#middle-earth')); //append aside to middle-earth
  const $ulBuddies = $('<ul>').appendTo($('aside')); //append a ul to aside. it'll show up on middle-earth
  for (let i = 0; i < buddies.length; i++) { //loop through buddies.
    console.log('hi');
    $('<li>').addClass('buddy').text(buddies[i]).appendTo($aside); //add a list for each item in buddies, give it a class 'buddy', and append it to aside.
  }

  // 2. display an unordered list of buddies in the aside
  // 3. give each of the buddies a class of "buddy"
};
makeBuddies();

//Chapter 5 complete - Made //the Buddies".

// COMMIT YOUR WORK
// The commit message should read: "Chapter 5 complete - Made the Buddies".

// ============
// Chapter 6
// ============
const leaveTheShire = () => {
 //  const $hobbitsLi = $('.hobbits').detach();
 //   $hobbitsLi.appendTo('#Rivendell');
 // };
  $('li.hobbit').appendTo("#Rivendell");
  // 1. grab the hobbits (the ul in which they reside) and move them to Rivendell

  // hint: the hobbits ul is a childNode of The-Shire-- there is way to get a list of childNodes

};
leaveTheShire();

// COMMIT YOUR WORK
// The commit message should read: "Chapter 6 complete - Left the Shire"

// ============
// Chapter 7
// ============
const beautifulStranger = () => {
  $('li.buddy:eq(3)').text('Aragorn');
//li.buddy does work.
//aside.li.buddy does not work.
//aside.buddy does not. you're skipping the child-node so it can't read it.
};
beautifulStranger();
// COMMIT YOUR WORK
// The commit message should read: "Chapter 7 complete - Strider is changed to Aragorn"

// ============
// Chapter 8
// ============
  const forgeTheFellowShip = () => {
  const $div = $('<div id=\'the-fellowship\'>').append($('<h1>').text('The Fellowship')).appendTo('#middle-earth');

  $('li.buddy').appendTo('#the-fellowship');
  $('li.hobbit').appendTo('#the-fellowship');

  //added them but now they're not in the other ones.
    // console.log(beautifulStranger());

// $table.append($('<tr>').append($('<td>').text('Monday')).append($('<td>').text('Herbology')));
  // 1. create a new div with an id 'the-fellowship'
  // 2. add an h1 with the text 'The Fellowship' to this new div
  // 3. append the fellowship to middle-earth
  // 4. add the unordered lists of hobbits and buddies to 'the-fellowship'

};
forgeTheFellowShip();

// COMMIT YOUR WORK
// The commit message should read: "Chapter 8 complete - The Fellowship is created"

// ============
// Chapter 9
// ============
const theBalrog = () => {
  $('.buddy:eq(0)').text('Gandalf the White').addClass('the-white');
};
theBalrog();
// COMMIT YOUR WORK
// The commit message should read: "Chapter 9 complete - Updated Gandalf"

// ============
// Chapter 10
// ============
const hornOfGondor = () => {
  window.alert('the horn of gonder has been blown');
  $('li.buddy:eq(4)').css("text-decoration", "line-through");
  $('li.baddy:eq(2)').remove();
  // 1. create a pop-up alert that the horn of gondor has been blown
  // 2. Boromir's been killed by the Uruk-hai! Put a linethrough on Boromir's name
  // 3. Tricky: Remove the Uruk-Hai from the Baddies on the page

};
hornOfGondor();
// COMMIT YOUR WORK
// The commit message should read: "Chapter 10 complete - horn of gandor blew and Boromir is dead"

// ============
// Chapter 11
// ============
const itsDangerousToGoAlone = () => {
  const $div = $('<div id=\'mount-doom\'></div>').appendTo('#Mordor');
  $('li.hobbit:eq(0)').appendTo("#Mordor");
  $('li.hobbit:eq(1)').appendTo("#Mordor");

  // Also could have worked...
  // $('#Mordor').append($('.hobbit:eq(0)'));
  // $('#Mordor').append($('.hobbit:eq(1)'));
  //^ how to do this on one line?


  // 1. take Frodo and Sam out of the fellowship and move them to Mordor (they don't need to be inside a ul in Mordor)
  // 2. add a div with an id of 'mount-doom' to Mordor
};
  itsDangerousToGoAlone();
// COMMIT YOUR WORK
// The commit message should read: "Chapter 11 complete - Sam and Frodo are in Mordor and Mount Doom has been created"

// ============
// Chapter 12
// ============
const weWantsIt = () => {
  const $div = $('<div id=\'gollum\'>').appendTo('#Mordor');
  $('#the-ring').appendTo('#gollum');
  $('#gollum').appendTo('#mount-doom');
  //  // 2. Move the ring from Frodo and give it to Gollum
  //  $('#gollum').append($('#the-ring'));
  //  // 3. Move Gollum into Mount Doom
 // $('#the-ring').appendTo('#gollum');
 // $('#gollum').appendTo('#mount-doom');
  // 1. Create a div with an id of 'gollum' and add it to Mordor
  // 2. Move the ring from Frodo and give it to Gollum
  // 3. Move Gollum into Mount Doom

};
weWantsIt();
// COMMIT YOUR WORK
// The commit message should read: "Chapter 12 complete - Gollum is trying to get the ring".

// ============
// Chapter 13
// ============
const thereAndBackAgain = () => {
  $('#gollum').remove();
  $('#the-ring').remove();
  $('li.baddy').remove(); //not working
  $('.hobbit').appendTo('#The-Shire');
  // $('.hobbit').appendTo('#the-shire'); //check later.
  // 1. remove Gollum and the Ring from the DOM

  // 2. remove all the baddies from the DOM

  // 3. Move all the hobbits back to the shire

};
thereAndBackAgain();
// COMMIT YOUR WORK
// The commit message should read: "Chapter 13 complete -Gollum and the ring are gone, the baddies are done, and the hobbits are back in the shire".


// =====================================
// Don't change anything below this line
// =====================================
// =====================================
// This code is loading all of the event listeners for the buttons in your application.
// =====================================

$(() => {

  $('#1').on('click', makeMiddleEarth);
  $('#2').on('click', makeHobbits);
  $('#3').on('click', keepItSecretKeepItSafe);
  $('#4').on('click', makeBaddies);
  $('#5').on('click', makeBuddies);
  $('#6').on('click', leaveTheShire);
  $('#7').on('click', beautifulStranger);
  $('#8').on('click', forgeTheFellowShip);
  $('#9').on('click', theBalrog);
  $('#10').on('click', hornOfGondor);
  $('#11').on('click', itsDangerousToGoAlone);
  $('#12').on('click', weWantsIt);
  $('#13').on('click', thereAndBackAgain);

});
