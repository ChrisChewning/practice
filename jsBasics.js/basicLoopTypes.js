
LOOPS
__________

FOR
Used most when you need to increment something (i++, i += 2, i %= 3 etc.)

for (let i = 0; i < 3; i++) {
  console.log(i);
}

____________________________________________________________________________

FOR EACH

____________________________________________________________________________

FOR IN
A for in loop iterates through the properties of an object and the positions in an array. We will learn about both arrays and objects in later lessons, but this kind of loop is useful to know regardless.

var colors = ["red", "white", "blue"];

for (var i in colors) {
  console.log(colors[i]);
}
//red, white, blue

____________________________________________________________________________

WHILE
I would use this loop when I am NOT SURE how many ITERATIONS I might need to carry out. Examples: Waiting for user to input correct input values and keep looping until he/she inputs the proper value.

var i = 1;
    while (i <= 10) {
        console.log(i);
        i++;
    }

____________________________________________________________________________

DO WHILE
Use when you need something guaranteed to run ATLEAST ONCE before I start verifying whatever it is that would make me wanna loop and do that code again. Example: ask a user for an input for the first time and then validate it. If wrong input given then loop back and ask for input again

var doritos = 100;
   do {
       console.log("With " + doritos + " Doritos left, I can eat.");
       doritos -= 20;
   } while (doritos > 0);

   console.log("My Doritos are gone now. I am sad. :( ");
//With 100 Doritos left, I can eat.
//With 80 Doritos left, I can eat.
//With 60 Doritos left, I can eat.
//With 40 Doritos left, I can eat.
//With 20 Doritos left, I can eat.
//My Doritos are gone now. I am said :(

NESTED LOOPS

____________________________________________________________________________

BREAK
While you are inside of a loop of any kind, JavaScript allows you to terminate the loop whenever you want via the break statement.

Lets try it by counting to 10 like before, but breaking after we output 5.

for (var i = 1; i <= 10; i++) {
        console.log(i);
        if (i == 5) {
            break;
        }
    }
//logs 1 2 3 4 5 on diff. lines.

____________________________________________________________________________

CONTINUE
With the continue statement, you can tell the browser to continue on to the next loop, without finishing the rest of the code block.

Let's say while printing the numbers from 1 to 10, you didn't want the numbers 3 and 7 to appear.

for (var i = 1; i <= 10; i++) {
       if (i == 3 || i == 7) {
           continue;
       console.log(i);
   }
