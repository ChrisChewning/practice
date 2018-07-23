MAP - Method to iterate through arrays. It does not modify the original array.

example...
var oldArray = [1, 2, 3];
var timesFour = oldArray.map(function(val){
  return val * 4;
}); //Notice the ) ends here from the function you tied to .map method.
console.log(timesFour); // returns [4, 8, 12]
console.log(oldArray);  // returns [1, 2, 3]



REDUCE - Method to iterate through array and reduce it down to one value.
example...

var euros = [29.76, 41.85, 46.5];
var sum = euros.reduce( function(total, amount){
  return total + amount
});
sum // 118.11

//you have 2 parameters in your function. Reduce acts like a loop, going through each number.
//The 1st parameter, total, is your accumulator. This starts at 29.76. It keeps track of the number as we reduce.
//The 2nd parameter, amount, is just letting you get to the next number. When you run out of numbers this doesn't
//do anything, leaviny you with one number. Thus, your array has been reduced.

var array = [4,5,6,7,8];
var singleVal = 0;
// Only change code below this line.

singleVal = array.reduce(function(array, singleVal) {
  return array + singleVal;
});



FILTER - The filter method is used to iterate through an array and filter
out elements where a given condition is not true.

var numbers =[1,2,3,4,5,6,7,8,9,10];
array = array.filter(function(val) {
  return val !== 5; // removes values that are equal to 5.
  //note:
  != not equal        '1' != 1   // false (these two are the same)
  !== not identical   '1' !== 1 // true (these two are **not** the same).
});


var oldArray = [1,2,3,4,5,6,7,8,9,10];
var newArray = oldArray.filter(function(val) {
  return val <6;
});

------------------------------------------------------------------------------------


SORT - Sorts the values in an array alphabetically or numerically. Unlike Reduce
or Filter, it DOES alter the array.

var array = [1, 12, 21, 2];
array.sort(function(a, b) {
  return a - b; //returns smallest to largest
}); //returns [1, 2, 12, 21]

var array = [1, 12, 21, 2];
array.sort(function(a, b) {
 return b - a;
}); //returns [21, 12, 2, 1]

REVERSE - Reverses an array.

var array = [1,2,3,4,5,6,7];
var newArray = []; //empty array to put data in.
newArray = array.reverse(); // [7,6,5,4,3,2,1]

CONCACT - Concatenates

var oldArray = [1,2,3];
var newArray = [];
var concatMe = [4,5,6];
newArray = oldArray.concat(concatMe);


SPLIT - Splits a string into an array.
var string = "Split me into an array";
var array = [];
array = string.split(' '); //splits at every white space.
array = string.split(' '); // splits at every letter.



JOIN - We can use the join method to join each element of an array
into a string separated by whatever delimiter you provide as an argument.

var veggies = ["Celery", "Radish", "Carrot", "Potato"];
var salad = veggies.join(" and ");
console.log(salad); // "Celery and Radish and Carrot and Potato"
