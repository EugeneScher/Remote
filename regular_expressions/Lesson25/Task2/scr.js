let string = "<a href='' class='eee' id='zzz' data-test='test'>"
let attributes = string.match(/\w+?(?==)/g); 
document.write("Атрибуты: " + attributes);