

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

.concat() - can concatenate 2 arrays or strings together. Does not change the original array.
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

.map() - Method to iterate through arrays. It does not modify the original array.

ex:
var oldArray = [1, 2, 3];
var timesFour = oldArray.map(function(val){
  return val * 4; //val is now how you access [1,2,3]. This is b.c you are mapping the variable oldArray
                 //through a function and storing it in the parameter val.
}); //Notice the ) ends here from the function you tied to .map method.
console.log(timesFour); // returns [4, 8, 12]
console.log(oldArray);  // returns [1, 2, 3]


ex2:
var elements = [
  'Hydrogen',
  'Helium',
  'Lithium',
  'Beryllium'
];

elements.map(function(element) {
  return element.length;
}); // [8, 6, 7, 9]


ex3:
const map1 = array1.map(x => x * 2);


//Key value pairs in map is for iterating over objects inside an array.

--------------------------------------------------------------------------------
