PROBLEM: Factorialize a number.
Definition: a factorial multiplies itself and subtracts the number from itself. Example factorial of 5 is 5 * 4 * 3 * 2 * 1.


// OPTION 1: IF/ELSE STATEMENT. Recursion (invoke a function call on itself).
//Fibonacci sequence is the textbook example of how recursion is used.
function factorialize(num) => {
  //if num is less than 0 it'll be negative integers. -5 * -4 * -3 * -2 * -1 = -120
  if (num < 0) {
    return 'itll be a negative';
    // if num is 0 it'll be 0 * -1 * -2, which will always be 0.
  } else if (num = 0) {
    return 0;
  } else {
    factorialize(num * (num-1)); //this is recursion.
  }
}

// OPTION 2: WHILE LOOP
function factorialize(num) => {
  const result = num;   //create a variable to store num.
  while num > 1 {  //note if you put this as > 0, the loop will hit 1, then -1 and multiply the sequence by 0.
  num--; //decrement
  result = result * num; //now result will equal result * num
  // result *= num  //shorter way to say this ^
}
  return result; //now return that number.

  //important: if you return result inside the 1st code block (right under result *= num, you'll only get 20). This is because it returns it before the while loop is done working. It returns it after the first iteration.

  // while (num > 1) {
  //   return factorialize(num * num-1));
  // }
}
factorialize(5)


//OPTION 3: FOR LOOP
function factorialize(num) => {
  const result = num;
  for (i = num; i > 1; i--) {
    result *= num;
  }
  return num;
}
factorialize(5);


LINK:
PROBLEM: https://www.coderbyte.com/editor/guest:First%20Factorial:JavaScript SOLUTION: https://medium.freecodecamp.org/how-to-factorialize-a-number-in-javascript-9263c89a4b38
