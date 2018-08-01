
REACT
Javascript libraray (not framework) for creating user interfaces. These can be full, single-page applications or certain parts of websites (i.e. search form).

React was created by Jordan Walke, a software engineer at Facebook. He was influenced by XHP, an HTML component framework for PHP.[8] It was first deployed on Facebooks newsfeed in 2011 and later on Instagram.com in 2012.[9] It was open-sourced at JSConf US in May 2013.

React Native, which enables native Android, iOS, and UWP development with React, was announced at Facebooks React.js Conf in February 2015 and open-sourced in March 2015.

On April 18, 2017, Facebook announced React Fiber, a new core algorithm of React framework library for building user interfaces.[10] React Fiber was to become the foundation of any future improvements and feature development of the React framework.[11][needs update]

Complex React applications usually require the use of additional libraries for state management, routing, and interaction with an API.


Like the browser code in React is rendered through Virtual DOM while
React Native uses Native APIs to render components on mobile.

Component-based, very fast due to the DOM, Facebook created.

____________________________________________________________________________

WHAT WE WRITE  IN

JSX - Allows us to write HTML like syntax, which gets transformed to lightweight JavaScript objects.

We dont write these in html or js. We are writing in jsx. It is javascript and xml. This allows us to combine javascript and html. Once these components are required in the browser they are inserted into the DOM.

So we write it in jsx and es6 but our browser understands vanilla js. Babel is your middleware that transforms the code into normal js.






BABEL: YOUR TRANSPILER TO CONVERT YOUR CODE
Its main work is to translate browser-unsupported grammar to ES5. It looks at all our of source javascript (jsx es2015, etc.) and combine it all together to:
1. reduce http requests.
2. transform any jsx or 2015 code into js.
3. look at css for us.

how to use?
1. you can add it through the head. ex: <script type="text/babel" src="index.js">  (<script type> transforms the text type. src= references the external file.)
2. npm install



WEBPACK:
Webpack is a dependency analyzer or module bundler that gets modules with complex dependency build into bundles.

For example, module A requires B as depedency, module B require C as dependency, then webpack will generate a dependency map like C -> B -> A. real-world condition is much more complicated, but keep in mind that Webpack is a dependency analyser to Talking about its

When babel is transpiling this code into browser-readable code, webpack works on top of javascript. Webpack use loaders, which load different types of resources from origin code into javascript. When we need to handle ES6 or ES7 or Typescripts, we use babel-loader to get this resources done.

how to use?
npm install webpack  webpack dev-server
Needs a webpack config file



CONFIG.JS (https://medium.com/javascript-training/beginner-s-guide-to-webpack-b1f1a3638460)
A configuration file in Webpack is basically a common.js module. The config file is a place to put all of your configuration, loaders (explained later), and other specific information relating to your build.

*note: a common.js module is ?? Like the server.js file in Node we have been using??

example:
module.exports = { //loads another module to whatever page you require it at.
  entry: "./app.js", //name of the top level file or set of files that we want to include in our build, can be a single file or an array of files.
  output: {
    filename: "bundle.js" //an object containing your output configuration. In our build, we only specify the filename key (bundle.js) for the name of the file we want Webpack to build.
  }
}


Then go to Terminal and type webpack.
Once a webpack.config file is present, the webpack command will build your application based on the configuration made available in the file.




LOADERS
Loaders are how Webpack learns new functionality.

From the documentation: “Loaders allow you to preprocess files as you require() or “load” them. Loaders are kind of like “tasks” are in other build tools, and provide a powerful way to handle frontend build steps. Loaders can transform files from a different language like CoffeeScript to JavaScript, or inline images as data URLs. Loaders even allow you to do things like require() css files right in your JavaScript!”

example...

    module: {
        loaders: [ //loaders property is an array. It has diff. loaders in it, which are object. we have two here.
            {
                test: /\.js$/,  //regular expression looking for any js file extention (or es2015). it'll convert these to normal js.
                include: path.resolve(__dirname, 'src'), //which directory to run on. We don't want it to run on all directories. Include the directory of path.resolve, current directory, then the source folder.
                loader: 'babel-loader', //using the babel-loader
                query: { //says which presets to use.
                    presets: ['react', 'es2015'] //you could just put react or just es2015.
                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader' //these are piped together. couldn't tell if it was | or !
            }
        ]
    }

____________________________________________________________________________

COMPONENT
A component is a reusable piece of code, which defines how certain features should look and behave on the UI (user interface). For example, a button is a component.

Components let you split the UI into independent, reusable pieces, and think about each piece in isolation.

You write code for all such components separately. Then combine those under one container, which in turn is a React component itself. This way you can create reusable components and your final app will be a collection of separate components working together.

example:
a button, search component, directory component, signup component.


____________________________________________________________________________
COMPONENT TYPES

1. Functional Components (aka Stateless Components)

eample...
function Welcome(props) { return <h1>Hello, {props.name}</h1>; }

This function is a valid React component because it accepts a single “props” ("properties") object argument with data and returns a React element. We call such components “functional” because they are literally JavaScript functions.

Note: Always start component names with a capital letter.

React treats components starting with lowercase letters as DOM tags. For example, <div /> represents an HTML div tag, but <Welcome /> represents a component and requires Welcome to be in scope.


2.


We’ve learned that a React app is a collection of various components, structured as a nested tree. Thus, we require some sort of mechanism to pass data from one component to other. Those are props.


____________________________________________________________________________
COMPONENTS VOCABULARY

React.Component — The way in which you create a new component.

render (method) — Describes what the UI will look like for
the particular component.

ReactDOM.render — Renders a React component to a DOM node.


Virtual DOM — A JavaScript representation of the actual
DOM.


constructor (this.state) - The way in which you establish
the initial state of a component.



state — The internal data store (object) of a component.


setState — A helper method used for updating the state of a
component and re-rendering the UI


defaultProps — Allows you to set default props for your component.

Component LifeCycle
  - componentDidMount — Fired after the component mounted
  - componentWillUnmount — Fired before the component will unmount
  - getDerivedStateFromProps - Fired when the component mounts and
whenever the props change. Used to update the state of a
component when its props change

____________________________________________________________________________

Events
  - onClick
  - onSubmit
  - onChange

____________________________________________________________________________

PROPS
The data which is passed to the child component from the parent component.
We can pass arbitrary data to our component using a props object. Every component in React gets this props object.

PROPS is The data which is passed to the child component
from the parent component.

Handle state in the highest most parent component which needs to use the specific data, and if you have a child component that also needs that data, pass that data down as props.


example 1...

class HelloUser extends React.Component {
  render() {
    return (
      <div> Hello, {this.props.name}</div>
    )
  }
}

//here, you have an attribute name with the value Tyler.
//this.props.name is Tyler
ReactDOM.render(<HelloUser name="Tyler"/>, document.getElementById('root'));


example 2...

//PARENT COMPONENT
class FriendsContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state = { //our initial state.
      name: 'Tyler McGinnis',
      friends: ['Jake Lingwall', 'Sarah Drasner', 'Merrick Christensen']
    }
  }
  render() {
    return (
      <div>
        <h3> Name: {this.state.name} </h3>  //passes part of the initial state to this component.
        <ShowList names={this.state.friends} /> //passes the friends part of the initial state to this component.
      </div>
    )
  }
}

//CHILD COMPONENT
class ShowList extends React.Component {
  render() {
    return (
      <div>
        <h3> Friends </h3>
        <ul>
        //map creates a new array, calls our callback function on each new array, & fills each new array with the results.
          {this.props.names.map((friend) => <li>{friend}</li>)}
        </ul>
      </div>
    )
  }
}

//create a new array here...
const friends = ['Jake Lingwall', 'Sarah Drasner', 'Merrick Christensen'];
const listItems = friends.map((friend) => {
  return "<li> " + friend + "</li>";
});

console.log(listItems);
// ["<li> Jake Lingwall</li>", "<li> Sarah Drasner</li>", "<li> Merrick Christensen</li>"];


____________________________________________________________________________

propTypes — Allows you to control the presence, or types of
certain props passed to the child component.

____________________________________________________________________________

STATE (think: data)
A user interface has a lot of states (data), which makes managing a UI difficult.

React helps with this b.c each component has the ability to manage its own state and pass its state down to child components if needed.

You can pass states down from parent to child using props. In other words, if you have a multi component hierarchy, a common parent component should manage the state and pass it down to its children components via props.



class HelloUser extends React.Component {
  constructor(props) { //set the state of the component with constructor.
    super(props)

    this.state = { //any data in here will be part of the component's state.
      username: 'tylermcginnis'  //telling our component to keep track of username: 'tylermcginnis'
    }
  }
  render() { //object method
    return ( //note it's ( ) not { }
      <div>
        Hello {this.state.username} //can use the component's username this with this.state.username.
      </div>
    )
  }
}


____________________________________________________________________________

setState - The method that allows our component to modify its own internal state. In our workflow...

Signal to notify our app some data has changed→ Re-render virtual DOM -> Diff previous virtual DOM with new virtual DOM -> Only update real DOM with necessary changes.

That first part: “signal to notify our app some data has changed” is actually just setState. Whenever setState is called, the virtual DOM re-renders, the diff algorithm runs, and the real DOM is updated with the necessary changes.



class HelloUser extends React.Component {
  constructor(props) {
    super(props) //super is used here for what?

    this.state = {
      username: 'tylermcginnis'
    }

    this.handleChange = this.handleChange.bind(this) //what is bind used here for?
  }
  handleChange (e) { //gets called every time a user types in the input box. e = event.
    this.setState({
      username: e.target.value
    })
  }
  render() {
    return (
      <div>
        Hello {this.state.username} <br /> //refers to the username: e.target.value listener.
        Change Name: //what you'll see on the screen.
        <input
          type="text"  //just like html
          value={this.state.username}
          onChange={this.handleChange} //can see dynamically on the screen every key stroke.
        />
      </div>
    )
  }
}


1. HANDLE CHANGE METHOD
This method is going to get called every time a user types in the input box. When handleChange is called, it’s going to call setState to re-define our username withw hatever was typed into the input box (e.target.value). Remember, whenever setState is called, React creates a new virtual DOM, does the diff, then updates the real DOM.

2. onChange is a React attribute and it will call whatever method you specify every time the value in the input box changes, in this case the method we specified was handleChange.

3.
