// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 integers. No floats or empty arrays will be passed.
//
// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.
//
// [10, 343445353, 3453445, 3453545353453] should return 3453455.
//

//SUM THE TWO SMALLEST
function sumTwoSmallestNumbers(numbers) {
  numbers = numbers.sort(function(a, b) {
    return a - b; })
    ;
  return numbers[0] + numbers[1];
};
console.log(sumTwoSmallestNumbers([2,3,7,10]));  //5



//SUM THE TWO LARGEST
function sumTwoLargestNumbers(numbers) {
  numbers = numbers.sort(function(a, b) {
    return b - a; })
    ;
  return numbers[0] + numbers[1];
};
console.log(sumTwoLargestNumbers([2,3,7,10]));  //17


//SORT BY NUMERIC VALUE.
// function sortByValue(numbers) {
//   numbers = numbers.sort(function(a, b) {
//     return a-b; })  //b-a would be 23,10,3,2
//     return numbers;
// };
// console.log(sortByValue([2,3,23,10]));  //2,3,10,23



//SORT BY NUMERIC VALUE.
function sortByValue(letters) {
  return letters.sort();
  // return letters.sort().reverse(); //descending order.
};
console.log(sortByValue(['a','c','z','q']));  //a,c,z,q





//EXPLANATION
// https://www.codecademy.com/en/forum_questions/50261d514aa553000205da1f
//
// 1. .sort() is an array method. We pass an argument to it as a single function This function (function(a,b) is responsible for comparing items, not sorting them. Basically .sort() is for comparing, which is like sorting if yout hink about it.
//
// 2. The function(a,b) that we provide simply compares two items and returns a negative number if a is "smaller" than b according to our sort criteria, or a positive number if a is "larger" (i.e. should be sorted after b), or 0 if the order of a and b in the Array should not be changed. When no comparison function is given, .sort() assumes ascending alphabetical sorting, which could be undesired e.g. when sorting numbers:

// 3. ASCENDING: A-B
   // DESCENDING: B-A
