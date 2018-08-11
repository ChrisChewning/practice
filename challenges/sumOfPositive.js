//You get an array of numbers. Return the sum of all of the positive ones.
//example [1, -3, 7, 12] => 1 + 7 + 12 = 20


// MY ATTEMPT
// function positiveNums(arr) {
//     var nums = [];
//     for (i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) {
//       num.push(i);
//     }
//     }
// }
// positiveNums(1, -4, 7, 12);




const positiveSums = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >0 ) {
            sum += arr[i]
        }
    }
    return sum;
};
positiveSums([1,-4,7,12])


// function positiveSums(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) {
//       sum += arr[i]
//     }
//   }
//   return sum
// }
//
