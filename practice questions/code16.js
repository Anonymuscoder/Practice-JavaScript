//Q.Write a function that takes an array of numbers and returns an array with each number squared.

let arr = [1,2,3,4,5,6,7,8,9,10];
let subarr = arr.map((item)=>{
    return item*item;
})
console.log(subarr);