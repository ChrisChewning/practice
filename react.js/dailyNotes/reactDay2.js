
props
What are .props?
Properties! Every component has .props

Properties are immutable. That is, they cannot be changed while your program is running. Like const!
We define properties in development and pass them in as attributes to the JSX element in our .render method.
First we can pass multiple properties to our component when its rendered in src/index.js..

import ReactDOM from `react-dom`
import Hello from './App.js'

ReactDOM.render(
  <Hello name={"Nick"} age={24} />, //YOU HAVE TO PUT {} in the render method.
  document.getElementById('root')
)
Then in our component definition we have access to both values...

class Hello extends Component {
  render () {
    return (
      <div>
        <h1>Hello {this.props.name}</h1>
        <p>You are {this.props.age} years old</p>
      <div>
    )
  }
}
NOTE: The return statement in render can only return one DOM element. You can, however, place multiple elements within a parent DOM element, like we do in the previous example with <div>.


============================================================================

STATE
  Values stored in a component's state are mutable attributes.

  Like properties, we can access state values, val for example, using this.state.val
  Setting up and modifying state is not as straightforward as properties. It involves explicitly declaring the mutation, and then defining methods to define how to update our state....





  ============================================================================




OUR GOALS TODAY

1. HOW TO INTERACT WITH FORMS.


2. LIFT UP STATE
bring state from child component to parent component.

ex: when you login, you want to be taken to a new screen.


- Only thing to define inside the constructor is the state.
- Dont define function inside the render
- render can be above things (order doesn't matter) but it's nice to have it as the last code block.

- To write javascript inside a return statement you have to wrap it in brackets {}

-to access any value, use state. This gives you that value at any given time.
- onChange can update our state too.
- this.setState always calls a re-render. this is good with login forms.
-setState is the last thing you want to do in your render since


3. STATE v. STATELESS
Stateful components are always class components. As previously mentioned, stateful components have a state that gets initialized in the constructor.

// Here is an excerpt from the counter example
constructor(props) {
  super(props);
  this.state = { count: 0 };
}

Stateless components



4. API LifeCycle Methods
you have 3:
Constructor, componentDidMount and Render.


5. SUPER & INHERITING CLASSES

*NOTE: You have to use the super() method if you are using the constructor() method AND extending the class. This is b.c the code is like "what are you extending from?"
It simply executes the parent constructor.

class Human {
constructor() {
  super()
  this.gender = 'male';
}

printGender() {
  console.log(this.gender);
}
}


class Person extends Human {
  constructor() {
    this.name = 'Max';
  }
}

printMyName() {
  console.log(this.name);
}
}

const person = new Person();
person.printMyName();
person.printGender();
