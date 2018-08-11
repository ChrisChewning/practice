link: https://git.generalassemb.ly/WebDev-Connected-Classroom/react-router


STEP 1: NPM INSTALL
npm install react-router-dom

____________________________________________________________________

STEP 2: MAIN INDEX.JS
wrap our whole app in the browserRouter from the react-router-dom module. This will Wrap our whole React app in our router so our app will then be able to keep track of the url its on, and be able to switch them.

example...
...
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <BrowserRouter>
    <App />    <--This is wrapped inside of BrowserRouter. BrowserRouter is imported from react-router-dom
  </BrowserRouter>,
  document.getElementById('root'));
registerServiceWorker();


____________________________________________________________________

STEP 3: APP.JS
You have Route and Switch components that get imported from react-router-dom.
Your Route components need to get wrapped in a Switch component

The Switch needs "exact path". Switch returns the first matching route, so if we are on the 'exact' path of /movies , then we will render the MovieContainer




import Login from './Login';
import MovieContainer from './MovieContainer';
import { Route, Switch } from 'react-router-dom';


const My404 = () => {
  return (
    <div>
      You're Lost
    </div>
    )
};

const App = () => {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/movies" component={ MovieContainer } />
        <Route component={My404} />
      </Switch>
    </main>
    )
};


export default App;

____________________________________________________________________
