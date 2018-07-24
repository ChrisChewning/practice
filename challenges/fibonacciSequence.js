Given a number N return the index value of the Fibonacci sequence, where the sequence is: 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...

LINK: https://medium.com/developers-writing/fibonacci-sequence-algorithm-in-javascript-b253dc7e320e

//MY IDEAS
// idea 1: the formula is n + the number before it so not n++. maybe n += ??
// idea 2: loop. you have to go through numbers.
// there's no max number here so a for loop, not a while.
// idea 3: an empty array to store the number in? i don't think
// b.c you're not needing to push or pop.

//my attempt...
// let fibSeq = (n) => {
//   for (i = 1; i < n.length; i++) {
//       myNum = myNum +=
//   }
//   }
// }
// fibSeq()



let fibonacci = (num) => {
  var a = 1, b = 0, temp; //same as: var a = 1; var b = 0; var temp;
  while (num >= 0){
    temp = a; //temp is temporarily a. Example: temp is 1
    a = a + b; //now a is going to equal temp + b. Example:
    b = temp; //finally b will equal temp.
    num--; //decrement the parameter down by 1 each time.
  }
  return b;
}
console.log(fibonacci(5)) //logs out 8
