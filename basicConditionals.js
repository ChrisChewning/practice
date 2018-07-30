
CONDITIONALS
https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals

IF ELSE IF ELSE STATEMENTS
if () {
} else if () [
] else {
}


let person = {
  name: 'tony',
  age: 20,
  driver: null
};

const isTony = () => {
if (person.age >=21) {
  return 'not tony'
} else if (person.age <21) {
  return 'tony'
}
}
console.log(isTony(person)); //logs tony


NESTED IF ELSE STATEMENTS (https://www.thoughtco.com/javascript-making-decisions-2037427)

var answer; //GLOBAL VARIABLE
if (a == b) { //IF A == B THEN CHECK IF A == C
  if (a == c) { //NESTED CONDITION
    answer = "all are equal";
  } else { //IF A == B AND A !== C
    answer = "a and b are equal";
  }
} else { //IF A IS NOT == B THEN CHECK...
  if (a == c) {  //CHECK IF A == C
    answer = "a and c are equal";
  } else {
    if (b == c) { //CHECK IF B == C
      answer = "b and c are equal";
    } else { //IF A !== B && B == C ...
      answer = "all are different";
    }
  }
}


____________________________________________________________________________

TERNARY OPERATOR (https://codeburst.io/javascript-the-conditional-ternary-operator-explained-cac7218beeff)

syntax: condition ? value if true : value if false

The condition is what you’re actually testing. The result of your condition should be true or false or at least coerce to either boolean value.
A ? separates our conditional from our true value. Anything between the ? and the : is what is executed if the condition evaluates to true.
Finally a : colon. If your condition evaluates to false, any code after the colon is executed.


let person = {
  name: 'tony',
  age: 20,
  driver: null
};
person.driver = person.age >=16 ? 'Yes' : 'No';
                  //condition   ? val if true : val if false



____________________________________________________________________________

SWITCH STATEMENT

EXAMPLE 1:
const getFruitByColor = (color) => {
    	switch (color) {
        	case "red":
        		return "apple";
        		break;
        	case "yellow":
        		return "banana"
        		break;
            case "orange":
                return "orange"
                break;
            case "green":
                return "pear"
                break;
        	default:
        	   return "grape"
    	}
    }

    var favoriteColor = "yellow";
    var fruit = getFruitByColor(favoriteColor);

    console.log("I want to eat a " + fruit); //"I want to eat a banana"
    console.log("I want to eat a " + fruit); //"I want to eat a grape.""




EXAMPLE 2:
    function getFruitByColor(color) {
    	switch (color) {
        	case "red":
        		return "apple";
        		break;
        	case "yellow":
        		return "banana"
        		break;
            case "orange":
                return "orange"
                break;
            case "green":
                return "pear"
                break;
        	default:
        	   return "grape"
    	}
    }

    var favoriteColor = "yellow";
    var fruit = getFruitByColor(favoriteColor);

    console.log("I want to eat a " + fruit);

    var favoriteColor = "purple";
    var fruit = getFruitsByController(favoriteColor);
    console.log("I want to eat a " + fruit); //grape


EXAMPLE 3: You can use more than one case in a switch.

function wknd () {
switch (plz) {
  case 4:
  case 5:
      text = "Soon it is the Weekend";
      break;
  case 6:
  case 7:
      text = "It is the Weekend";
      break;
  default:
      text = "Looking forward to the Weekend";
}
}
var plz = 2;
var soon = wknd(plz);
console.log(text);



EXAMPLE 4: Switch cases use strict comparison (===). ALSO: The default doesnt have to be at the end.

function electricity () {
switch (lights) {
  default:
      return "No value found";
    case 1:
        return "Off"
        break;
    case 2:
        return "On"
        break;
}
}
var lights = "OFF";
var room = electricity(lights);
console.log(room) //NO VALUE FOUND b.c switch uses strict equality. Note: the console.log has to here so it's after the variables you are testing.
