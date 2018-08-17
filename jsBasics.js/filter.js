
// LINKS
// https://codeburst.io/learn-understand-javascripts-filter-function-bde87bce206
// https://www.youtube.com/watch?v=4_iT6EGkQfk



// // example 1...
let arr = [1, 2, 3, 4, 5, 6];
let even = arr.filter(val => {
  return val % 2 === 0;
});
console.log(even) //logs out [2,4,6]

//

let friends = ['bob', 'chris', 'jack'];
function friend(){ //could put (friends) here too.
   return friends.filter(function(val) {
    return val.length === 4;
  })
}
console.log(friend(friends));



let people = ['bob', 'chris', 'jack'];
function friendo(){
  return people.filter(val => val.length === 4);
}
console.log(friendo(people));



// // example 2...
const filterFunction = (...args) => { //look over args?
  return args.filter(el => el === 1)   //return true if el is equal to 1. this is built into filter?
}
console.log(filterFunction(1,2,3)); //will log [1] b.c the rest operator puts it into an array and you filtered through that data.
