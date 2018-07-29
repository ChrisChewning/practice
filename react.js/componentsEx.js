import React from 'react'
import ReactDOM from 'react-dom'

class HelloWorld extends React.Component {
  render() { //only method. every component requires a render method. ender is describing the UI (user interface) for our component
    return (
      <div>Hello World!</div>
    )
  }
}

ReactDOM.render(<HelloWorld />, document.getElementById('root'));
//^^^ The first argument is the component you want to render, the second argument is the DOM node where you want to render the component. (Notice we’re using ReactDOM.render and not React.render.


Explanation:
1. We’re telling React to take our HelloWorld component and render it to the element with an ID of root. Because of the parent/child child relations of React we talked about earlier, you usually only have to use ReactDOM.render once in your application because by rendering the most parent component, all child components will be rendered as well.

2. The “HTML” that you’re writing in the render method isn’t actually HTML but it’s what React is calling “JSX”. JSX simply allows us to write HTML like syntax which (eventually) gets transformed to lightweight JavaScript objects. React is then able to take these JavaScript objects and from them form a “virtual DOM” or a JavaScript representation of the actual DOM. This creates a win/win situation where you get the accessibility of templates with the power of JavaScript.



3. The virtual DOM is a JavaScript representation of the actual DOM, React can keep track of the difference between the current virtual DOM(computed after some data changes), with the previous virtual DOM (computed befores some data changes).

4. Because manipulating the actual DOM is slow, React is able to minimize manipulations to the actual DOM by keeping track of a virtual DOM and only updating the real DOM when necessary and with only the necessary changes. (More info here).


5. THE PROCESS goes like this...
Some user event which changes the state of your app → Re-render virtual DOM -> Diff previous virtual DOM with new virtual DOM -> Only update real DOM with necessary changes.

(This transformation process is what requires Babel and Webpack).
