var:
Function-scoped, accessible outside the block they are declared in.
Can be accessed before declaration, resulting in undefined.
javascript
Copy code
console.log(i);
var i = 'I am a variable';
// Output: undefined
let:
Block-scoped, only accessible within the block they are declared in and its sub-blocks.
Cannot be accessed before declaration; accessing them before declaration results in a ReferenceError.
javascript
Copy code
console.log(j);
let j = 'I am a let';
// Output: ReferenceError: can't access lexical declaration `j' before initialization
const:
Block-scoped, cannot be reassigned after declaration.
The content of a const object can be modified, but the variable itself cannot be reassigned.
javascript
Copy code
const constant = 'I am a constant';
constant = "I can't be reassigned";
// Output: Uncaught TypeError: Assignment to constant variable

const person = {
name: 'Alberto',
age: 25,
};
person.age = 26;
console.log(person.age);
// Output: 26
Temporal Dead Zone:
Both let and const are hoisted to the top of their scope but cannot be accessed before their declaration.
Accessing them before declaration results in a ReferenceError for let and const, whereas var will give an undefined value.
javascript
Copy code
console.log(x);
let x = 'I am a let';
// Output: ReferenceError: can't access lexical declaration `x' before initialization
When to Use Each:

Use var for backward compatibility and global variables shared across many scopes.
Use let when you need reassignment and want to limit the variable's scope to a block.
Use const when you want to ensure the variable's value doesn't change and want block-scoped variables.
