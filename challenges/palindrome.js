//Return true if the given string is a palindrome. Otherwise, return false.
// A palindrome is a word or sentence that’s spelled the same way both forward and backward, ignoring punctuation, case, and spacing.
// Note. You’ll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything lower case in order to check for palindromes.
// We’ll pass strings with varying formats, such as “racecar”, “RaceCar”, and “race CAR” among others.

const palindrome = (word) => {
  var reg = /[^A-Za-z0-9]/g; //note 1.
  wordLower = word.toLowerCase().replace(reg, ''); //what to replace, what to replace with. Find anything that is not a letter or number. replace it with nothing ''. if you did ' ' it would replace it with a space. 
  wordReverse = wordLower.split('').reverse().join('');
  if (wordReverse == wordLower) {
    return true
  } else {
    return false
  };
}
console.log(palindrome('Anna')); //true
console.log(palindrome('Ann9a')); //false


//NOTES

//note 1: removes all characters that are not letters or numbers.  /g is global so it doesnt stop after catching the first one.
// var reg = /[\W_]/g   //could use that instead.

//note 1, expalined more
// /[\W_]/g
// OR
// /[^A-Za-z0-9]/g
// [^A-Z] matches anything that is not enclosed between A and Z
// [^a-z] matches anything that is not enclosed between a and z
// [^0-9] matches anything that is not enclosed between 0 and 9
// [^_] matches anything that does not enclose _
