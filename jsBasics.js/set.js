
DEFINITION
The Set object lets you store unique values of any type, whether primitive values or object references.

LINK
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set

EXPLANATION
A set is not an ordered abstract data structure.

A Set however always has the same iteration order - element insertion order [1], so when you iterate it (by an iterating method, by calling Symbol.iterator, or by a for.. of loop) you can always expect that.

You can always convert the set to an array and sort that.

Array.from(new Set(["b","a","c"])).sort();
[...(new Set(["b","a","c"]))].sort(); // with spread.
