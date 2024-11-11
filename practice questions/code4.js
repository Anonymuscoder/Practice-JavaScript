//Q.Write a function sumOfNumbers(n) that takes a positive integer n as an argument and returns the sum of 
//all numbers from 1 to n. Use a loop to achieve this.

function sumOfNumbers(n){
    let s = 1
    let count = 0
    while(s<=n){
        count = count + s;
        s++
    }
    alert("Your sum is: "+count);
}

let n = prompt("Enter a number to get sum of all number till the number you entered");
sumOfNumbers(n);
