//Practice questions on Arrays, Array methods and Operations

//q1

let arr = [];
let input;
do{
    input = prompt("Enter a number to enter in the array");
    input = Number.parseInt(input);
    arr.push(input);
}while(input >= 0)
console.log(arr);


//q2

let arr1 = [];
let input1;
do{
    input1 = prompt("Enter a number to enter in the array");
    input1 = Number.parseInt(input1);
    arr.push(input1);
}while(input1 != 0)
console.log(arr1);

//q3

let arr2 = [10,18,15,13,12,7,6,9,24,25,54];
let subarr = arr2.filter((x)=>{
    return x%10==0;
})
console.log(subarr);

//q4

let arr3 = [10,18,15,13,12,7,6,9,24,25,54];
let subarr1 = arr3.map((a)=>{
    return a*a;
})
console.log(subarr1);

//q5

let arr4 = [1,2,3,4,5];
let subarr2 = arr4.reduce((x1, x2)=>{
    return x1 * x2;
})
console.log(subarr2);