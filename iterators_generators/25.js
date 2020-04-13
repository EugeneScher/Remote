let Fr = document.querySelectorAll('Fr'); 
let Sec = document.getElementById('Sec'); 

Sec.addEventListener("click", function () { 
let thr = Fr.thr(); 
for (let [num, value] of thr) { 
value.innerHTML = value.innerHTML + num; 
} 
})