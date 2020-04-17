class FristClass {
constructor(name, surname) {
this.name = name;
this.surname = surname;
}
getFullName() {
return this.name + ' ' + this.surname;
}
}
class Students extends FristClass {
constructor(name, surname, year) {
super(name, surname);
this.year = year;
}
getCourse(){
var year = (new Date()).getFullYear();
return year - this.year;
}
}
var Students = new Students('Имя', 'Фамилия', 2009);
console.log(Students.name); 
console.log(Students.surname); 
console.log(Students.getFullName()); 
console.log(Students.year); 
console.log(Students.getCourse()); 