//ps-4

//q1
console.log("har\"".length) //\" this character will be counted as 1


//q2
let str = "Hello World";
let sw = "World"

console.log(str.startsWith("Hello"));
console.log(str.startsWith("Hello", 0));

console.log(str.endsWith("World"));
console.log(str.endsWith("World", 11));

//q3
let str1 = "JADE MASQUE";
console.log(str1.toLowerCase());

//q4
let str2 = "Please give Rs 1000";
let temp = str2.slice(15); //gives 1000 but in string
let amount = Number.parseInt(temp) //converting 1000 from string to number
console.log(amount)
console.log(typeof(amount))

str2[3]="Y"
console.log(str2) //not change because strings are immutable