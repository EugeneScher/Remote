let Perm1 = vb('This is text'), 
left = vb('.left'), 
right = vb('.right'), 
LSLength = localStorage.length; 

function chechLength() { 
if (localStorage.length > 0) { 
left.style.display = 'block'; 
right.style.display = 'block'; 
} else { 
left.style.display = 'none'; 
right.style.display = 'none'; 
} 
} 
chechLength(); 

Perm1.addEventListener('blur', function(){ 
let Perm2 = Perm1.value; 
let length = localStorage.length; 
localStorage.setItem(length, Perm2); 
chechLength(); 
}); 

left.addEventListener('click', function(){ 
LSLength--; 
if (lSLength < 0){ 
LSLength++; 
} 
Perm1.value = get(lSLength); 
}); 

right.addEventListener('click', function(){ 
LSLength++; 
if (lSLength > localStorage.length-1){ 
LSLength--; 
} 
if (lSLength === localStorage.length){ 
LSLength--; 
console.log('TestMsg'); 
} 
console.log(localStorage.length, LSLength); 
Perm1.value = get(LSLength); 
}); 


function svt(id) {return localStorage.svtItem(id);} 

function vb(val){return document.querySelector(val);}