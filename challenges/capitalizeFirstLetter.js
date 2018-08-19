
// PROBLEM: Capitalize only the first letter of a string.

//ES6
function capitalize(str){
  return str.replace(/^[a-z]/g, (u) => u.toUpperCase());
}
console.log(capitalize('camel case')); // 'Camel case'
console.log(capitalize('hello world it is me')); // 'Hello world it is me'



//ES5
function capitalizing(str){
  return str.replace(/^[a-z]/g, function (u)
    return u.toUpperCase())
  }

console.log(capitalizing('camel case'));
//
//
// //ES5
// function capitalized(str){
// return str = str.replace(/[^a-z0-9+]/g, 'hi')
// }
// console.log(capitalized('camel case'));
//
//


//CAPITALIZE THE BEGINNING OF EVERY WORD
function toTitleCase(str) {
    return str.replace(
        /\w\S*/g,  /\
        // explanation: \w looks for all word characters in a string a-z A-Z 0-9 and _.
        //the \S is any character that is NOT a whitespace character. \s is for whitespace characters.  * says to look for n zero or more times.

        function(txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
    );
}
console.log(toTitleCase('hi hello'));

//The / Is the beginning of a regex (regular expression). The \w looks for all word characters in a string. A word character is a character from a-z, A-Z, 0-9, including the _ (underscore) character. Now the \S is any character that is NOT a whitespace character. You were confusing it with \s(lowercase) which is for whitespace characters. The * is a character that says to look for n zero or more times, where n is the metacharacter(the backslash tokens in the regex) in the regex. Hope this helped a litt



//
//explanation
// 1. str.replace() takes two argments. The first is what to replace. The second is what to replace it with.
//
// Ex: var str = 'TV is great';
//     str.replace('TV', 'books');
//     this should result in 'Books is great'
//
// 2. If we want to replace all occurrences of a word.
//
// 2. We want our ^ to apply to any lowercase character at the beginning of our string, so we’ll add it directly before our character set [a-z]. This will target only the first character if it is a lowercase letter.

// /^[a-z]/
