
REACT
Javascript framework for creating user interfaces. These can be full, single-page applications or certain parts of websites (i.e. search form).

React was created by Jordan Walke, a software engineer at Facebook. He was influenced by XHP, an HTML component framework for PHP.[8] It was first deployed on Facebooks newsfeed in 2011 and later on Instagram.com in 2012.[9] It was open-sourced at JSConf US in May 2013.

React Native, which enables native Android, iOS, and UWP development with React, was announced at Facebooks React.js Conf in February 2015 and open-sourced in March 2015.

On April 18, 2017, Facebook announced React Fiber, a new core algorithm of React framework library for building user interfaces.[10] React Fiber was to become the foundation of any future improvements and feature development of the React framework.[11][needs update]

Complex React applications usually require the use of additional libraries for state management, routing, and interaction with an API.


Like the browser code in React is rendered through Virtual DOM while
React Native uses Native APIs to render components on mobile.

Component-based, very fast due to the DOM, Facebook created.

____________________________________________________________________________

Component

ex: search component, directory component, signup component.


We dont write these in html or js. We are writing in jsx. It is javascript and xml. This allows us to combine javascript and html. Once these components are required in the browser they are inserted into the DOM.


____________________________________________________________________________



A component is a reusable piece of code, which defines how certain features should look and behave on the UI (user interface). For example, a button is a component.

Components let you split the UI into independent, reusable pieces, and think about each piece in isolation.

You write code for all such components separately. Then combine those under one container, which in turn is a React component itself. This way you can create reusable components and your final app will be a collection of separate components working together.


Functional Components (aka Stateless Components)
- functions
function Welcome(props) { return <h1>Hello, {props.name}</h1>; }
This function is a valid React component because it accepts a single “props” (which stands for properties) object argument with data and returns a React element. We call such components “functional” because they are literally JavaScript functions.
Note: Always start component names with a capital letter.
React treats components starting with lowercase letters as DOM tags. For example, <div /> represents an HTML div tag, but <Welcome /> represents a component and requires Welcome to be in scope.


We’ve learned that a React app is a collection of various components, structured as a nested tree. Thus, we require some sort of mechanism to pass data from one component to other.

____________________________________________________________________________

PROPS
We can pass arbitrary data to our component using a props object. Every component in React gets this props object.
