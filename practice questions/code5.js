//QCreate a function factorial(num) that returns the factorial of a given positive integer num. Use a 
//loop for the calculation.

function factorial(n){
    let result = 1
    for(let i=2; i<=n; i++){
        result = result * i;
    }
    return result;
}

let n = prompt("Enter a number to get its factorial")
let ans = factorial(n)
alert("Factorial for given number "+n+" is: "+ans)