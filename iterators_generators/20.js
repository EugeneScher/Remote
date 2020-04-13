let abc = { 
'a':6, 
'b':6, 
'c':6, 
[Symbol.iterator]: function *() { 
for (let key in this){ 
yield this[key]; 
} 
} 
} 
let mass = [...abc]; 