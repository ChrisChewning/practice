HTML (CSS is in /Users/chris/ga-wdi-atx/week-two/HomeworkWeekTwo/HarryPotterTH)
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Harry Potter for Life</title>
    <link rel="stylesheet" href="style.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.js"></script>

  </head>
  <body>
  <script src="app.js" type="text/javascript"></script>
  </body>
</html>


JS CHECK...


if (typeof jQuery == 'undefined'){
  console.log('oops! I still have to link my jQuery properly!');
} else {
  console.log('I did it! I linked jQuery and this js file!')
};




// WHAT JIM SENT....


$( () => { //this whole thing is in one function?

  // YEAR 1: Create your h1 object.
  const $container = $('#container'); //created a container object.
  const $h1 = $('<h1>'); //created an h1 object.
  $h1.text('Hogwarts'); //put text on the h1 object.
  $('body').append($h1); //append the h1 object to body.

  // YEAR 2: Create your h2, h3, and h4 objects.
  $('<h2>').text('Dylan Williams').appendTo($('body')); //put h2.text('') to body. didn't create an h2 variable.
  $('<h3>').text('Ravenclaw').appendTo($('body')); //put h3.text('') to body. didn't create an h3 variable.
  $('<h4>').text('Corvus').addClass('crow').appendTo($('body')); //put h4.text('') with the class ('crow') on body. no h4 var.
  $('<h4>').text('Holly Wand with Unicorn Hair Core').appendTo($('body')); //put 2nd h4 text('') to body.

  // YEAR 3: Create a list with the attribute "storage," and "trunk" and a list of things. Make a few of the list items disappear.
  const $ul = $('<ul>').attr('storage','trunk'); //create a ul element with the attributes storage and trunk.
  $('<li>').text('butter beer').appendTo($ul); //append an li object with the text('') and class('') to the ul just made.
  $('<li>').text('invisibility cloak').addClass('secret').appendTo($ul);
  $('<li>').text('magic map').addClass('secret').appendTo($ul);
  $('<li>').text('time turner').addClass('secret').appendTo($ul);
  $('<li>').text('leash').addClass('crow').appendTo($ul); //LEASH HAS A CLASS CALLED CROW.
  $('<li>').text('Bertie Bott\'s Every Flavor [Jelly] Beans').appendTo($ul);
  $('<li>').text('professor').attr('id', 'mcGonnall').appendTo($ul);
  // $('<li>').text('human').addId('person').appendTo($ul); //doesn't work. need to use attr('id', '...')? only?
  $('body').append($ul);



  // YEAR 4: Create a table.
  const $h5 = $('<h5>').text('Spring 2017'); //makes an h5 that is like a title for the table.
  const $table = $('<table>'); //make a table you can grab.
  const $thead = $('<thead>'); //make a header you can grab.
  $('<th>').text('Day').appendTo($thead); //in the header put day
  $('<th>').text('Classes').appendTo($thead); //in the header put classes
  $table.append($thead); //append the header to the table.
  $table.append($('<tr>').append($('<td>').text('Monday')).append($('<td>').text('Herbology')));
  $table.append($('<tr>').append($('<td>').text('Tuesday')).append($('<td>').text('Divination')));
  $table.append($('<tr>').append($('<td>').text('Wednesday')).append($('<td>').text('History of Magic')));
  $table.append($('<tr>').append($('<td>').text('Thursday')).append($('<td>').text('Charms')));
  $table.append($('<tr>').append($('<td>').text('Friday')).append($('<td>').text('Potions')));
  $('body').append($h5).append($table);


  // YEAR 5: Remove elements. Make one element a different color. Add a new element in a specific spot.

  $('h4').eq(0).remove(); //this removes  Corvus. In year 2, there are two h4s.
  $('li').eq(0).remove(); //this removes butter beer, lowercase. this is the first, index 0, li
  $('h4').after($('<h4>').text('Rosewood Wand with Warg Hair Core').css('color','crimson').addClass('wand'));
  //^this add an h4 Rosewood Wand... after the only h4 in th body, which is 'Holly Wand'. This is b.c you removed Corvus, the index 0 (eq(0).remove(). If you kept Corvus, you'd get 'Rosewoood Wand with Warg Hair Core' after Corvus and again after
 // 'Hollywood wand...'


//eq explanation.
//^The index-related selectors (:eq(), :lt(), :gt(), :even, :odd) filter the set of elements that have matched the expressions that precede them.  The :lt() selector selects elements with an index number less than a specified number. Same with :gt() for greater than. the :even() Selects even elements, zero-indexed. and :odd() selectds odd elements, zero-indexed. select the class first. A good example for this is in tables, when you want to border or background specific rows.





//what is with the h4.crow inside the (). usually it's h4.something.something
  $('h4.crow').appendTo($('body')); //append the h4.crow to the body.
  $('h4').eq(0).before($('h4.crow')); //add an h4 before the h4 crow?


  // YEAR 6: Add functionality to one of the classes. Add a class and remove a class.
  $('.secret').hide('slow').delay(2000).show('slow');
//^Explanation .hide() by itself can hide an image. when you put in slow and a delay or show and a delay it adds the ability to see it and then not see it.

//Exlanation2: Durations are given in milliseconds; higher values indicate slower animations, not faster ones. The strings 'fast' and 'slow' can be supplied to indicate durations of 200 and 600 milliseconds, respectively.

  $('li.crow').addClass('cabbage'); //GRABS THE li.crow element? this is leash. Adds the class cabbage. class="crow cabbage"
  $('li.crow').removeClass('cabbage'); //remove the class cabbage to li.crow (leash). Leash retains the class crow.


  // YEAR 7: Add an element. Prepend an element. Update the list's attribute.
  $('h5').text('Fall 2017'); //updated the h5 element with the text Spring 2017 to Fall 2017. It was the only h5 text so you
                            //only had to put in h5 to update it.
  $('ul').prepend($('<li>').text('Butter beer')); //put an li element with Butter Beer first on the ul list.
  $('ul').attr('storage','chest'); //give the ul list an attribute of storage: chest(?) instead of 'storage: trunk'

});
