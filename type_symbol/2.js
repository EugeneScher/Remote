const elements = { a: 1, b: 2 }; 
const elem2 = Symbol(); 
elements[elem2] = () => alert('!'); 
console.log(elements[elem2]); 
