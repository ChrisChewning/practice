//Template literals are enclosed by the back-tick (` `)  (grave accent) character instead of double or single quotes. 

//Template literals can contain placeholders. These are indicated by the dollar sign and curly braces (${expression}). The expressions in the placeholders and the text between them get passed to a function. The default function just concatenates the parts into a single string. 

//EXAMPLE WITHOUT

let name = 'Chris';
let age = 32;
function hello(){
    return 'hello';
}



html = '<ul>' + 
    '<li> + Name: ' + name '</li>' +
    '<li> + Age: ' + age '</li>'
    '</ul>'

//EXAMPLE WITH TEMPLATE STRINGS

html = `
    <ul>
    <li>Name: ${name}</li>
    <li>Age: ${age}</li>
    </ul>
`

//OPTIONS
1. functions.
2. expressions
3. conditionals



html = `
    <ul>
    <li>Name: ${name}</li>
    <li>Age: ${age}</li>
    <li>{2 + 2}</li>
    <li>${hello()}</li>
    <li>${age > 30 ? 'Over 30': 'Under 30'}  // the colon is basically 'else'
    </ul>
`


const id = 100; 

if (id == 100) {
    console.log(`The id is ${id}`);
} else {
    console.log('there is no id.')
}