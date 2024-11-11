//Q. Create a function stringToArray(str) that splits a string into an array of words using the split() method.

function stringToArray(str){
    let arr = str.split('');
    return arr
}

let str = prompt("Enter a string to convert it into array..");
alert("Before Conversion... "+str);
let result = stringToArray(str);
alert("Conversion finished!, ["+result+"]");