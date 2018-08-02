
Goal 1: Understand Props
 Props are similar to passed arguments to a function.


 You can define Props on your component just like you are setting a HTML attribute. Like we defined heading and subtitle above and then you can access them in your component by using this.props provided by React.

 Whatever prop you define on your component you can access them as this.props.whateverNameYouGivenToYourProp. You can also pass Numbers, Functions & javascript expressions to your prop by using {}.

 <MyHeading heading={1+1} subtitle={"this is a "+"subtitle"} />
 heading output will be 2






Goal 2: understand how to render out properties.

To write javascript inside a return statement you have to wrap it in brackets {}
So far we have returend inside our render function:

1. component < ... />
2. className =
3. {} which could wrap props or state.
4. your map key
5. your data from an API (quake.properites.title below)
example... <li key={i}> {quake.properties.title} </li>





To use the new state we defined in the componentDidMount or componentWillMount lifecycle method, use curly braces to bring in that state “{this.state.pictures}” (https://blog.hellojs.org/fetching-api-data-with-react-js-460fe8bbf8f2 step 3)




In the above code we are telling our React component to call this.changeName whenever user clicks on the div. The this.changeName used this.setState which is provided by React to update your component state. When we click the div this.changeName change our name from “Manoj” to “Your Name”. As soon as component’s state updates the render process runs again but this time with new value of this.state.name which is “Your name” and our text changes from “My name is Manoj” to “My name is You Name”.


example 1...

class MyComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "Manoj" //usually is empty but you could start it at something.
    };
    this.changeName = this.changeName.bind(this);
  }
  changeName () {  //function where you set the state to a key value pair. Now we can say this.state.name and it will output what you put on the right side of name: "Your Name"
    this.setState({
      name: "Your Name"
    });
  }

  //render from the onClick function.  Now since it is tied to ChangeName and ChangeName is tied to .state.name
  render () {
    return <div onClick={this.changeName}> My name is {this.state.name} </div>
      //when you click you fire off the changeName function, which changes the state of this.state.name
  }
}

example 2...
