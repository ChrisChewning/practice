
==========================  CSS VARIABLE  ==========================

== WHY USE THEM? == 
Reason #1: More readable code

Reason #2: Ease of change across large documents
If you have all your constants saved in a separate file, you can change it once.

Reason #3: You can spot typos faster

== DEFINITION ==
In CSS, a CSS variable is any “property” whose name begins with two dashes.


== SCOPE ==
:root { } is globally scoped 
In an object(?) is locally scoped 

1. To create a CSS Variable, you just need to give it a name with two dashes in front of it and assign it a value like below.

2. IE doesn't support CSS Variables.

  .penguin {
    --penguin-skin: gray; //this is your CSS Variable.
    position: relative;
    margin: auto;
    display: block;
    margin-top: 5%;
    width: 300px;
    height: 300px;
  }

  .penguin-top {
    top: 10%;
    left: 25%;
    background: black; //this is your fallback, which supports IE. This is better than the fallback used on the next line.
    background: var(--penguin-skin, black);  //you reference a CSS Variable by calling the var function var(). ,black is a possible fallback value but IE doesn't support it. NOTE: make sure the fallback is INSIDE the parantheses. 
    width: 50%;
    height: 45%;
    border-radius: 70% 70% 60% 60%;
  }


This will create a variable named --penguin-skin and assign it the value of gray.

Now you can use that variable elsewhere in your CSS to change the value of other elements to gray.

3. :root {
    --penguin-size: 300px;
    --penguin-skin: gray;
    --penguin-belly: gray;
    --penguin-beak: orange;
}

.penguin {
    --penguin-belly: white; 
    //overwrites the variable by setting it to this specific element.
    //https://learn.freecodecamp.org/responsive-web-design/basic-css/change-a-variable-for-a-specific-area
}
  
  @media (max-width: 350px) {
    :root {
      --penguin-size: 200px;
      --penguin-skin: black;      
    }
  }





============================  SASS  ============================

