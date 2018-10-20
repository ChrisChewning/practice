LINK: https://facebook.github.io/react-native/docs/getting-started.html
LINK: https://www.youtube.com/watch?v=iWxP3vkZurM&t=603s
LINK: https://stackoverflow.com/questions/40051449/react-native-touchable-highlight-and-touchable-native-feedback-for-making-my-men


//=========================   NOTE #1: NO HTML or DOM ====================
No div, span, h1, etc. b.c React Native doesnt work with normal html, css, or DOM elements. It uses the framework templating language, JSX instead. These are React Native components.

<View><Text>Hello world!</Text></View>.

//Text just displays text. However, View is your wrapper, like div or span.

"Many frameworks use a special templating language which lets you embed code inside markup language. In React, this is reversed. JSX lets you write your markup language inside code."


//=========================  NOTE #2: NO CSS  ===========================

import React, { Component } from 'react';
import { AppRegistry, Image } from 'react-native';

export default class Bananas extends Component {
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <Image source={pic} style={{width: 193, height: 110}}/>
    );
  }
}

//Image is a built-in componenet. You wrap {pic} to make it a jsx variable. Then style is b.c you don't have CSS in React Native. Note: this goes in 2 curly braces.


//==========  NOTE #3: Props, State, Render(), Return are the same. ==========

import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';

class Greeting extends Component {
  render() {
    return (
      <Text>Hello {this.props.name}!</Text>
    );
  }
}

//name is a prop.
//"A View is useful as a container for other components, to help control style and layout."

export default class LotsOfGreetings extends Component {
  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <Greeting name='Rexxar' />
        <Greeting name='Jaina' />
        <Greeting name='Valeera' />
      </View>
    );
  }
}

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => LotsOfGreetings);



//========================   NOTE #5: State ====================

import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';

class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = {isShowingText: true};

    // Toggle the state every second
    setInterval(() => {
      this.setState(previousState => {
        return { isShowingText: !previousState.isShowingText };
      });
    }, 1000);
  }

  render() {
    let display = this.state.isShowingText ? this.props.text : ' ';
    return (
      <Text>{display}</Text>
    );
  }
}

export default class BlinkApp extends Component {
  render() {
    return (
      <View>
        <Blink text='I love to blink' />
        <Blink text='Yes blinking is so great' />
        <Blink text='Why did they ever take this out of HTML' />
        <Blink text='Look at me look at me look at me' />
      </View>
    );
  }
}



//========================  NOTE #6: Styles ========================

//1. The style names and values usually match how CSS works on the web, except names are written using camel casing, e.g backgroundColor rather than background-color.

// 2. One common pattern is to make your component accept a style prop which in turn is used to style subcomponents. You can use this to make styles "cascade" the way they do in CSS.

//3. The style prop can be a plain old JavaScript object. That's the simplest and what we usually use for example code. You can also pass an array of styles - the last style in the array has precedence, so you can use this to inherit styles.

//4. As a component grows in complexity, it is often cleaner to use StyleSheet.create to define several styles in one place. Here's an example:

//5. Link: https://facebook.github.io/react-native/docs/text

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

export default class LotsOfStyles extends Component {
  render() {
    //NOTE: this array of stlyes doesn't work like you think it should. it's all blue or all red. How to <span> basically?
    return (
      <View>
        <Text style={styles.red}>just red</Text>
        <Text style={styles.bigblue}>just bigblue</Text>
        <Text style={[styles.bigblue, styles.red]}>bigblue, then red</Text>
        <Text style={[styles.red, styles.bigblue]}>red, then bigblue</Text>
      </View>
    );
  }
}

//Objects
const styles = StyleSheet.create({
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => LotsOfStyles);





//=========================  NOTE #7: AppRegistry ===============

1. AppRegistry is the JS entry point to running all React Native apps.
App root components should register themselves w AppRegistry.registerComponent.

Then the native system can load the bundle (for) the app and then actually run the app when its ready by invoking AppRegistry.runApplication.

2. This API only works in projects made with react-native init or in those made with Create React Native App which have since ejected. For more information about ejecting, please see the guide on the Create React Native App repository.



//======================== NOTE #8: Debugging ===================

1. check both iOS and android emulators. some built in components only work on one or the other.

2. FreeCodeCamp Medium Project (news site)...
ERROR HANDLING:
Problem: 'Unable to resolve module 'react-native-vector-icons/Materiallcons'
Solution: Install the icons. https://github.com/oblador/react-native-vector-icons#installation
