//Q.Write a function reverseString(str) that takes a string as input and returns the reversed 
//string using string methods.

function reversed(str){
    let arr = str.split('');
    arr = arr.reverse();
    arr = arr.join('');
    return arr;
}

let str = prompt("Enter a string for reversing it");
let result = reversed(str);
alert("Reverse of given string "+str+" is: "+result);