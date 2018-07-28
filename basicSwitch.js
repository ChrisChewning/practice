
SWITCH STATEMENT



4. Switch cases use strict comparison (===).



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



EXAMPLE 4: Strict equality.  ALSO: The default doesnt have to be at the end.

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
