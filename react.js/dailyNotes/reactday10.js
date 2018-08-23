
LINK:

1. data is passed through state or events.


2. parent container: when a component passes data to another componenet it is the parent. the receiver is the child.

3. Props needs to be in the render method.

4. You can output something without state.____ or props._____ in {} if its a property of your the class youre in. when to use this.____ vs just {} ?

example...

render() {  //render method is required in a class method.
  var text = "Something";
  return(
    <div>
      <p>{text}</p>
    </div>
  )

}

4. {this.props._____} is how you output data in your componenet.

5. when using class based components it's this.props.___ When not using a class based component you can jus say props.____

example just a functional, function-only presenttaional component.
