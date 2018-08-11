
- React-DOM lets React interact with the HTML.

- AJAX stands for Asynchronous JavaScript and XML

- CORS allows two servers to talk to each other(?)
"We enabled cors, so we can allow our react application to make api calls to our server that is running on localhost:9000, which is our express api."

"SET UP CORS AS MIDDLEWARE, SO any client can make a request to our server"
const cors           = require('cors');


PROPS
When using class-based components use this.props.
When using functional (presentational)-based components use props.



ACCESS TOKEN
a way to tell that the api granted you permission for your user to interact with the api.


- URI
Uniform Resource Identifier (URI) is a string of characters used to identify a name or a resource on the Internet. A URI identifies a resource either by location, or a name, or both. A URI has two specializations known as URL and URN.


- URL is a useful but informal concept: a URL is a type of URI that identifies a resource via a representation of its primary access mechanism (e.g., its network "location"), rather than by some other attributes it may have. As such, a URL is simply a URI that happens to point to a resource over a network

.JS (ex: import App from './App';)
You don't need to put the .js extension on the end of your import b.c it's automatically add by our build workflow.



THE ROOT
IN app.js, ReactDOM.render(<App />), document.getElementById('root');   the root
is pointing to index.html, which is your only index.html you'll have. There you'll see <div id="root"></div>



CLASS, SUPER,

Javascript class is created with the class keyword.
You extend the info. in the component to the class by using the extends keyword. This extends from the import at the top of the page (the react library)

example...
import React, { Component } from 'react'  ('react is the reactl ibrary')




RENDER, RETURN
every component has to render or return some html code that can be rendered to the dom on the screen.


1. return (
  jsx is in here. your parentheses are needed b.c it allows jsx.
)




ERROR MESSAGE
"Only valid bearer authentication supported" means you need to go back to the spotify login page b.c the token(?) has expired.
