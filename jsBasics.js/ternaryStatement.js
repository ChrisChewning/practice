

FORMAT:
condition ? value if true : value if false

// Use ternary operators to set a value to a variable, or to reduce code if necessary.
// Use if-else statements for everything else.


TERNARY

EXAMPLE 1:
person.driver = person.age >=16 ?    'Yes'     :    'No';
          condition               code if yes     code if no.

(IF/ELSE WAY)
if (person.age >= 16) {
  person.driver = 'Yes';
  } else {
  person.driver = 'No';
          }




EXAMPLE 2:
let isStudent = true;
let price = isStudent ? 8 : 12
console.log(price);  // 8




example....


class App extends Component {
  constructor(){
    super();

    this.state = {
      logged: false,
      username: ''
    }
  }
  login = (username) => {
    this.setState({
      logged: true,
      username: username
    })
  }
  render() {
    console.log(this.state)
    return (
      <div className="App">
        {/* if this.state.logged is true then show the MainContainer username. If not show the Login  */}
        {this.state.logged ? <MainContainer username={this.state.username}/> : <Login login={this.login}/>}
      </div>
    );
  }
}
