let string = "a1b c34d x567z";
let digits_array = string.match(/\d/g);
let sum = 0;
for (digit of digits_array){
	sum += Number(digit);
}
document.write(sum);