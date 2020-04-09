let Perm1= Perm2('.theme'),
text = Perm2('.text'),
button = Perm2('.button'),
records = Perm2('.records'),
recordsTitle = Perm2('.recordsTitle'),
recordBook = get('recordBook'),

date = Perm2('#date'),
dateText = Perm2('.dateText'),
dateRecord = get('dateRecord'),

name = Perm2('.name'),
phone = Perm2('.phone'),
phones = Perm2('.phones'),
phonesButton = Perm2('.phonesButton'),
phonesTitle = Perm2('.phonesTitle'),
contactRecord = get('contactRecord');

if (recordBook !== null){
var recordBookLength = Object.keys(recordBook).length;
} else {
var recordBookLength = 0;
}
if (contactRecord !== null){
var recordContactLength = Object.keys(contactRecord).length;
} else {
var recordContactLength = 0;
}
