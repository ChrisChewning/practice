// Example 2: [[18, 20],[45, 2],[61, 12],[37, 6],[21, 21],[78, 9]]

// SOLUTION WITH MAP()


const data = [[18, 20],[45, 2],[61, 12],[37, 6],[21, 21],[78, 9]]

function openOrSenior(data){
  return data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open');
}
console.log(openOrSenior(data));



users = ["Chris", "Julie", "Paxton", "Marge", "Zombie"]

let abc = users.sort(function(a, b){
    if(a < b) return -1;
    if(a > b) return 1;
    return 0;
})
console.log(abc);


// var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// function myFunction(fruits) {
//     let myBest = fruits.slice(2, 1);
//     return myBest;
// }
//
// console.log(myBest);


//THIS CAN'T BE RIGHT...

var myFish = ['parrot', 'anemone', 'blue', 'trumpet', 'sturgeon'];
var removed = myFish.splice(myFish.length - 3, 2, 'marlin', 'goldfish');
console.log(myFish);
