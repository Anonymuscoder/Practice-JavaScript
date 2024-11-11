//Q. Write a function reverseString(str) that takes a string as an argument and 
//returns the reversed string. Use a loop to reverse the characters.

function reverseString(str){
    let arr = Array.from(str);
    let n = arr.length;
    let sp = 0;
    let ep = n-1;
    while(sp<ep){
        let temp = arr[sp];
        arr[sp] = arr[ep];
        arr[ep] = temp;
        sp++;
        ep--;
    }
    return arr.join('');
}

let s = prompt("Enter a string to reverse it");
let r = reverseString(s);
alert("Reversed String is: "+r);