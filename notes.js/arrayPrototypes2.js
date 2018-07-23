.push() - adds something on an array at the end. Changes the original array.
ex: var array = ["a", "b", "c"];
    var newArray = array.push("d"); //returns ["a", "b", "c", "d"];

--------------------------------------------------------------------------------

.pop() - removes the last element on an array and returns it. Changes the original array.

//THIS CAN'T BE RIGHT...
    var newArray = array.pop(""); // returns ["c"];

    var myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];
    var popped = myFish.pop();

    console.log(myFish); // ['angel', 'clown', 'mandarin' ]
    console.log(popped); // 'sturgeon'


--------------------------------------------------------------------------------

.concat() - can concatenate 2 strings or arrays together. Does not change the original array.
ex: var array = ["a", "b", "c"];
    var newArray = array.concat("d", "e");

    // var array will return "a" "b" "c"
    // var newArray will return returns ["a", "b", "c", "d", "e"];

--------------------------------------------------------------------------------

.join() - joins all the elements in an array to create a string. Does not change the original array.
ex: var array = ["a", "b", "c"];
    var newArray = array.join("") // returns "abc"
    var newArray = array.join("!") //returns "a!b!c!"

--------------------------------------------------------------------------------

.slice() - slices off a string from another string. You have 2 parameters:
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

.split() - Splits off string into separate arrays.
ex: var tags = "Chicken, fish, rice, tofu";
    var tagsArray = tags.split(",")
    console.log(tagsArray) // ["Chicken", " fish", " rice", " tofu"];

ex2: var str= "hi neighbor how are you"
     var str2 = str.split(" ")
     console.log(str2); // ["hi", "neighbor", "how", "are", "you"]
--------------------------------------------------------------------------------

.splice() - Deletes part of string. Take in three arguments.
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

.sort() - sorts arrays by abc order and integer order. Works great with strings but not integers.

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

.shift(); - Removes the first index in an array.

ex1: function test() {
var array = ["February", "March", "April"];
var newArray = array.shift();
console.log(array) // ["March", "April"]
console.log(newArray); //["February"]
}
test()



--------------------------------------------------------------------------------

.unshift(); - adds something to the first index in an array.

ex1: function test() {
array = ["February", "March", "April"];
newArray = array.unshift("January");
console.log(array) = ["January", "February", "March", "April"]
console.log(newArray); = 4. WHY?
}
test()


--------------------------------------------------------------------------------

.reverse(); - Reverses the string. Note: if you want to reverse the string you  have to split() it first and then join() it back together.


--------------------------------------------------------------------------------

.map() - Method to iterate through arrays. It does not modify the original array.

ex:
var oldArray = [1, 2, 3];
var timesFour = oldArray.map(function(val){
  return val * 4; //val is now how you access [1,2,3]. This is b.c you are mapping the variable oldArray
                 //through a function and storing it in the parameter val.
}); //Notice the ) ends here from the function you tied to .map method.
console.log(timesFour); // returns [4, 8, 12]
console.log(oldArray);  // returns [1, 2, 3]

----------------------------------------------------------------------------------------

.reduce() - Method to iterate through array and reduce it down to one value. The reduce method
cycles through each number like a for-loop.

ex:
var euros = [29.76, 41.85, 46.5];
var sum = euros.reduce(function(total, amount){
  return total + amount
  //when the "loop" starts we have the total. The amount is kind of like a parameter for each # to go through?
 //like total stays in one spot. and amount is cycling through and adding to the total.
 //when there are no more amounts we get the total.
});
console.log(sum) // 118.11

//you have 2 parameters in your function. Reduce acts like a loop, going through each number.
//The 1st parameter, total, is your accumulator. This starts at 29.76. It keeps track of the number as we reduce.
//The 2nd parameter, amount, is just letting you get to the next number. When you run out of numbers this doesn't
//do anything, leaviny you with one number. Thus, your array has been reduced.

var numbers = [10, 20, 30];
var two = numbers.reduce(function(total, amount) {
 return total * amount + 2;
});
console.log(two); //returns 6062. I think b.c you first times 10 * 20 * 30 = 6000.
                 //then you add the 3 values together to = 60 + 2 62.

array = [1,2,3];
singleVal = array.reduce(function(array, singleVal) {
return array + singleVal;
});
console.log(singleVal); //returns 6.

ex. finding avg. with reduce
var scores = [1, 4, 6, 8];
var result = scores.reduce((total, score) => total + score) / scores.length;
console.log(result); // 4.75

//note: the => means
