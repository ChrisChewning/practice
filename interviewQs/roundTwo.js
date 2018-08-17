Verbally tell me all the steps that go in to setting up a server in Express.

1. Create your folder structure
2. Git init & Npm init (creates package.json).
3. Npm install express, express-session, body-parser, bcrypt, etc.
4. Create your server:
   - const express = require('express');
     const app = express
     const port = 3000

5. Set up your server and check it.
   - app.listen(port, function () {
     console.log("Server is running on " + port + "port");
   })
____________________________________________________________________________

What kind of dependencies will we need? What is a get method? post? put? (CRUD). Describe the folder structure as well.
 get = gets
 post = posts
 put = updates (edits)
 delete = deletes
 patch = ?

____________________________________________________________________________

Draw out the MVC framework and explain what happens when the client fills out a form and clicks submit. Assume that we have mongodb connected. Talk about what req.body is. How is data passed from a form (on the client side) into a database? How is it then accessed on a get request?


Models - schemas, how things will be structured to look in the end.
Views - ejs in express, templates in django.
Controllers - The actual routes.


When you submit a form it has to link up with the model.



____________________________________________________________________________


What is  middleware? What kinds have we used? Why?

- Middleware is any number of functions that are invoked by the Express.js
  routing layer before your final request handler is, and thus sits in the middle between a raw request and the final intended route. It basically lets you configure how your express application works.

- Bcrypt for authentication, method-override to use post and put routes.

____________________________________________________________________________

It is a common saying that React js makes development more efficient and is supposed to make development easier. Do you agree? If so, why?

-Yes. It allows you to localize functionality, data, and styling. It also works best in low bandwith areas.


What is the usefulness of using any sort of framework or library over simply using html/css/js?

- Reactive and more responsive
- Features
-

____________________________________________________________________________

What is the difference between a smart component and a presentational (dumb) component?


- Smart: Sets and passes state.

- presentational: "Functional componenet". Receive data and callbacks exclusively via props.

____________________________________________________________________________

What is the difference between props and state?

- props are immutable, state is mutable.

Describe how data is passed between React components? Talk about it in terms of state and props. Build an analogy to explain this to me.

-

- analogy: taking pictures of a reciple in action. You set state at empty usually. You add things in and take a picture of different stages of it (states). But then when you want to actually serve it or part of it, its immutable.

____________________________________________________________________________
Higher Order Functions (also: iteration methods)

What is object oriented programming? What is functional programming? Is one more beneficial than the other? ( i am looking for a concept answer with examples) hint: React uses both. Though as time will progress it will become more and more functional.


Functional programming (often abbreviated FP) is the process of building software by composing pure functions, avoiding shared state, mutable data, and side-effects. Functional programming is declarative rather than imperative, and application state flows through pure functions.

Contrast with object oriented programming, where application state is usually shared and colocated with methods in objects.



What are the uses and examples of Reduce() Filter() Map() ?

filter() - filter uses callback and can return an element for every array.

map() - map uses a callback to return a new array.in react, you have 2 parameters. The syntax is (val, index) where val is the current value being processed and the index is the current index being processed.

reduce() - reduce uses a callback to reduce the array to one single value. It takes in two arguments, sum and element. sum is the last returned value and element is the element you are adding or subtracting or whatever.




filter example...
//es5
var sample = [1, 2, 3]
var result = sample.filter(function(elem){
    return elem !== 2;
})
console.log(result) [1,3]
// es6
var result = sample.filter(elem => elem !== 2)
/* output */ [1, 3]


map example...
var sample = [1, 2, 3] // i am never gonna change Boo! Yeah
// es5
var mapped = sample.map(function(elem) {
    return elem * 10;
})
// es6
let mapped = sample.map(elem => elem * 10)
console.log(mapped);
/* output */
[10, 20, 30]

reduce example...
var sample = [1, 2, 3]
// es5
var sum = sample.reduce(function(sum, elem){
    return sum + elem; //0 is your sum + 1 = 1. then loop again. 1 is your sum + 2. then loop again. 3 is your same + 3 is 6.
})
// es6
var sum = sample.reduce((sum, elem) => sum + elem)
console.log(sum)


5 Array Methods.

access - concat(), includes(), indexOf(), lastIndexOf(), slice(), toString(), toSource() <-- what is this?
mutate - pop, push, shift, unshift, sort, splice, fill, reverse, copyWithin
____________________________________________________________________________

What is an API? How do you make your express or django app into an API?

Application Programming Interface. Using a database and server means you're able to capture data. What makes django or express into an API is receiving requests and sending responses.


REST - What this means is that REST applications have a standard set/structure of HTTP resources that provide data to the clients from the server based on the HTTP method used.
