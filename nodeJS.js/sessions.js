
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



SESSIONS -

SESSIONS SECRET - The secret is used to hash the session with HMAC. The session is then protected against session hijacking by checking the fingerprint against the hash with the secret. Withouth the string, access to the session will be denied.


Password Hash
Salt in password hash
how to connect css to express app?
Types of errors you have commonly seen. And their possible solutions.
