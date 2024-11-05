//map reduce and filter function in arrays

//map(): The map() function in JavaScript is a method available for arrays that creates a new array by 
        //applying a given function to each element in the array. It’s commonly used for transforming or manipulating 
        //data without altering the original array.
let arr = [1,2,3,4,5,6];
console.log("items before using map()");
console.log(arr);
let subarr = arr.map((element)=>{
    return element*2;
})
console.log("items after using map()");
console.log(subarr);

//filter(): he filter() function in JavaScript is a method available for arrays that creates a new array containing 
            //only the elements that meet a specific condition (i.e., those for which the provided function returns true). 
            //It's useful for selecting certain elements from an array based on criteria without modifying the original array.
let arr1 = [5,4,2,8,11,13,56,23,12];
let subarr1 = arr1.filter((item)=>{
    return item > 6;
})
console.log("Using filter()");
console.log(subarr1);

//reduce():The reduce() function in JavaScript is a powerful array method used to reduce an array to a single value by executing a callback function on each element, accumulating 
            //the result. It’s commonly used for tasks like summing numbers, flattening arrays, or accumulating 
            //values into objects.

let arr3 = [43,31,51,25,67];
let sum = arr3.reduce((a, element)=>{  // a = accumlator, element= current value or item of the array
    return a + element;
});
console.log("using reduce()");
console.log(sum);