ARRAY METHODS (https://javascript.info/array-methods)


ADD ITEMS
arr.push(...items) – adds item(s) to the end
arr.unshift(...items) – adds items to the beginning.

arr.concat( , ) - joins the array with other arrays and/or items.
var arr1 = ["Cecilie", "Lone"];
var myChildren = arr1.concat(["Emil", "Tobias", "Linus"]);
var myChildren = Cecilie,Lone,Emil,Tobias,Linus


REMOVE ITEMS
arr.pop() – removes item(s) from the end
arr.shift() – removes an item from the beginning


ADD/REMOVE
arr.splice(start, how many) - a swiss army knife for arrays. It can do everything: add, remove and insert elements.
