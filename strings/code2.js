//properties and methods

let name = "Harry";
console.log(name.length);

console.log(name.toUpperCase()); //toUpperCase() converts string into uppercase
 
console.log(name.toLowerCase()); //toLowerCase() converts string into lowercase 

console.log(name.slice(2, 4)); //slice() slices the string and returns a from the start index to index before the end index mention as end is not inclusive
 
console.log(name.replace("Har", "Per")); //replace() replaces the string parameter1 with the string parameter2

console.log(name.concat(" Hello")); //concat() concates two or more string

let name1 = "      jade      ";
console.log(name1.trim()); //trim() removes blank spaces in a string