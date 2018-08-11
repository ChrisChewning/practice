——————————SETUP————————

*create your folder setup and server.js file, which is not in a folder.

1. Make files and folders for everything first.

2. git init.

2. npm init. This comes first. It creates your package.json. This is the file that lets us know what dependencies we are using in this project.

3. npm install express. This allows us to create the server. Check it’s in the package.json file.

4. NPM install ejs, mongoose, method-override, body-parser, etc., etc.

NOTE: Don’t need to install nodemon b.c it’s globally installed. This allows the server to keep updating when you add information in your files.

5. Git init & create repo.

Note: you can do your npm install first and then be inside the main part of your folder and install the others at once. Ex:  npm install express ejs


Now we have a node module folder with all the things to help us run express, which helps us create a server. We also have it on GitHub.


——————————FILE————————

1. In your server.js file, create global variables & your port.

const express = require('express')
const app = express();
Const port = 3000;

app.listen(port, function () => {
  console.log('listening on port', port);
});

2. Check your server on your terminal through  nodemon. Anything in the console.log() will be seen in your terminal. In your browser, go to localhost:____.  To cancel out CTRL C

3. Remember req = request. res = response.
    Get = a request for the server to get data from a file.
    Post = something written on a page.

app.get('/superheroes/:index', (req, res) => {
   console.log() //will show up on terminal.
   res.send(superheroes[req.params.index]);

Note: req. = request.
         Params = paramaters
         Index = allows you to access it by index #s.

 });

app.get('/superheroes/:index', (req, res) => {
    console.log() //in terminal
    res.send(superheroes); //sends the whole object not broken up.

});

———————— MODULE———————
1. Create a folder called models.
2. In the models folder create a .js file.
// 3. Put a module in it. don't think this is the right terminology.
4. At the bottom of the file type
module.exports = filename (no need for .js here);

———————— SERVER.JS ————————

MODULES need to be capitalized when referring to them in the server.js file.

Ex: const PartyPotensh = require('./models/partyPotensh');

*if you went to res.send the module it needs to be capitalized too.

Ex: app.get('/fruits', (req, res) => {
res.send(Fruits)
})


————————EJS FILES———————

1. Put your html boilerplate in an ejs file.
     - index.ejs is like a homepage.
     - show.ejs is like a keyword for a certain path in 	the website.


2. Go to your server.js file. You need a res.render(‘file name.ejs’), { }  part bc it has to render the ejs so the browser can read it as html.

    app.get('/partyPotensh/:index', (req, res) => {
  res.render('show.ejs', {
    partyPotensh: PartyPotensh[req.params.index]
  })
    //give me partyPotensh on the page called show.ejs
});

/:index allows you to get the index of the array.
/:  without anything else shows the whole object.


3. <%=  %> shows on the browser if javascript.
    <%   %> does not show on the browser. If javascript. ALL HTML WILL SHOW without either.

Note: If you use <%= you don’t use =%>

example…
<h2>Peeps Name: <%= partyPotensh.name %></h2>
   <h2>Peeps Spirit Animal: <% partyPotensh.spiritAnimal %></h2>


———————— TO ADD CSS ———————
1. In your server.js (not controllers)...
app.use(express.static ’public’));
