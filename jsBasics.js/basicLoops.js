
// EXAMPLE 1
var text = "";
var i;
for (i = 0; i < 10; i++) {
    if (i === 3) { continue; }

}
console.log("The number is " + i + ".");
//you'll get The number is 10. this is bc it gets to 9, then adds 1 to 10. since your log is outside the loop you only log that last one.
//If it's in the loop you'll get "The number is 1." it'll break to new line since it loops. Then "The number is 2." "The number is 4." etc.

for (i = 0; i <=5; i++) {
  console.log('NEW');
  console.log('The number is' + ' ' + i);
}



// EXAMPLE 2
for (var i = 1; i <= 10; i++) {
       if (i == 3 || i == 7) {
           continue;
   }
  if (i == 9) {
    break;
  }

console.log(i)

}
//log out 1 2 4 5 6 8
//if you console.log(i) after the for loop you just get 9 bc it breaks at 9, THEN you log it out.;


// EXAMPLE 3: Iterate through an array

var arr = [1,2,3,4,5]

for (i = 0; i < arr.length; i++) {
  console.log(i)
}
//0,1,2,3,4. doesn't get to 5 b.c it's less than the length? If it's <= it does get to 5.

// If you change i = 2, it goes 2,3,4


// EXAMPLE 4: Only loop through even numbers.

for (let i = 0; i <=10; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}


// FIZZBUZZ: Print out numbers 1 = 100. For multiple of 3, print "Fizz", multiples of 5, print "Buzz", and multiple of 3 & 5, "FizzBuzz"

for (let i = 1; i <= 100; i++) {
  if (i % 15 === 0) {
    console.log('FizzBuzz');
  } else if (i % 3 === 0) {
    console.log('fizz');
  } else if (i % 5 === 0) {
    console.log('buzz');
  }
  else {
    console.log(i);
  }
}

//WRONG!!
// for (let i = 1; i <= 100; i++) {
//    if (i % 3 === 0) {
//     console.log('fizz');
//   } else if (i % 5 === 0) {
//     console.log('buzz');
//   }
//   else if (i % 15 === 0) {
//     console.log('FizzBuzz');
//   } else {
//     console.log(i);
//   }
// }


const isPrime = (num) => {
    for (let i = 2; i < num; i++){ //i < num b.c your last iteration is before it so it jumps up to it?
  if (num % i===0) //do not put a { here bc it is still part of the conditional? it renders everything differently.
    return false; //if it can be divisible by itself return false.
  }
return true;
};
console.log(isPrime(3));



const testPrime = (n) => {
  if (n===1) { return false;} //1 is technically not prime b.c 1 is itself.
  else if(n === 2){return true;} //2 is prime. divisible by 2 and 1.
  else {
    for(let x = 2; x < n; x++)
    {
      if(n % x === 0)
      {
        return false;
      }
    }
    return true;
  }
}
console.log(testPrime(3));



//PRINT ALL PRIME NUMBERS
//every time the first loop passes it triggers the nested loop again.
for (var counter = 0; counter <= 100; counter++) { //normal 'for loop' 0 - 100.
    var notPrime = false; //set a variable to false. this will run each time.
    for (var i = 2; i <= counter; i++) { //nested loop to compare.
        if (counter % i===0 && i!== counter) {
  //if i is divisible by itself AND i isn't equal to  the first loop's number.
            notPrime = true; //toggle to true if conditions are met.
        }
    }
    if (notPrime === false) {
                console.log(counter);
    }
}



let bubSortNums = [1, 8, 2, 5, 4]
let swapped; //lets us know if a swap happened.

function bubbleSort(arr){
  swapped = false;
  let end = arr.length - 1;
  for (let i = 0; j =1; i < end; i++; j++){
    if (arr[i] > arr[j]){
      swapped = true;
      [arr[i], arr[j] = arr[j], arr[i]]];
}
}
end--
}
console.log(swapped);
