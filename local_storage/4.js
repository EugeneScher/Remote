let Perm1 = Perm2('.Perm1'), 
text = Perm2('.text'), 
button = Perm2('.button'), 
records = Perm2('.records'), 
recordsTitle = Perm2('.recordsTitle'), 
lSLength = localStorage.length; 

if (lSLength > 0) { 
recordsTitle.style.display = 'block'; 
for (let i = 0; i < lSLength; i++) { 
let record = get(i); 
createRecord(record); 
} 
} 

function createRecord(record){ 
let h4 = document.createElement('h4'); 
let p = document.createElement('p'); 
h4.innerHTML = record.Perm1; 
p.innerHTML = record.text; 
records.appendChild(h4); 
records.appendChild(p); 

} 

button.addEventListener('click', function(){ 
if (Perm1.value !== '') { 
let record = { 
'Perm1': Perm1.value, 
'text': text.value 
}; 
set(lSLength, record); 
createRecord(record); 

} else { 
Perm1.style.borderColor="Purple"; 
} 
}); 

function get(id){ 
let json = localStorage.getItem(id); 
return JSON.parse(json); 
} 
function set(id, val){ 
let json = JSON.stringify(val); 
return localStorage.setItem(id, json); 
} 

function Perm2(val){return document.querySelector(val);}