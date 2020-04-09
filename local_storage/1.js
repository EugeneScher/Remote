let Per1 = Sys('TestingTEXT'); 

Per1.value = localStorage.getItem('Text1.2'); 

window.onbeforeunload = function(){ 
localStorage.setItem('Text1.2', Per1.value); 
}; 

function Sys(val){return document.querySelector(val);}