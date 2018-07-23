LINK: explanation: https://guide.freecodecamp.org/javascript/regular-expressions-reference/
LINK2: total guide: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

DEFINITION:
 In JavaScript, regular expressions are a shorthand used to match the desired part of a string. These are beneficial when trying to manipulate or validate strings used in your code.

 Regular expressions are used to perform pattern-matching and "search-and-replace" functions on text.

SYNTAX/FORMULA
Regular expressions have two parts.
The first part is the pattern. Whatever you want to check for you put in between / /
example: /[^A-Za-z0-9]/g   is searching for what is bw the / / the ^ is for negation. It is saying search for everything that is not letters or digits.



MODIFIERS
g: global, which allows you to not stop at the first instance. example, /[g]/g for the string egg would search the whole word egg and not stop after eg.

i: do a case-insensitive search. example lowercase or uppercase do not matter. WHY WOULDNT THIS MAKE the palindrome work so you dont have to use .toLowerCase()?

m: multi-line matching.

u
Unicode; treat pattern as a sequence of Unicode code points
y
sticky; matches only from the index indicated by the lastIndex property of this regular expression in the target string (and does not attempt to match from any later indexes).




EXAMPLE:

TWO COMMON OPTIONS:
/[^A-Za-z0–9]/g is the easiest RegExp to choose.
/[\W_]/g also works.

ALL OPTIONS:
https://www.w3schools.com/jsref/jsref_obj_regexp.asp
example: /d is for digits. /D is for non-digits.
