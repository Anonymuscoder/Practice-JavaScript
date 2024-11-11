//Q.Implement a function fibonacci(n) that prints the first n terms of the Fibonacci series. Use a loop to 
//generate the sequence.

function fibonacci(n){
    let count = 2;
    let sum = 0;
    let a = 0;
    let b = 1;
    let arr = [0, 1];
    while(count <= n ){
        sum = arr[a] + arr[b];
        arr.push(sum);
        a++;
        b++;
        count++;
    }
    return arr;
}

let num = prompt("Enter number defining first N terms of the fibonacci series you want..");
num = Number.parseInt(num);
let result = fibonacci(num);
alert("The fibonacci series for the first "+ num +" numbers is: ["+result+"]");
