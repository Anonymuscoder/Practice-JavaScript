//practice questions on string, string properties and methods

//Q1
let str = "har\"";
console.log(str.length);
console.log(str);

//Q2 Demontrating the use of startsWith() and endsWith()
let str1 = "Hello World";
let str2 = "Just Code";
let result1 = str1.startsWith("Hello");
let result2 = str2.endsWith("Code");
console.log(result1, result2);

//Q3 Converting the string into lower case
let str4 = "ARNOLD";
console.log(str4.toLowerCase());

//Q4 Extract the amount out of the string
let str5 = "Please give Rs 1000";
let result3 = Number.parseInt(str5.slice(15, 19));
console.log(result3);
console.log(typeof(result3));

//Q5 Try to change the 4th character of the above string
str5[3] = 't';
console.log(str5); // no change as strings are immutable