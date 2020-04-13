let mass = [5, 2, 1, 9]; 
let It = createIt(mass); 
function* createIt(mass) { 
let secmass = []; 
for (let i = 0; i < mass.length; i += 2) { 
let thmass = []; 
for (let j = i; j < i+2; j++) { 
thmass.push(mass[j]) 
} 
secmass.push(thmass); 
} 
for (let value of secmass) { 
yield value; 
} 
} 
for (let value of It) { 
console.log(value); 
} 