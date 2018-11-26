CSS

CSS TRICKS  https://www.webdesignerdepot.com/2016/10/20-essential-css-tricks-every-designer-should-know/
Z-INDEX
specifies the stack order of an element. A number with a greater z-index will be out front. example: if an image has a z-index of -1, it will be placed behind a heading.

https://stackoverflow.com/questions/14391208/how-does-z-index-really-work


FLEXBOX
The Flexible Box Module, usually referred to as flexbox, was designed as a one-dimensional layout model, and as a method that could offer space distribution between items in an interface and powerful alignment capabilities.
https://css-tricks.com/snippets/css/a-guide-to-flexbox/

MARGINS
Properties are used to create space around elements, outside of any defined borders.
Goes margin-top, right, bottom, left, like a clock.

All the margin properties can have the following values:
* auto - the browser calculates the margin
* length - specifies a margin in px, pt, cm, etc.
* % - specifies a margin in % of the width of the containing element
* inherit - specifies that the margin should be inherited from the parent element


EMS
Relative length: Is relative to the font-size of the element (2 em means 2 times the size of the current font)

PX
Absolute length: 1 px = 1/96 of 1 in


ANIMATIONS
Animations consist of two components, a style describing the CSS animation and a set of keyframes that indicate the start and end states of the animation’s style, as well as possible intermediate waypoints.

There are three key advantages to CSS animations over traditional script-driven animation techniques:

They’re easy to use for simple animations; you can create them without even having to know JavaScript.
The animations run well, even under moderate system load. Simple animations can often perform poorly in JavaScript (unless they’re well made). The rendering engine can use frame-skipping and other techniques to keep the performance as smooth as possible.
Letting the browser control the animation sequence lets the browser optimize performance and efficiency by, for example, reducing the update frequency of animations running in tabs that are not currently visible.


CSS GRIDS
9 box grid system that allows you to overlap things and style horizontally and vertically, compared to flexbox, which is more contained.


MEDIA QUERIES


ROOT

// Because of cascading, CSS variables are often defined in the :root element. This way they're available in the whole web page. The :root element is like a container for your entire HTML document, like html container is for body element.
ex:
:root {
    --penguin-belly: pink;
  }
  