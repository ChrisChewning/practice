
NET NINJA TUTORIAL
1. mkdir and cd into directory.
2. npm init and go through the steps.
3. create-react-app <name of folder> ex: create-react-app showtime_react
  -note: it comes with
    "react": "^16.4.2",
    "react-dom": "^16.4.2",
    "react-scripts": "1.1.4"

4. npm install --save react-router-dom

   -note: you don’t need to install or configure tools like Webpack or Babel.
    They are preconfigured and hidden so that you can focus on the code.


5. cd into the folder and npm start (or npm run start?)
 -note: should be on http://localhost:3000/)




DONT NEED TO DO THIS....
5. create a webpack.config.js file.
- in your webpack.config.js you will require path var path = require('path'). This gives us the path module provided by nodejs. This allows us to get the current directory and other things.

- in your webpack.config.js file you will put your module.exports). this exports all of the settings for webpack.
