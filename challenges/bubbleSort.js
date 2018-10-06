// Bubble sort (syncing sort)= put the numbers in order from least to greatest.

//LINK SOL 1: https://www.youtube.com/watch?v=8DqWmqF7yEI
//LINK SOL 2: https://www.youtube.com/watch?v=IJf5f2LsIEA


//SOLUTION 1:

 var ar = [1, 2, 3];

 function bubbleSort1(ar){
   let i, j, lim; //lim for limit.
   lim = ar.length; while (lim--) {
   //starts @ index of 2, then 1, 0, stops. As long as lim = ar.length it loops.
   for (i = 0, j = 1; i < ar.length; i++, j++) { //i & j are diff. b.c you are comparing.
     if (ar[i] > ar[j]) {
       //THEN SWAP. your make a temporary variable and set it to ar[i]. then ar[i] is ar[j]. last step is to make ar[j] temp. this swaps their places.
       temp = ar[i]; ar[i] = ar[j]; ar[j] = temp}
     }
}
return ar;
 }
console.log(bubbleSort1(ar));




//SOLUTION 2

let unsortedArr = [1, 8, 2, 5, 4] //STEP 1: Create the away.
let swapped; //STEP 2: lets us know if a swap happened. imp. b.c if no swaps happened, you know everthing is in order.

function bubbleSort(arr){ //STEP 3: Create your function. what is arr?
  swapped = false; //set initially to false.
  let end = arr.length - 1; //arr.length -1 b.c if it reaches the end it says 'run this loop', which then puts it out of bounds on the next loop.
  for (let i = 0, j = 1; i < end; i++, j++) {
    if (arr[i] > arr[j]){ //if arr[i] > then the index of the next value.
      swapped = true;
      [arr[i], arr[j]] = [arr[j], arr[i]]; //what is this for?
    }
}
end--
}

//Go through the unsortedArr untile swapped = false. Then you know all the numbers are in the right order.
do {
  bubbleSort(unsortedArr)
} while (swapped); //while swapped is true.



console.log(unsortedArr);
