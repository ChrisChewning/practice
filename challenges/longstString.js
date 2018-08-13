// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters,
//
// each taken only once - coming from s1 or s2. #Examples: ``` a = "xyaabbbccccdefww" b = "xxxxyyyyabklmopq" longest(a, b) -> "abcdefklmopqwxy"
// a = "abcdefghijklmnopqrstuvwxyz" longest(a, a) -> "abcdefghijklmnopqrstuvwxyz" ```


const longest = (s1, s2) => {
[...new Set(s1+s2)].sort().join('');
//return something here?
}
console.log(longest('hi', 'hello'));


//EXPLANATION

// The Set object lets you store unique values of any type, whether primitive values or object references.
//Set, more familiar as a Math concept, is an abstract data type which contains only distinct elements/objects without the need of being allocated orderly by index.
//Yup, by definition, Array and Set are technically different concepts.
//One of the biggest differences here, you may notice, is that elements in Array can be duplicate (unless you tell it not to be), and in Set, they just can’t (regardless what you decide).



//RETURNS A NUMBER, NOT WORD
function findLongestWord(str) {
  var strSplit = str.split(' ');
  var longestWord = 0;
  for(var i = 0; i < strSplit.length; i++){
    if(strSplit[i].length > longestWord){
	longestWord = strSplit[i].length;
     }
  }
  return longestWord;
}
console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
