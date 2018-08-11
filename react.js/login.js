//DIRECTIONS

 // So we haven't created the login component, so lets go ahead and do that, In this case it makes sense to contain all of our state for login with in the Login component, since the router will change the views for us.

____________________________________________________________________

//FRONT END LOGIN COMPONENT

import React, { Component } from 'react';

class Login extends Component {
  constructor(){
    super();
    this.state = {
      username: '',
      password: ''
    }
  }

  handleChange = (e) => {
    this.setState({[e.currentTarget.name]: e.currentTarget.value});
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const loginResponse = await fetch('http://localhost:9000/auth/login', {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify(this.state),
      headers:{
        'Content-Type': 'application/json'
        }
    });

    const parsedResponse = await loginResponse.json();

____________________________________________________________________

//PROPS.HISTORY.PUSH
//the history property is passed as our property for us by the Route component, and this will allow us to push to the '/movies' route. You can think of your history as a giant array, that contains all the paths the user has visited in the browser.

    if(parsedResponse.data === 'login successful'){
      this.props.history.push('/movies');
    }

  }
  render(){
  return (
    <form onSubmit={this.handleSubmit}>
      <label>
        Username:
        <input type="text" name="username" onChange={this.handleChange}/>
      </label>
      <label>
        Password:
        <input type="password" name="password" onChange={this.handleChange}/>
      </label>
      <input type='Submit'/>
    </form>

    )
  }
}

export default Login;


____________________________________________________________________

//BACK END
//So the backend we are setting our session in our route looks like the following:

router.post('/', async (req, res) => {
  console.log(req.session, ' this is session')


  try {
    const createdUser = await User.create(req.body);

    req.session.logged = true;
    req.session.username = req.body.username;


    res.json({
      status: 200,
      data: 'login successful'
    });



  } catch(err){
    console.log(err);
    res.send(err);
  }
});

// So now we have to on our react side send over our session cookie with every single request, fetch makes it really easy all we have to do is add a property to our options object in our fetch call that looks like the following

  getMovies = async () => {

    const movies = await fetch('http://localhost:9000/api/v1/movies', {
      credentials: 'include',
      method: 'GET'
    });
    const moviesJson = await movies.json();
    return moviesJson

  }

// So the credentials: 'include', will send over our session cookie for us on every request.
//
// We just have to add that property for every single api request, so whenever we want to communicate with our express server, we have to send our session cookie with to let our express server know that we are logged in.
