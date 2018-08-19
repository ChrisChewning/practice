1. html / css naming conventions
Take a look at this HTML:



<p class="text-center">
    Hello there!
</p>
// text-center violates 'sepration of concerns'
//give your elements class names based on content,

//HTML
<p class="greeting">
    Hello there!
</p>

//CSS
<style>
.greeting {
    text-align: center;
}
</style>




2. !importnt
A rule that has the !important property will always be applied no matter where that rule appears in the CSS document.

when to use: https://css-tricks.com/when-using-important-is-the-right-choice/

example...

p {
    color: red !important;
}
#thing {
    color: green;
}
<p id="thing">Will be RED.</p>
