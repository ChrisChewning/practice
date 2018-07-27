____________________________________________________________________________

 APP.USE()
 tapp.use() specifies middleware as the callback function.

 Bind application-level middleware to an instance of the app object by using the app.use() and app.METHOD() functions, where METHOD is the HTTP method of the request that the middleware function handles (such as GET, PUT, or POST) in lowercase.

 This example shows a middleware function with no mount path. The function is executed every time the app receives a request.

 var app = express() //basically app is for all of express.

____________________________________________________________________________

APP.LISTEN()
This app starts a server and listens on port 3000 for connections.


example:

option 1:
var port = 3000;
app.listen(port, () => {
  console.log('App is listening on port 3000');
});


option 2:
app.listen(3000, () => {
  console.log('App is listening on port 3000');
});


option 2: var port = process.env.PORT||config.port;
app.listen(port, ()=>{
    console.log();
    console.log(chalk.green("What's up? ")+chalk.grey(`Listening on port ${port}`))
});

____________________________________________________________________________

REQ, RES

app.get('/', (req, res) => {

  //req (request) is what you are requesting to the server.

  //res (response) is what you are sending back to the client through the browser. The server always has to send a response back to the client. Doesn't have to perform the request but it does have to send a message back.

  // req is an object containing information about the HTTP request that raised the event. In response to req, you use res to send back the desired HTTP response.

  // Those parameters can be named anything.
