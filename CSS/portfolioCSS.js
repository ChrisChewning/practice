

#1: ::before
::before
In CSS, ::before creates a pseudo-element that is the first child of the selected element. It is often used to add cosmetic content to an element with the content property. It is inline by default.



#2:  ::selection
::selection (https://css-tricks.com/almanac/selectors/s/selection/)
There are only three properties that ::selection will work with:

color
background (background-color, background-image)
text-shadow

example...
p::-moz-selection { color: red}  //moz is for safari
p::selection { color: red; }


#3: Rendering for all browsers.
-webkit-column-count: 3; (chrome, safari)
-moz-column-count: 3; (firefox)
-o is for Opera and -ms is for internet explorer


These are vendor-prefixed properties offered by the relevant rendering engines . Typically theyre used to implement new, or proprietary CSS features, prior to final clarification/definition by the W3.

This allows properties to be set specific to each individual browser/rendering engine in order for inconsistencies between implementations to be safely accounted for. The prefixes will, over time, be removed (at least in theory) as the unprefixed, the final version, of the property is implemented in that browser.

To that end its usually considered good practice to specify the vendor-prefixed version first and then the non-prefixed version, in order that the non-prefixed property will override the vendor-prefixed property-settings once its implemented; for example:

.elementClass {
    -moz-border-radius: 2em;
    -ms-border-radius: 2em;
    -o-border-radius: 2em;
    -webkit-border-radius: 2em;
    border-radius: 2em;
}


#4: Vertically centering text in a font awesome circle.

- you need to make sure the display is inline or inline-block (at least in this case.)
- set your line-height equal to your height.
- your font-size is helpful if it is half your height.
- vertical-align middle needed?

example...
ul.social-buttons li a {
  font-size: 40px;
  line-height: 80px;
  width: 80px;
  height: 80px;
  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
  transition: all 0.3s;
  color: white;
  border-radius: 100%;
  outline: none;
  background-color: #212529;
  display: block;
  vertical-align: middle;
  justify-content: center;
  margin: 20px;
}

#5 you have general rules at the top of your file. This is for a or h1, h2, h3, etc. 
