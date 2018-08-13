// Define a function lengths that takes in one argument.
//     arr (array of strings)

// It returns a new array of numbers where each element is the length (number
// of characters) of the corresponding element in the input. For example:
//   lengths(['Kenneth', 'Ian', 'Ryan']) will output [7, 3, 4].


//Use a higher order function.
//ex:  .map(), .filter(), .reduce(),



let names = ['Jessamyn', 'Timothy', 'Daniel', 'Chris', 'Shazhad', 'Ryan'];

const lengths = (arr) => {
  return arr.map(name => name.length)  //.length is a property
  }

console.log(lengths(names));
//[ 8, 7, 6, 5, 7, 4 ]
