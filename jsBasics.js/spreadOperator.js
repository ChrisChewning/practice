The spread operator allows you to pull elements out of an
array (=> split the array into a list of its elements) or pull the
properties out of an object. Here are two examples:
. const oldArray = [1, 2, 3];
. const newArray = [...oldArray, 4, 5]; // This now is [1, 2,
3, 4, 5];

Heres the spread operator used on an object:
. const oldObject = {
. name: 'Max'
. };
. const newObject = {
. ...oldObject,
. age: 28
. };
newObject would then be
. {
. name: 'Max',
. age: 28
. }
The spread operator is extremely useful for cloning arrays
and objects. Since both are reference types (and not
primitives), copying them safely (i.e. preventing future
mutation of the copied original) can be tricky. With the
spread operator you have an easy way of creating a
(shallow!) clone of the object or array. 


function sum(x, y, z) {
  return x + y + z;
}

const numbers = [1, 2, 3];
console.log(sum (...numbers));
// expected output: 6

//____________________________________________________________________________

function mult(a,b,c) {
  return a * b * c;
}
const sumz = [2, 4 , 5];

console.log(mult (...sumz));

//____________________________________________________________________________

const letters = ['a', 'b', 'c'];
const newLetters = [...letters, 'd', 'e', 'f'];
console.log(newLetters);


const person = {
  name: 'Max'
};
const newPerson = {
  ...person,
  age: 28
}
console.log(newPerson); //[object, Object] {age: 28, name: "Max"}
