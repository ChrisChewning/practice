//PRIMITIVE TYPES: Number, String, Null, Undefined, Object, Symbol.

const hasKids = true;
console.log(typeOf hasKids) //logs to boolean

const car = null;
console.log(typeOf car) //logs to object. this is a bug though.

let test;
console.log(typeOf test) //undefined.

const sym = Symbol();
console.log(typeOf sym) //symbol

const names = ['Chris', 'Christopher']
console.log(typeOf names) //object.

Date will be typeOf object too.



//TYPE CONVERSION

1. number to string
val = 5; 
val = String(5)
val = String(5+5) //String around an expression.

2. bool to string
val = true;
val = String(true);

3. date to string
val = new Date();
val = String(new Date());

4. val = String([1,2,3,4])

toString() Method

val = (5).toString(); //number to string
val = (true).toString(); //bool to string

=========== STRING TO NUMBER =============
val = '5'; //string
val = Number('5'); //number

val = parseInt('5') //number. parses string to number. Parses to integer. so 5.5 would be 6.
val = parseFloat(100.30) //100.3


Note: .length only works on numbers
Note: .toFixed() only works on numbers. It's for decimals, so if you put (2) it'd be 2 numbers.
        ex: console.log(val.toFixed(2));


=========== TYPE COERCION =============

const val1 = '5';
const val2 = 6;
sum = val1 + val2; 
console.log(sum); //56  typeof = string. JS changes the 6 to a string.

const sum = Number(val1 + val2); //56 typeof number.