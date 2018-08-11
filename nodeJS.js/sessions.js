


____________________________________________________________________
HOW TO USE...

1. In server.js:

const session = require('express-session');

//set up our session. this is an object with a lot of properties.
//the minimum you have to do is set up a secret, which is .
//resave is a property on our session that says
app.use(session({
  secret: 'this is a random secret string that you make up',
  resave: false, //only save when the session object has been modified.
  saveUninitialized: false //useful for login sessins. we only want to save when we modify the session. Always use this. It reduces server storage and complies with laws.
}))

____________________________________________________________________

SESSIONS

SESSIONS SECRET - The secret is used to hash the session with HMAC. The session is then protected against session hijacking by checking the fingerprint against the hash with the secret. Withouth the string, access to the session will be denied.


PASSWORD HASH - 


____________________________________________________________________

HOW TO DESTROY SESSION

In your authController...

router.get('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      res.json({
      status: 404,
      data: 'log out unsuccessful',
    });
    } else {
      res.json({
      status: 200,
      data: 'Logout successful'
     })
   }
 })
})

____________________________________________________________________

- YOUR LOGIN INFO WILL SHOW UP ON YOUR TERMINAL.
____________________________________________________________________

- YOUR SESSIONS ARE USED IN YOUR SERVER.JS UNDER DB

//REQUIREMENTS
//...other requirements and then...
const cors = require('cors');
const session = require('express-session');

//DATABASE
require('./db/db');

// SESSIONS
app.use(session({
  secret: 'cantTellYou',
  resave: false, //only save when the session object has been modified.
  saveUninitialized: false,  //useful for login sessins. we only want to save when we modify the session. Always use this. It reduces server storage and complies with laws.
}))

//CORS
const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true,
  optionsSuccessStatus: 200,
}
app.use(cors(corsOptions));
