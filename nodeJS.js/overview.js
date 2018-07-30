https://medium.com/createdd-notes/starting-with-authentication-a-tutorial-with-node-js-and-mongodb-25d524ca0359


NODE
a JavaScript free and open source cross-platform for server-side programming that allows users to build network applications quickly. It is a runtime environment that allows us to build server applications or computer applications using js. JS was originally built for the web but then node came along and allowed us to build servers.

- easily communicates with a database and allows us to run a JavaScript on a computer / server.
- Helps you read, delete, & update files.
- very fast - runs on the v8 engine.


Node.js is an open-source, cross-platform JavaScript run-time environment that executes JavaScript code server-side.


JavaScript now has the capability to do things that other scripting languages like Python can do.

Both your browser JavaScript and Node.js run on the V8 JavaScript runtime engine. This engine takes your JavaScript code and converts it into a faster machine code. Machine code is low level code which the computer can run without needing to first interpret it.- non-blocking code.

____________________________________________________________________________

EXPRESS
express is a framework, which is built on top of node. It allows us to create servers faster and more efficiently. It gives us extra power & tools.

What is Express?
It’s a web framework that let’s you structure a web application to handle multiple different http requests at a specific url.

Express is a minimal, open source and flexible Node.js web app framework designed to make developing websites, web apps, & API’s much easier.

Why use Express?
Express helps you respond to requests with route support so that you may write responses to specific URLs

Supports multiple templating engines to simplify generating HTML.

The nice thing about it is it’s very simple and it’s open-source



HOW TO USE EXPRESS
1. const express = require('express');
//we our using our module called express, fromthe node_modules folder to allow us to use its tools.
2. const app = express(); //app is an object, which has properties & methods.
//we need to initialize the express object.

now anytime you say app.something you are saying express...


____________________________________________________________________________

MODULE.EXPORTS
A module encapsulates related code into a single unit of code. When creating a module, this can be interpreted as moving all related functions into a file.
Exports is when you export it to another file so the other file can use it.
** To import, you have to require on the file you want to use it in.

____________________________________________________________________________

NPM (Node Package Manager)
The official package manager for Node and is bundled & installed automatically with the environment. NPM is full of modules. The 'largest ecosystem of open source libraries in the world.'

These are libraries built by the awesome community which will solve most of your generic problems. npm (Node package manager) has packages you can use in your apps to make your development faster and efficient.
json always has double quotes. It never has single quotes.
First thing: in your terminal type git init
module: a smaller package of information that will be used in a larger package.

____________________________________________________________________________

NODE MODULES
All the packages that are installed that your app uses.

Modules are the fundamental building blocks of the code structure. The module system allows you to organize your code, hide information and only expose the public interface of a component using module.exports. Every time you use the require call, you are loading another module.

____________________________________________________________________________

HOW TO USE NODE MODULES...
REQUIRE
The module loading mechanism in Node.js is caching the modules on the first require call. It means that every time you use require('awesome-module') you will get the same instance of awesome-module, which ensures that the modules are singleton-like and have the same state across your application.

Require will let us do 3 things:

load in modules that come with Node.js — example: http module, FS module
load in third party libraries that allows us to write less code — example: express.js
require our very own files. This will allow us to break up our application to multiple smaller files which is essential for building real-world apps.

____________________________________________________________________________



____________________________________________________________________________

MONGOD
mongod is the "Mongo Daemon" it's basically the host process for the database. When you start mongod you're basically saying "start the MongoDB process and run it in the background". mongod has several default parameters, such as storing data in /data/db and running on port 27017.

____________________________________________________________________________

MONGODB
- a web-scale database.

- mongo is the command-line shell that connects to a specific instance of mongod. When you run mongo with no parameters it defaults to connecting to the localhost on port 27017. If you run mongo against an invalid machine:port combination then it will fail to connect (and tell you as much).

____________________________________________________________________________

MONGOOSE
- a schema based solution to model your application data. The schema creates key:value pairs for a set of data types (ex: string, number, boolean)

- creates easy to use object reference for interacting with mongodb.

____________________________________________________________________________

NODEMON v. NODE ().js (ex: Node server.js) vs. NPM START

Nodemon is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.

nodemon does not require any additional changes to your code or method of development. nodemon is a replacement wrapper for node, to use nodemon replace the word node on the command line when executing your script.


* could you write nodemon server.js?

____________________________________________________________________________

NPM START
When you issue the command npm start from the root directory of your nodejs project, node will look for a scripts object in your package.json file. If found, it will look for a script with the key start and run the command specified as its value.

If your package.json does not have any scripts object or if the scripts object does not have a start key, it will run the command node server.js instead.

Npm scripts are pretty useful because they let you group together and run logically related commands. e.g. linters, minifiers etc.

____________________________________________________________________________

PACKAGE.json
package.json — remembers all packages that your app depends on and their versions
A package.json file affords you a lot of great things:

It serves as documentation for what packages your project depends on.
It allows you to specify the versions of a package that your project can use using semantic versioning rules.
Makes your build reproducible which means that its way easier to share with other developers.


PACKAGE LOCK JSON
package-lock.json is automatically generated for any operations where npm modifies either the node_modules tree, or package.json. It describes the exact tree that was generated, such that subsequent installs are able to generate identical trees, regardless of intermediate dependency updates.



____________________________________________________________________________
BASIC VOCAB.

MVC: Models, Views, controllers

Models — represents data, implements business logic and handles storage

Views — provides templates which are rendered and served by your routes

Controllers — defines your app routes and their logic. You main route might be index.js but you might also have a route called for example ‘/user’ so you might want to make a JS file that just handles that.




public — contains all static files like images, styles and javascript


app.js — initializes the app and glues everything together
