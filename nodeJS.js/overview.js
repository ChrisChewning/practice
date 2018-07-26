https://medium.com/createdd-notes/starting-with-authentication-a-tutorial-with-node-js-and-mongodb-25d524ca0359



NPM
These are libraries built by the awesome community which will solve most of your generic problems. npm (Node package manager) has packages you can use in your apps to make your development faster and efficient.
json always has double quotes. It never has single quotes.
First thing: in your terminal type git init
module: a smaller package of information that will be used in a larger package.



NODE
- easily communicates with a database and allows us to run a JavaScript on a computer / server.
- Helps you read, delete, & update files.
- very fast - runs on the v8 engine.

node is a runtime environment. It allows us to build server applications or computer applications using javascript. javascript was originally built for the web but then node came along and allowed us to build servers.

Node.js is an open-source, cross-platform JavaScript run-time environment that executes JavaScript code server-side.


JavaScript now has the capability to do things that other scripting languages like Python can do.

Both your browser JavaScript and Node.js run on the V8 JavaScript runtime engine. This engine takes your JavaScript code and converts it into a faster machine code. Machine code is low level code which the computer can run without needing to first interpret it.- non-blocking code.


EXPRESS
express is a framework, which is built on top of node. It allows us to create servers faster and more efficiently. It gives us extra power & tools.

HOW TO USE EXPRESS
1. const express = require('express');
//we our using our module called express, fromthe node_modules folder to allow us to use its tools.
2. const app = express(); //app is an object, which has properties & methods.
//we need to initialize the express object.


MODULE.EXPORTS
A module encapsulates related code into a single unit of code. When creating a module, this can be interpreted as moving all related functions into a file.
Exports is when you export it to another file so the other file can use it.
** To import, you have to require on the file you want to use it in.



NPM
the 'largest ecosystem of open source libraries in the world.'


MONGOD
mongod is the "Mongo Daemon" it's basically the host process for the database. When you start mongod you're basically saying "start the MongoDB process and run it in the background". mongod has several default parameters, such as storing data in /data/db and running on port 27017.

MONGODB
- a web-scale database.

- mongo is the command-line shell that connects to a specific instance of mongod. When you run mongo with no parameters it defaults to connecting to the localhost on port 27017. If you run mongo against an invalid machine:port combination then it will fail to connect (and tell you as much).

MONGOOSE
- a schema based solution to model your application data. The schema creates key:value pairs for a set of data types (ex: string, number, boolean)

- creates easy to use object reference for interacting with mongodb.


NODEMON v. NODE ().js (ex: Node server.js) vs. NPM START

Nodemon is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.

nodemon does not require any additional changes to your code or method of development. nodemon is a replacement wrapper for node, to use nodemon replace the word node on the command line when executing your script.


* could you write nodemon server.js?


NPM START
When you issue the command npm start from the root directory of your nodejs project, node will look for a scripts object in your package.json file. If found, it will look for a script with the key start and run the command specified as its value.

If your package.json does not have any scripts object or if the scripts object does not have a start key, it will run the command node server.js instead.

Npm scripts are pretty useful because they let you group together and run logically related commands. e.g. linters, minifiers etc.
