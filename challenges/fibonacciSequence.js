// Given a number N return the index value of the Fibonacci sequence, where the sequence is: 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...
//
// LINK: https://medium.com/developers-writing/fibonacci-sequence-algorithm-in-javascript-b253dc7e320e



//SOLUTION 1


  let a = 0;
  let b = 1;
  let result = b; //result = b okay?

for (var i=1; i < 7; i++) {
  // console.log();
  result = a + b;
  a=b;
  b=result;
}
console.log(result);




// SOLUTION 2
let fibonacci = (num) => {
  var a = 1, b = 0, temp; //same as: var a = 1; var b = 0; var temp;
  while (num >= 0){
    temp = a; //temp is temporarily a. Example: temp is 1
    a = a + b; //now a is going to equal temp + b. Example: 1 + 1.
    b = temp; //finally b will equal temp. now b = 2
    num--; //decrement the parameter down by 1 each time.
  }
  return b;
}
console.log(fibonacci(6)) //logs out 8




// var a = 0;
// var b = 1;
// var result = b;
//
// for (var i =1; i < 10; i++){
// result = a + b;
// a = b;
// b = result;
// }
//
// console.log(fib(9));
