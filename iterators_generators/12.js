let ABC = { 
a: 4, 
b: 3, 
c: 1, 
[Symbol.iterator]: function* () { 

for (let key in this) { 
yield this[key]; 

} 
} 
}; 

for (let elem of ABC) { 
console.log(elem); 
}