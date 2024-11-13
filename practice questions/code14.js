//Q.Write a function to remove duplicate elements from an array.

function removeDuplicate(arr){
    return [...new Set(arr)];
    //alternate approach
    //return arr.filter((item, index) => arr.indexOf(item) === index);
}


console.log("Running..")
let arr = [0,1,2,1,3,3,4,5,2,1,6,7];
let result = removeDuplicate(arr);
console.log(result);