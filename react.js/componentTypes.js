
LINKS: CONTAINER COMPONENTS
https://medium.com/@learnreact/container-components-c0e67432e005
https://gist.github.com/chantastic/fc9e3853464dffdb1e3c
https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0
https://medium.com/@thejasonfile/dumb-components-and-smart-components-e7b33a698d43

The idea is you should split up your components into:
1. data-fetching and rendering the related view components.
2. presentational components.



PRESENTATIONAL COMPONENTS (dumb)
(page, sidebar, story, userInfo, list)

- only responsibility is to present something to the DOM. Once that is done, the component is done with it b.c it just needs to put something on the page.
-will only have a render() method b.c they dont need any others. Basically just js functions.
-no internal state to manage. cant change the data they are presenting.
- most basic example: 'Hello world'
- headers and footers or other components that can be written in one place and used several times throughout the app, will look the same.

example...
const Footer = (props) => {
  return(
  <div>
    <ul>
      <li>Footer Information</li>
    </ul>
  </div>
  )
}


- concerned with how things look.
- May contain both presentational and container components  inside, and usually have some DOM markup and styles of their own.
- Often allow containment via this.props.children.
- Have no dependencies on the rest of the app, such as Flux actions or stores.
- Don’t specify how the data is loaded or mutated.
- Receive data and callbacks exclusively via props.
- Rarely have their own state (when they do, it’s UI state rather than data).
- Are written as functional components unless they need state, lifecycle hooks, or performance optimizations.
Examples: Page, Sidebar, Story, UserInfo, List.




CONTAINER COMPONENTS  (smart)
(user page, followers side bar, story container, follwed user list)

Keep track of state and care about how the app works.

The container components do the heavy lifting and pass the data down to the presentational components as props.

They are class-based components and have their own state defined in their constructor() functions.

class App extends Component {
  constructor(props){
    super(props);
    this.state = {pictures : []};
  }
}

These components also often contain other callback functions that are used to update the state and get passed down to their child components as props.

The root component off an app is a good example of a smart component. It is often responsible for maintaining several pieces of state for the entire app and needs to pass down additional functions to its child components so that the state can be updated when a user interacts with the site.



- concerned with how things work.
- May contain both presentational and container components inside but usually don’t have any DOM markup of their own except for some wrapping divs, and never have any styles.
- Provide the data and behavior to presentational or other container components.
- Call Flux actions and provide these as callbacks to the presentational components.
- Are often stateful, as they tend to serve as data sources.
- Are usually generated using higher order components such as connect() from React Redux, createContainer() from Relay, or Container.create() from Flux Utils, rather than written by hand.





EXAMPLE: A COMPONENT THAT DOES BOTH. THIS ONE GETS AND DISPLAY COMMENTS
class CommentList extends React.Component {
  //^ CommentList can’t be reused unless under the exact same circumstances.

  this.state = { comments: [] };

  componentDidMount() {
    fetchSomeComments(comments =>
      this.setState({ comments: comments }));
  }
  render() {
    return (
      <ul>
        {this.state.comments.map(c => (
          <li>{c.body}—{c.author}</li>
        ))}
      </ul>
    );
  }
}

NOW, IT IS SPLIT INTO TWO...

CONTAINER COMPONENT: DATA-FETCHING
class CommentListContainer extends React.Component {
  state = { comments: [] };
  componentDidMount() {
    fetchSomeComments(comments =>
      this.setState({ comments: comments }));
  }
  render() {
    return <CommentList comments={this.state.comments} />; //returns the prop CommentList
  }
}

PROP: COMMENT LIST //way more reusable to put it by itself.
const CommentList = props =>
  <ul>
    {props.comments.map(c => (
      <li>{c.body}—{c.author}</li>
    ))}
  </ul>


IN THE END...
  1. We’ve separated our data-fetching and rendering concerns.
  2. We’ve made our CommentList component reusable.
  3. We’ve given CommentList the ability to set PropTypes and fail loudly.



REASONS...
1. Better separation of concerns. You understand your app and your UI better by writing components this way.

2. Stateful and Stateless. Some components use React setState() method and some don’t. While container components tend to be stateful and presentational components tend to be stateless, this is not a hard rule. Presentational components can be stateful, and containers can be stateless too.

3. Better reusability. You can use the same presentational component with completely different state sources, and turn those into separate container components that can be further reused.

4. Logic doesnt get messed with. Presentational components are essentially your app’s “palette”. You can put them on a single page and let the designer tweak all their variations without touching the app’s logic. You can run screenshot regression tests on that page.
