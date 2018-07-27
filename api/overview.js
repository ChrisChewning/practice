API - Application Programming Interface.
An API isn’t the same as the remote server — rather it is the part of the server that receives requests and sends responses.


AJAX
One way we can communicate with APIs.
Ajax is a client-side script that communicates to and from a server/database without the need for a postback or a complete page refresh. It is “the method of exchanging data with a server, and updating parts of a web page – without reloading the entire page.”


CORS
Basically allows our server to respond to requests from any client.
Any website can make a request to our server.

You can configure our CORS to accept requests from servant websites (ex: if you are using an API key.)

to enable CORS
1. NPM install cors.
2. In server.js require it.     const cors = require('cors');
3. Put it in your  middleware.   app.use(cors());


POSTMAN
Allows you to simulate http server requests. There is no need for front end to test. Just testing if API is sending what we are asking for.
