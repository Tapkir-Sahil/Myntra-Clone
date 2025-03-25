/*
// "use strict" is a directive that enables strict mode in JavaScript.
// Strict mode helps catch common coding mistakes and "unsafe" actions.

// Benefits of Strict Mode:
// 1. Eliminates some JavaScript silent errors by changing them to throw errors.
// 2. Fixes mistakes that make it difficult for JavaScript engines to perform optimizations.
// 3. Prohibits some syntax likely to be defined in future versions of ECMAScript.

// Common Changes in Strict Mode:
// - Variables must be declared before use.
// - Assignments to non-writable properties, getters-only properties, non-existent properties, and non-existent variables will throw errors.
// - `this` in functions will be `undefined` if the function is called without an object context.

// Example code illustrating these points:

'use strict';

// Non-writable property example
const obj = {};
Object.defineProperty(obj, 'nonWritable', {
  value: 42,
  writable: false
});

try {
  obj.nonWritable = 100; // Throws an error
} catch (e) {
  console.error(e);
}

// Getters-only property example
const person = {
  get name() {
    return 'John';
  }
};

try {
  person.name = 'Doe'; // Throws an error
} catch (e) {
  console.error(e);
}

// Non-existent property example
const anotherObj = {};

try {
  anotherObj.nonExistent = 123; // Throws an error
} catch (e) {
  console.error(e);
}

// Non-existent variable example
try {
  undeclaredVar = 456; // Throws an error
} catch (e) {
  console.error(e);
}

// `this` in functions example
function showThis() {
  console.log(this);
}

showThis(); // undefined
*/


 