
//SPREAD OPERATOR IN A TODO LIST https://medium.com/@thejasonfile/using-the-spread-operator-in-react-setstate-c8a14fc51be1

1. Properties are like "variables attached to classes/objects."

2. Ajax call is a call to an API. jQuery uses ajax.
Ajax is a client-side script that communicates to and from a server/database without the need for a postback or a complete page refresh. The best definition I've read for Ajax is “the method of exchanging data with a server, and updating parts of a web page – without reloading the entire page.”


//SPREAD OPERATOR

2. Spread Operator - Used to split up array elements or object properties. different than push b.c push doesnt give you a new array.


//ex1: adding old elements into a new array.
ex1 Array: const newArray = [...oldArray, 1,2]


//ex2 {} is an object. you create a new object with a new property that has a key value pair.
ex 2 Object: const newObject = {...oldObject, newProp: 5}

3. Rest Operator




SPREAD
//THESE TWO ARE THE SAME...
function App1() {
  return <Greeting firstName="Ben" lastName="Hector" />;
}

function App2() {
  const props = {firstName: 'Ben', lastName: 'Hector'};
  return <Greeting {...props} />;
}
