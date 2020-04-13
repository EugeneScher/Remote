let prim1 = { 
a : 5, 
b : 6, 
c : 7, 
}; 

let prim2 = Symbol(); 

prim1[prim2] = function(){ 
let prim3 = 0; 
for (let key in this) { 
prim3 += prim1[key]; 
} 
console.log(prim3); 
}; 


prim1[prim2](); 


let func = Symbol.for('func'); 
let mass = [1, 2, 3]; 
mass[func] = function () { 
let prim3 = 0; 
for (let key of this) { 
prim3 += key; 
} 
console.log(prim3); 
} 

mass[func]();