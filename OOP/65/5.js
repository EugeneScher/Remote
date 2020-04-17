class FristClass { 
constructor(str) { 
this._str = str; 
} 
setIsEmail(str) { 
if 
(/^[a-zA-z]+\W?[a-z]+@[a-zA-z]+\.[a-z]{2,3}$/.test(str)) { 
return true; 
} else { 
return false; 
} 
} 
getIsEmail() { 
return this._str; 
} 
setIsDomain(str) { 
if (/^([a-z.-_]+\.[a-z]{2,3})$/.test(str)) { 
return true; 
} else { 
return false; 
} 
///^([a-z.-_]+\.[a-z]{2,3})$/.test(str); 
} 
getIsDomain() { 
return this._str; 
} 
setIsDate(year, month, day) { 
let date = new Date(year, month-1, day); 
return date.getFullYear() == year && date.getMonth() == month-1 && date.getDate() == day; 
} 
setIsPhone(tel) { 
if (/^[\d]{1}\ \([\d]{2,3}\)\ [\d]{2,3}-[\d]{2,3}-[\d]{2,3}$/.test(tel)) { 
return true; 
} else { 
return false; 
} 
} 
} 
var FristClass1 = new FristClass('FristMail@class.ru'); 
FristClass1.setIsEmail('SecondMail@class.ru'); 
console.log(FristClass1.setIsEmail('SecondMail@class.ru')); 
var FristClass2 = new FristClass('class.ru'); 
FristClass2.setIsDomain('class.ru'); 
console.log(FristClass2.setIsDomain('class.ru')); 
var FristClass3 = new FristClass(); 
FristClass3.setIsDate(2019, 01, 27); 
console.log(FristClass3.setIsDate(2020, 10, 6)); 
var FristClass4 = new FristClass(); 
FristClass4.setIsPhone(8 (666) 578-96-25); 
console.log(FristClass4.setIsPhone(8 (666) 578-96-25)); 