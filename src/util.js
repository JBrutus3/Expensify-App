console.log('util.js is running');

const square = (x) => x * x;

const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

// shorthand default
//export default subtract;
export { square, add, subtract as default};
// exports - default export - named exports
