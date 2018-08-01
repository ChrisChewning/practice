
OUR GOALS TODAY

1. HOW TO INTERACT WITH FORMS.


2. LIFT UP STATE
bring state from child component to parent component.

ex: when you login, you want to be taken to a new screen.


- Only thing to define inside the constructor is the state.
- Don't define function inside the render
- render can be above things (order doesn't matter) but it's nice to have it as the last code block.
- To write javascript inside a return statement you have to wrap it in brackets {}

-to access any value, use state. This gives you taht value at any given time.
- onChange can update our state too.
- this.setState always calls a re-render. this is good with login forms.
-setState is the last thing you want to do in your render since


3. SUPER & INHERITING CLASSES

*NOTE: You have to use the super() method if you are using the constructor() method AND extending the class. This is b.c the code is like "what are you extending from?"
It simply executes the parent constructor.

class Human {
constructor() {
  super()
  this.gender = 'male';
}

printGender() {
  console.log(this.gender);
}
}


class Person extends Human {
  constructor() {
    this.name = 'Max';
  }
}

printMyName() {
  console.log(this.name);
}
}

const person = new Person();
person.printMyName();
person.printGender();
