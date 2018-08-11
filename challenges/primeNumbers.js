//


const isPrime = (num) => {
    for (i = 2; i < num; i++){ //< num b.c you iterate up to num? start at 2 b.c prime #s cant be 1. WHY < NUM though?
  if (num%i===0) //do not put a { here bc it is still part of the conditional? it renders everything differently.
    return false; //if it can be divisible by itself return false.
  }
return true;
};
console.log(isPrime(5));





// function isPrime(n){
//   var divisor = 2;
//
//   while (n > divisor){
//     if(n % divisor == 0){
//      return false;
//     }
//     else
//       divisor++;
//   }
//   return true;
// }
//
// console.log(isPrime(137));
//   // = true
//   console.log(isPrime(237));
//   // = false




/**
 * An integer is prime if it is not divisible by any prime less than or equal to its square root
 **/

// const isPrime = (n) => {
//     if (n < 2) return false;
//     var q = Math.floor(Math.sqrt(n));
//     for (var i = 2; i <= q; i++)
//     {
//         if (n % i == 0)
//         {
//             return false;
//         }
//     }
//     return true;
// }
// console.log(isPrime(3));
