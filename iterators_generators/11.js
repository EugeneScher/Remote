let main = { 
a:8, 
b:2, 
c:6 
} 

let IT = createIT(main); 
function *createIT(main) { 
for (let value in main){ 
yield main[value]; 
} 
} 

for (let value of IT){ 
console.log(value); 
} 
