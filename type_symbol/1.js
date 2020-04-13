const frist = { a: 1, b: 2 }; 
const second = Symbol(); 
frist[second] = 'How are you?'; 
for (let elem in frist) { 
console.log(frist[elem]); 
} 
console.log(frist[second]); 