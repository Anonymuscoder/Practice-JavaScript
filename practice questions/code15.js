//Q. filter odd number from the given array

let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,10];
let subarr = arr.filter((item, index)=>{
    return item%2!=0;
})

console.log(subarr);