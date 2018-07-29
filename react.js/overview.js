
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

WHAT WE WRITE  IN

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


    module: {
        loaders: [ //loaders property is an array.
            {
                test: /\.js$/,  //regular expression looking for any js file extenstion (or es2015)
                include: path.resolve(__dirname, 'src'), //which directory to run on. We don't want it to run on all directories.
                loader: 'babel-loader', //using the babel-loader
                query: {
                    presets: ['react', 'es2015'] //you could just put react or just es2015.
                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            }
        ]
    }
};

}



COMPONENT

ex: search component, directory component, signup component.




____________________________________________________________________________
COMPONENT (2)

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
