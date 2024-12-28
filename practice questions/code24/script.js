//p2-5

//q1

// let n = prompt("Enter length of array");
// n = Number.parseInt(n);
// let arr = [];
// for(let i=0; i<n; i++){
//     let t = prompt("Enter "+i+" value");
//     arr.push(t);
// } 
// alert("Your array is: ["+arr+"]");


//q2: keeping adding number an array untill zero is entered
// let arr1 = [];
// let i;
// do{
//     i = prompt("Enter a number to add it in array other than 0");
//     i = Number.parseInt(i);
//     arr1.push(i)
// }while(i!=0);



//q3: filter for numbers divisible by 10 in a array
// let arr2= [20,30,98,23,34,45,50];

// let subarr = arr2.filter((a)=>{
//     return a%10==0;
// })
// console.log(subarr)

//q4: create an array of sqaure of given numbers
// let arr3 = [2,4,5,7,8,1];
// let subarr1 = arr3.map((a)=>{
//     return a*a;
// })
// console.log(subarr1);

//q5: calculate factorial for given number in an array using reduce
let arr4 = [1,2,3,4,5];
let subarr2 = arr4.reduce((x1,x2)=>{
    return x1*x2;
})
console.log("factorial for given numbers in array is: "+subarr2)