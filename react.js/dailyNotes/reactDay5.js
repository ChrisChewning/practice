
1. KEYS in .MAP()
in your return:
the li key={i} needs to refer to the index.
Keys help React identify which items have changed, are added, or are removed. You have to have a key in react. Keys should be given to the elements inside the array to give the elements a stable identity.




1. STRINGIFY

A common use of JSON is to exchange data to/from a web server. When sending data to a web server, the data has to be a string. Convert a JavaScript object into a string with JSON.stringify().

The JSON.stringify() method converts a JavaScript value to a JSON string, optionally replacing values if a replacer function is specified or optionally including only the specified properties if a replacer array is specified.

example 1... JSON.stringify({ x: 5 });              // '{"x":5}'
example 2... JSON.stringify({ x: [10, undefined, function(){}, Symbol('')] });
// '{"x":[10,null,null,null]}'


2. SET STATE

Each time we do a CRUD operation, we need to set state in that function code block.


3. REQ.SESSION

As soon as you make contact with the express server, you start a session. In our case we make contact with the express server


we have two different servers
- React (api) server: 3000
- Express server: 9000


LOGIN
We don't start tracking things until the user is logged in. Then we SET our session. Session is a cookie that is being sent back and forth from the client and the server. Our express server is sending that cookie back with every single request.


4. credentials: 'include', has to be on every single fetch call you make. this takes the cookie from the browser and send it back and forth.


COMPONENT & CONTAINERS

1. component folder: presentational
2. container folder: functional
