
//REACT LOGIN WITH A SERVER.


// 1. In functional (stateless) componenets you cannot use state. It has to be props. It cannot be this.props either I believe.

//2. Your login container needs to set state every time something is typed in the username or password input boxes.

//3.


import React, {Component} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';

class Login extends Component{
  constructor(){
    super();
    this.state = {
      username:'',
      password:''
    }
  }

//Your login button has a handleSubmit function tied to it. At the bottom of your code, you'll see <form onSubmit={this.handleSubmit}> You need to do a couple things in this function.
//First, prevent it from refreshing automatically.
//Second, you need to fetch your backend server. When you do so, your optional argument needs to include the post method since you are creating, or posting, data.

//


// ======================= HANDLE SUBMIT FUNCTION ========================
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
}

// ======================= LOGIN DATA ========================
//STEP 1 above was to fetch a post request to the server.
//STEP 2 is to parse the login respone from the server to json.
//STEP 3 is to check the json data against the server's data?

    const parsedResponse = await loginResponse.json();
    console.log(parsedResponse, 'this is our parsed data at login');
    if(parsedResponse.data === 'login successful'){
      // this.props.history.push('/profile');
      //Directs to spotify login ,then directs to profile page
      window.location.assign('http://localhost:9000/spotify/login')



// ================= IF PW OR USERNAME IS INCORRECT ===================
    } else if(parsedResponse.data === 'Password incorrect'){
      alert('Password Incorrect')
    } else if(parsedResponse.data === 'Username incorrect'){
      alert('Username Not Found. Please Register')
    }

    }


// ======================= UPDATE THE FORM ========================
//handleChange function is to update the form as you type it in.
//We are using computed Property Names, which basically allows you to assign variables that can be calculated when updating the value of a property. Same thing as the es5 version below.
//this handleChange(e) is really important because you are updating your state basead on the form input. This is the single source of truth in the login component.

  handleChange = (e) => {
    this.setState({[e.target.name]:e.target.value});
  }


//One thing in your render can be your style. For this one it's the image.
  render() {
    console.log('this is props for Login', this.props)

// ======================= STYLE THE IMAGE ========================
    const style={
      width: '200px',
      height: '200px',
      borderRadius: '50%',
      marginBottom: '50px',
    }



    return(

      <div className="loginRegister">


{/*  ======================= THE IMAGE ======================== */}
<div className="loginRegisterImage">
          <img style={style} src="https://images.unsplash.com/photo-1483821838526-8d9756a6e1ed?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f2ee5af66743fa8159bcce66cdc57428&auto=format&fit=crop&w=2768&q=80" />
</div>


{/* ======================= THE FORM ======================== */}
{/* IN YOUR RETURN, you tie your form onSubmit and onChange event listeners(?) to the functions you created above. Data flows top-down. */}

      <form onSubmit={this.handleSubmit}>
        <label>
          Username:
          <input type='text' name='username' placeholder='username' onChange={this.handleChange}/>
        </label>
        <label>
          Password:
          <input type='password' name='password' placeholder='password' onChange={this.handleChange}/>
        </label>
        <input type='Submit' value='Login'/>
      </form>
    </div>
    )
  };
}

export default Login;
