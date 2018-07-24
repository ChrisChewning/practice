
--------------------------------------------------------------------------------

str.slice() - slices off a string from another string. You have 2 parameters:
1. where to start slicing from. This will be included in your new sring.
2. where to end. This will not be included in your new string.
*Slice doesnt change the original array.

ex: var str = ["a", "b", "c"];
    str2 = str.slice(1,2);
    console.log(str2); //["b"]
    //it slices FROM the 1st index and stops slicing at the 2nd index, ["c"];
    str3 = str.slice(1,3);
    console.log(str3); // ["b", "c"] b.c 'if end is > than the length of the sequence, slice extracts through to the end of the sequence' mdn


ex2: var str = "Hello, world"
    str2 = str.slice(2,9);  //2: 1st l (included) //9: r (not included)
    console.log(str2) = //"llo, wo" (the 9th index is r in world).
    str3 = str.slice(2)
    console.log(str3); //llo, world b.c it's saying start from 2 and go to the end.

ex3: var str = ["Hi, neighbor"]
    str2 = str.slice(-2);
    console.log(str2); //"or"  A negative index can be used, which indicates an offset from the end of the sequence. it just extracts the last elements.
    //Note: 0,2 would be "Hi"


--------------------------------------------------------------------------------

str.split() - Splits off string into separate arrays.
ex: var tags = "Chicken, fish, rice, tofu";
    var tagsArray = tags.split(",")
    console.log(tagsArray) // ["Chicken", " fish", " rice", " tofu"];

ex2: var str= "hi neighbor how are you"
     var str2 = str.split(" ")
     console.log(str2); // ["hi", "neighbor", "how", "are", "you"]
--------------------------------------------------------------------------------

str.splice() - Deletes part of string. Take in three arguments.
1. index you start at.
2. how many inputs to delete.
3. (optional) - what to add.

ex1: var array = ["a", "b", "c", "d", "e"];
newArray = array.splice(2,2);
console.log(array) //returns ["a", "b", "e"]
console.log(newArray) //returns ["c", "d"]

ex2: var array = ["a", "b", "c", "d", "e"]
newArray2 = array.splice(2,2, "whoops, whoops")
console.log(array); //["a", "b", "whoops" whoops", "e"]

ex 3: var myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];
var removed = myFish.splice(2, 0, 'drum');
console.log(myFish); //['angel', 'clown', 'mandarin', 'drum', 'sturgeon']


--------------------------------------------------------------------------------

str.sort() - sorts arrays by abc order and integer order. Works great with strings but not integers.

ABC
By default, the sort() function sorts (or converts) values as strings ("Apple" before "Banana").

NUMBERS
However, if numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1".
You can fix this by providing a compare function:

Example
var points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a - b}); //ascending

var points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return b - a}); //descending

--------------------------------------------------------------------------------

str.reverse(); - Reverses the string. Note: if you want to reverse the string you  have to split() it first and then join() it back together.


--------------------------------------------------------------------------------
