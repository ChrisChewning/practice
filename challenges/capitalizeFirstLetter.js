
PROBLEM: Capiatlize only the first letter of a string.

function capitalize(str){
  return str.replace(/^[a-z]/, (u) => u.toUpperCase());
}
capitalize('camel case') // 'Camel case'
capitalize('hello world it is me') // 'Hello world it is me'



//explanation
1. str.replace() takes two argments. The first is what to replace. The second is what to replace it with.

Ex: var str = 'TV is great';
    str.replace('TV', 'books');
    this should result in 'Books is great'

2. If we want to replace all occurrences of a word.

2. We want our ^ to apply to any lowercase character at the beginning of our string, so we’ll add it directly before our character set [a-z]. This will target only the first character if it is a lowercase letter.

/^[a-z]/
