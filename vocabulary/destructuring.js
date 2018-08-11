
DESTRUCTURING
(https://wesbos.com/destructuring-objects/)

A JavaScript expression that allows us to extract data from arrays, objects, maps and sets into their own variable. It allows us to extract properties from an object or items from an array, multiple at a time.

USUAL WAY...
const person = {
  first: 'Wes',
  last: 'Bos',
  country: 'Canada',
  city: 'Hamilton',
  twitter: '@wesbos'
};
const first = person.first;
const last = person.last;

DESTRUCTURING WAY...
const { first, last } = person; // {} = is destructuring syntax.

Basically, variable first and variable last are taken from the person object. Now, there are two new variables, scoped to the parent block. (window?)

Now...
console.log(first); // Wes
console.log(last); // Bos

 const { first, last, twitter } = person; //this would work too.


EXAMPLE 2...

const wes = {
  first: 'Wes', //wes.first
  last: 'Bos', //wes.last
  links: { //wes.links
    social: { //wes.links.social
      twitter: 'https://twitter.com/wesbos', //wes.links.social.twitter
      facebook: 'https://facebook.com/wesbos.developer', //wes.links.social.facebook
    },
    web: { //wes.web
      blog: 'https://wesbos.com' //wes.web.blog
    }
  }
};

OLD WAY...
const twitter = wes.links.social.twitter;
const facebook = wes.links.social.facebook;

DESTRUCTURING WAY...
const { twitter, facebook } = wes.links.social;
console.log(twitter, facebook); // logs the 2 variables

Notice how we destructure wes.links.social and not just wes? That is important because we are destructuring a few levels deep.
