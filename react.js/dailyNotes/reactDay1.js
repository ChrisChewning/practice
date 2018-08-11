
DAY 1 LESSON 1
LINK: https://git.generalassemb.ly/WebDev-Connected-Classroom/intro-to-React/blob/master/README.md

As you can imagine, creating a large, complex UI in jQuery while maintaining readable, maintainable code is going to take:

A. Excellent code organization
B. Really excellent code organization
C. Either a lot of messy HTML strings, or the use of a templating engine.
React is an amazing solution that has a built in code-organization strategy, as well as a clean, elegant templating solution.

Regarding code organization, React seperates everything into components. Everything is a componenet in React. A blog Post is a component. A comment is also a componenet, which can be nested in the Post component. (Much more on this later).

For templating there is JSX. More on that later too.

____________________________________________________________________________

React was born out of Facebooks frustration with the traditional MVC model and how...

Re-rendering one thing meant re-rendering much of the page.
That had negative implications on processing power and ultimately user experience, which at times became glitchy and laggy.

____________________________________________________________________________

React in MVC
React can be thought of as the "Views" layer.

What is the role of a "view" in a front-end Javascript application?
Reacts role is just to use data to render a UI. This means that React can also coexist with other Javascript frameworks. Let them handle the models and controllers, and have React sort out the views.

____________________________________________________________________________


HOW TO START

1. npm install //-g react would install it globally but you don't need to do this any more since you Dled it on your laptop.
2. cd into the folder that was just made.
3. npm start (calls the scripts start: "react-scripts start"). this pulls up localhost: 3000 on our browser with the spinning logo automatically.
4. atom .


WEBPACK
runs our react server for us. It is running localhost:/3000. This is serving a static file (html, css, js are the only files it can read). Has a built in feature that checks your server for you when you update.

BABEL
allows us to run our jsx

JSX
- allows us to write more readable components. JSX is a langauge that allows us to write html components in our javascript.
- when we call the render() function we are rendering the app into the component. That template turns the js into html through jsx?


PUBLIC FOLDER
the stuff in the public folder is the stuff sent to the client.


CACHE
a place to store something temporarily in a computing environment.

IMPORT
use import React from 'react'; //in Node we said require('')

SMART (CONTAINER )& DUMB (PRESENTATIONAL) COMPONENTS (https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0)


SMART COMPONENTS
this is where our states live. more of our top-level data. like one smart component at the top of our app, which renders multiple dumb components. Data is passed down.

DUMB COMPONENTS
mostly used for the user interface (ui)


extends Component
This is the React library class we inherit from to create our component definition.

render()
Every component has, at minimum, a render method. It generates a Virtual DOM node that will be added to the actual DOM.

Looks just like a regular ol' DOM node, but it's not yet attached to the DOM.

____________________________________________________________________________

DAY 1 LESSON 2
link: https://git.generalassemb.ly/WebDev-Connected-Classroom/intro-react-part-deux/blob/master/README.md


1. you cannot log inside your return statement. It has to be above it, inside the render(){}

2. We call such components “functional” because they are literally JavaScript function

3. Props (properties) is used whenever you want immutable data.

When we need immutable data in our component, we can just add props to reactDOM.render() function in main.js and use it inside our component.

App.jsx
import React from 'react';

class App extends React.Component {
   render() {
      return (
         <div>
            <h1>{this.props.headerProp}</h1>
            <h2>{this.props.contentProp}</h2>
         </div>
      );
   }
}
export default App;




<div>
  <h1>Hello, {this.props.name}</h1>
  <p>How are {this.props.query}</p>
  <p>Do you like {this.props.animal}</p>
  <img src={this.props.img}/>
</div>




3. State is the representation of what your data is at any point in time. example...
in a video game you have lives, health, points, etc. If you lose a life or gain points, etc. you change state.


4. in general, your top-level components contain your state.


5. BINDING THIS
handleClick = (e) => { //arrow functions automatically bind to this for you. do not put handleClick without an arrow function. if you do that this.setState() will be set to undefinded bc this isn't bound.

//this.handleClick = this.handleClick.bind(this); is what you may see in documentation. that is b.c it is not bound through an arrow function first.
