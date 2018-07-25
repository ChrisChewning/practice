


____________________________________________________________________________

 APP.USE()
 type app.use() to specify middleware as the callback function.

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

NPM START v. NODEMON v. NODE Server.js


nodemon - refreshes
npm start -
node server.js -

____________________________________________________________________________

NODE PACKAGE MANAGER (npm)
the 'largest ecosystem of open source libraries in the world.'

____________________________________________________________________________

NPM INIT
Creates package.json. ... The default name for this file is index.js unless you created server.js or something else.js in not in a folder.

____________________________________________________________________________

PACKAGE.JSON
All npm packages contain a file, usually in the project root, called package.json - this file holds various metadata relevant to the project. This file is used to give information to npm that allows it to identify the project as well as handle the projects dependencies. It can also contain other metadata such as a project description, the version of the project in a particular distribution, license information, even configuration data - all of which can be vital to both npm and to the end users of the package. The package.json file is normally located at the root directory of a Node.js project.

____________________________________________________________________________

Middleware
    body-parser
    method-override


what is middleware and what isnt?...

"dependencies": {
  "bcrypt": "^3.0.0",
  "body-parser": "^1.18.3",
  "chalk": "^2.4.1",
  "ejs": "^2.6.1",
  "express": "^4.16.3",
  "express-session": "^1.15.6",
  "foreman": "^3.0.1",
  "helmet": "^3.13.0",
  "heroku": "^7.7.4",
  "method-override": "^3.0.0",
  "mongodb": "^3.1.1",
  "mongoose": "^5.2.5",
  "nodemon": "^1.18.3"
}
