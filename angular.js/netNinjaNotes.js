
INSTALL & LAUNCH

- CLI: Command Line Interface is globally installed. So you first mkdir then touch into the directory. From there, ng new <name>

- On install, you get a lot of files. Src is your main thing.

- view in browser: ng serve  from the root folder. localhost://4200

GENERATE COMPONENTS

ng generate component <name> or ng g c <name>


TYPESCRIPT
- superset of js
- one addition is declaring types. if your var is declared as a string it stays a string. less flexible. before you could say myVar = 'twenty-five'; then reassign it to myVar = 25. now you can't
- you could declare the type. example:  myVar: string = 'hello'
- classes are used more?
ex: class Car {
  wheels: number = 4
  drive {
    console.log('car is driving');
  }
}
myCar: Car = new Car()


FILES & FOLDERS BREAKDOWN
config: configuration for environments.
dist: distribution for storing distributed code. don't edit anything directly here.
public: images & stylesheets go here.

index.html file is the root index file that fires when you load the application.
<app-root></app-root> is a directive tag.

main.ts imports a few things you need. It calls a bootstrap function at the bottom.

EACH COMPONENT:
.css, .html (views)

.ts (logic) typescript. controls the functionality and the view of that part of the wesbite. In each .ts component you have a class, which is the name of the component.

.spec.ts   (deals with testing)

COMPONENTS:
app is your root.

In your component @Component is a decorator. Tells us more info on this class and how this class works.
- selector: the name of the tag this component view is loaded into.
- templateURL is a reference to your view. Almost always .html but you could change this. Ex: <h1>{{name}}</h1>  This is string interpolation.
- array for styleUrls. You can style this specific view. It only will apply to the component you're in.

IMPORTANT: when you say export class ..., that is available to the rest of your component. example:
export class AppComponent {
  title = 'angular-directory';
}
then in .html you say <h1>{{title}}</h1>


IMPORTANT2: app.html and your root component is like app in react. If you change something there, it'll show up on every page.


CSS
you could put your css in your public folder instead of your component's css file. To have a dist folder you need to ng build from the terminal. However, you still won't get a public folder, which you used to get. Just make one in the src folder of your application.

In your index.html link over to your public/styles.css file. this is like your app.css file in react.


NEW COMPONENTS
-when you make a new component, you'll see implements OnInit. This means it loads when initialized. It's an event. Then the ngOnInIt() function fires. This is like React's componentDidMount(). You also have OnInIt imported at the top.


NESTING COMPONENTS

-app.component.ts is your root logic  file. In it you need to add directives: [] and the component inside. You also need to import the component.
Remember templateURL is your view.

-two ways to import components. Import the direct file. OR import an index.ts file. If you choose the latter, type export * from './home.component';


DIRECTIVES
-Tell Angular to do something.
-At a high level, directives are markers on a DOM element (such as an attribute, element name, comment or CSS class) that tell AngularJS's HTML compiler ($compile) to attach a specified behavior to that DOM element (e.g. via event listeners), or even to transform the DOM element and its children. (https://docs.angularjs.org/guide/directive)


two main kinds:
1. attribute: interact wiht the element it is sitting on to change its properties, etc. (ngclass)
2. structural:  changes the structure of the html code when its rendered to the browser (ngIf)

ngClass needs property binding [ngClass]. it expect an object so you use object notation. properties are true or false.



HOW DATA FLOWS INTO THE VIEWS
1. string interpolation {{title}}
2. property binding <input [required]='expression'>. required property is inside square brackets.

HOW DATA FLOWS OUT OF THE VIEWS
1. event binding <button (click)='expression/function'> the component class can handle the event.

HOW DATA FLOWS BOTH WAYS
1. two-way data binding:  <input [(ngModel)]='model/object'>
This updates the model/object in the component class.
In turn, updates any reference to the model/object in the view/template {{model}}


PROPERTY BINDING
-lets us bind data or expression to html properties. So far weve mostly moved data from the component class to the component view.
1. native HTML properties. ex:  [value]='expression'
2. built-in angular directives. [ngClass]='expression'
3. custom-made properties: [myProp]='expression'


EVENT BINDING
1. bind to native events. ex: click events. <button (click)='function'>
2. bind to custom events we make. ex: <app-home (update)='function'></app-home>


TWO-WAY BINDING
1. ngModel: directive you can bind the value of an input field to a variable created in AngularJS.

2. import in app.module.ts at the top and in imports.
  at the top: import { FormsModule } from '@angular/forms';
  imports: imports: [
    BrowserModule,
    FormsModule
  ],


INPUT DECORATOR (down the tree)
It is called an input property because data flows from the binding expression into the directive.

Root component -> Home Component down the tree

**how?
@Input() <name>;   is saying input the variable <name>
ex: @Input() chris;

make sure to import Input at the top.
ex: import { Component, OnInit, Input } from '@angular/core';


OUTPUT DECORATOR

Home component -> App Component up the tree


ex: import { Component, OnInit, Input, Output } from '@angular/core';


EVENT EMITTER
Use in directives and components to emit custom events synchronously or asynchronously, and register handlers for those events by subscribing to an instance.

Lets you say <functionName>.emit



SETTING UP ROUTES
- Create a routes file. export routes so they can be loaded in the main.ts file, which is outside your src folder.

**in your app folder make a folder named app.routes.ts

- Tell Angular where to load in our components / views when a route is requested.


a lot of steps but this video is great: https://www.youtube.com/watch?v=patjvNM9Qbc&index=16&list=PL4cUxeGkcC9jqhk5RvBiEwHMKSUXPyng0

However, note that it is provideRoutes not provideRouter in your app.routes.ts file. This may have been deprecated from angular1 to angular2.
https://stackoverflow.com/questions/37886276/providerouter-and-routerconfig-not-found-in-new-angular-router-3-0-0-alpha-3


Router Outlet: The RouterOutlet directive is used to display views for a given route. However, note othat <router-outlet></router-outlet> gets an error. You need to put Router.Module.forRoot([]) ... in your app.module.ts. Go here for more: https://github.com/gdi2290/angular-starter/issues/1004

<router-outlet></router-outlet>
