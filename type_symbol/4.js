let mass4 = [5, 2, 9, 1, 7]; 
const sys = Symbol(); 
mass4[sys] = function () { 
let pl = 0; 
for (let key in mass4) { 
pl += mass4[key]; 
} 
return pl 
}; 
console.log(mass4[sys]()); 
