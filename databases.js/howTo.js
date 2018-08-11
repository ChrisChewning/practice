HOW TO SAVE INFO TO DATABSE


1. SCHEMA HAS TO ALIGN WITH FORM INPUT 'NAME'


SPOTIFY PROJECT EXAMPLE:
==========================

MODELS/USER.JS

example...
const mongoose = require('mongoose');
const Party = require('./party');

const UserSchema = new mongoose.Schema({
  username: String,
  password: {type: String, required: true},
  hostedParties: [Party.schema]    //THIS Party.schema means now all of the data in the party scheam will be tied to the data the server has on the user.

})
module.exports = mongoose.model('User', UserSchema);

__________________________________


LOGIN COMPONENT

handleChange = (e) => {
  this.setState({[e.target.name]:e.target.value});
}
render() {
  console.log('this is props for Login', this.props)
  return(
    <div>
    <form onSubmit={this.handleSubmit}>
      <label>
        Username:
        <input type='text' name='username' placeholder='username'
          //^^ THIS NAME HAS TO BE USERNAME FOR THE MODEL TO READ IT.

          onChange={this.handleChange}/>
      </label>
      <label>
        Password:
        <input type='password' name='password' placeholder='password'
          //^^ THIS NAME HAS TO BE PASSWORD FOR THE MODEL TO READ IT.
          onChange={this.handleChange}/>
      </label>
      <input type='Submit' value='Login'/>
    </form>
  </div>
  )
};
}

export default Login;



2. REMEMBER: in your server.js, put your controllers and routes (app.use) here. Update them when you add controllers and models.



3. IN YOUR CONTROLLERS, REQUIRE YOUR MODELS.

SPOTIFY PROJECT EXAMPLE...

const express = require('express')
const router = express.Router();
const Party = require('../models/party'); //requires the party model.
const User = require('../models/user'); //requires the user model.

//Get user's profile information by their id.
router.get('/:id', async (req, res, next) => {
  try {
    const foundParty = await User.findById(req.params.id);
    res.json({
      status: 200,
      data: getUser
    })
  }
})


4.
