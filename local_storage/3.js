let Perm1 = hfjt('input[type="text"]'), 
inpCheckbox = hfjt('input[type="checkbox"]'), 
inpRadio = hfjt('input[type="radio"]'), 
inpSelect = sdf('SelectParam'), 
Perm1area = sdf('AREA'); 

window.onload = function(){ 
for (let i = 0; i < Perm1.length; i++){ 
Perm1[i].value = get('Perm1'+i); 
} 
for (let i = 0; i < inpCheckbox.length; i++){ 
if (get('inpCheckbox'+i) === 'true'){ 
inpCheckbox[i].checked = true; 
} 
} 
for (let i = 0; i < inpRadio.length; i++){ 
if (get('inpRadio'+i) === 'true'){ 
inpRadio[i].checked = true; 
} 
} 
inpSelect.selectedIndex = get('inpSelect'); 
Perm1area.value = get('Perm1area'); 
}; 

window.onbeforeunload = function(){ 
for (let i = 0; i < Perm1.length; i++){ 
set('Perm1'+i, Perm1[i].value); 
} 
for (let i = 0; i < inpCheckbox.length; i++){ 
set('inpCheckbox'+i, inpCheckbox[i].checked); 
} 
for (let i = 0; i < inpRadio.length; i++){ 
set('inpRadio'+i, inpRadio[i].checked); 
} 
set('inpSelect', inpSelect.selectedIndex); 
set('Perm1area', Perm1area.value); 

}; 

function get(id){return localStorage.getItem(id);} 
function set(id, val){return localStorage.setItem(id, val);} 

function sdf(val){return document.querySelector(val);} 
function hfjt(val){return document.querySelectorAll(val);}