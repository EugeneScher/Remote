let string = '12 123 34 56 78 123 123456';
let result = string.replace(/\b(\d)(\d)\b/g, "$2$1");
document.write(result);
