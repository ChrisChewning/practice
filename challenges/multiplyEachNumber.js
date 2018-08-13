
// https://www.codewars.com/kata/square-every-digit/solutions

// Write a function to square every digit of an integer.

// For example:
// squareEveryNum(9119) ==> 811181
// squareEveryNum(4232) ==> 16494

// Note: The function should accept an integer and return an integer







squareDigits = (num) => {
  let numString = num.toString() //.toString()
  let arr = [] //empty array to store new info into.

  for(var i = 0; i < numString.length; i++) {
    arr[i] = numString[i] * numString[i] //dont need parantheses
  }
  return Number(arr.join('')) //if you put arr.join('') without Number you'll get the number back with '' marks around it.

}
squareDigits(123)
