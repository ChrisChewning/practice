
//create a function named divisors / Divisors that take an integer n> 1 and returns an array with all of the integer's divsors (except for 1 and the number itself), from smallest to largest. If the number is prime return the string (integer). **It mentioned something about arrays too.


function divisors(integer) {
  var divs = []; //create an empty array bc it wanted the return in the array.
  for (i = 2; i < integer; i++) { //look at each number less than your integer.
    if (integer % i === 0) {
      //we have a divisor. we want to add that into the array.
      divs.push(i);
    }
  }
  if (divs.length > 0) {
    return divs
  } else  {
    return integer + ' is prime';
   }

};
console.log(divisors(12));
