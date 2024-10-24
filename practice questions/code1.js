//question solving on topic: Loops and Functions

//Q1 printing the marks of students using for loop
let obj = {
    Harish: 90,
    Shiv: 80, 
    Jade: 78,
    Rakesh: 49,
    Vishesh: 60,
    Omkar: 78
}

for( let i=0; i<Object.keys(obj).length; i++){
    console.log("The marks of "+ Object.keys(obj)[i] + " is "+ obj[Object.keys(obj)[i]]);
}

//Q2 printing the marks of the student using for-in loop
console.log(" ")
console.log("using for-in loop")
for (let a in obj){
    console.log("The marks of "+ a + " is "+ obj[a]);
}

//Q3 Show prompt until user enters the correct number

let num = 4; 
let i
while(i!=num){
    i=prompt("Enter a number")
}
console.log("You entered a correct number");

//Q4 Find mean of given numbers

function findMean(q, w, e, r, t){
    let sum = q+w+e+r+t;
    let mean = sum/5;
    console.log("The for the entered 5 numbers is: "+mean);
}

alert("You have to enter a 5 numbers to find their mean")
let a = prompt("Enter a number");
a = Number.parseInt(a);
let b = prompt("Enter a number");
b = Number.parseInt(b);
let c = prompt("Enter a number");
c = Number.parseInt(c);
let d = prompt("Enter a number");
d = Number.parseInt(d);
let e = prompt("Enter a number");
e = Number.parseInt(e);

findMean(a,b,c,d,e)
