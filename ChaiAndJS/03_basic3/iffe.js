//IIFE Immediately Invoked Function Expressions


(function helloWorld(){ // This is Named IFFE
  console.log('Hello World')
})();

( (name)=>{ // This is Unnamed IFFE with parameter
  console.log(`Hello Master: ${name}`)
}
)('Sahil')