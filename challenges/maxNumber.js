 // Define a function named max that takes in one argument.
//    arr (array of numbers)
//
// Return the maximum number in the array. For example, given [1, 2, -3, 4],
// then return 4. If the array is empty, return -Infinity




max = (arr) => {
  if (arr[0] === undefined) {
    return Infinity;
  } else if (arr.length === 1 ) {
    return arr[0]
  }
  
  let currHighest;
  for (let i = 0 ; i < arr.length ; i++) {
    console.log(arr[i], 'this is the arr i')
    if (arr[i] - arr[i+1] === 0) {
      currHighest = arr[i];
    } else if (arr[i] - arr[i+1] < 0) {
      currHighest = arr[i+1]
    } else if (arr[i] - arr[i+1] > 0) {
      currHighest = arr[i]
    }
  }
    return currHighest;
}
console.log(max([1,2,3,50,-3]))
