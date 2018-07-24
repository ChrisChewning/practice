

str.trim() - removes whitespace from either side of a string.

ex: var orig = '   foo  ';
console.log(orig.trim()); // 'foo'

--------------------------------------------------------------------------------
str.match()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match


--------------------------------------------------------------------------------

str.replace() takes two argments. The first is what to replace. The second is what to replace it with.

Ex: var str = 'TV is great';
    newString = str.replace('TV', 'books');
    console.log(newString);// 'Books is great'
    console.log(str); //'TV is great'

Ex 2: Chaining
let myStr = 'My little Alligator';

myStr = myStr.replace('Alligator', 'gator').replace('My', 'Your').replace('gator', 'unicorn');

console.log(myStr); // Your little unicorn 🦄

Ex 3: Regular Expressions

let myStr = 'Does my text make sense?';
myStr = myStr.replace(/e/g, 'a');

console.log(myStr); // Doas my taxt maka sansa?
