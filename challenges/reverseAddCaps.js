PROBLEM: Each letter should return the next letter in the alphabet. This includes Z - A.

//1. Character Code: https://www.w3schools.com/charsets/ref_html_ascii.asp
//2. String.fromCharCode: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode
//3. Regular Expression:
//4. Ignore


function LetterChanges(str) {
//create an empty array.
let resultCharCode = [];

//create a for loop.
 for (let i = 0; i < str.length; i++) {
     //create new variable to store the unicode code point value.
     //codePointAt is on MDN. This changes a letter to a number.
     //unicode ais the same as character code.
     //codePointResults store the number that corresponds with the letter. ex: A is now 65.
    let codePointResults = str.codePointAt(i) + 1; //grab then add plus 1.

    let newCharCode = String.fromCharCode(codePointResults) //String.fromCharCode() makes it into a string character code. All the number + 1 goes in the ().
    //^ is living in nowhere. need to store it somewhere. resultCharCode stores it.

    //capitalize vowels

    resultCharCode.push(newCharCode);

// Z won't go to A
//capitalize vowels.
// Start of an approach:
// var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
// var regexp = /[A-E]/g;
// var matches_array = str.match(regexp);
//
// console.log(matches_array);
// ['A', 'B', 'C', 'D', 'E', 'a', 'b', 'c', 'd', 'e']


 }
  return resultCharCode;

}

// keep this function call here
LetterChanges(timothy);
