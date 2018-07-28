
EXAMPLE 1
var text = "";
var i;
for (i = 0; i < 10; i++) {
    if (i === 3) { continue; }

}
console.log("The number is " + i + ".");
//you'll get The number is 10. this is bc it gets to 9, then adds 1 to 10. since your log is outside the loop you only log that last one.
//If it's in the loop you'll get "The number is 1." it'll break to new line since it loops. Then "The number is 2." "The number is 4." etc.


EXAMPLE 2
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


EXAMPLE 3: Iterate through an array

var arr = [1,2,3,4,5]

for (i = 0; i < arr.length; i++) {
  console.log(i)
}
//0,1,2,3,4. doesn't get to 5 b.c it's less than the length? If it's <= it does get to 5.

// If you change i = 2, it goes 2,3,4
