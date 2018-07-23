
PROBLEM #1: Change all occurrences of the word cat in a sentence.

"cat dog cat cat dog" //
str = str.replace('abc', ''); //only replaces the first one.
str = str.replace(/abc/g, ''); //replaces all of them.



PROBLEM #2: Change all occurrences of the word cat in a sentence, including capital Cat.

var re = /cat/gi; //look for cat in all cases and ignore capitalization.
var str = 'Cats are wonderful, and cats are great.';
var newstr = str.replace(re, 'dogs');
console.log(newstr);  // dogs are wonderful, and dogs are great.

//How would you capitalize the first word though?



PROBLEM #3: CHANGE THE ORDER OF WORDS.

example: I want "I have a cat, a dog, and a goat" to read "I have a dog, a goat, and a cat."


var str = "I have a cat, a dog, and a goat.";

var mapObj = {
   cat:"dog",
   dog:"goat",
   goat:"cat"
};
str = str.replace(/cat|dog|goat/gi, function(matched){
  return mapObj[matched];
});


PROBLEM #4: SWITCH TWO WORDS.

var name = "Abe Lincoln";
var re = /^(\w+)\s(\w+)$/;
var newname = name.replace(re,"$2, $1");
https://www.safaribooksonline.com/library/view/javascript-cookbook/9781449390211/ch02s07.html



b = [a, a = b][0];
// There are a few things happening here, so if you're still having trouble understanding how or why this works, I'll explain:
//
// We're utilizing an array where the first index is the value of a and the second index is the value of  b
// a is set to the value of b when the array is created
// b is set to the first index of the array, which is  a
