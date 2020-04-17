class FrCl { 
constructor(str){ 
this._str = str; 
} 
myreverse(str){ 
return str.split("").reverse().join(""); 
} 
ucFirst(str){ 
let at = str.charAt(0).toUpperCase(); 
return at + str.substr(1, str.length-1); 
} 
ucWords(str){ 
return str.split(/\s+/).map(word => word[0].toUpperCase() + word.substring(1)).join(' '); 
} 
} 
var str = new FrCl(); 
console.log(str.myreverse('Mood')); 
console.log(str.ucFirst('Mood')); 
console.log(str.ucWords('Mood Mood Mood')); 
