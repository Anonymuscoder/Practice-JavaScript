// demonstrating different looping techniques in arrays

//for each loop
let arr = [34,23,54,76,23];
console.log("for-each loop:")
arr.forEach((elements)=>{  //The forEach() method executes a provided function once for each array element
    console.log(elements);
})

//array from
console.log("Array.from()");
let a = "Harry";
let subarr = Array.from(a); //The Array.from() method in JavaScript creates a new array from an iterable or array-like 
                            //object. It's especially useful for converting array-like objects (such as NodeList, 
                            //arguments, or strings) into actual arrays, allowing you to use array methods like map(),
                            // filter(), etc., on them. (here "harry" is a string and it is iterable)
console.log(subarr);

//for-of loop
console.log("for-of loop"); //The for...of loop in JavaScript is used to iterate over iterable objects like arrays, strings, Sets, and Maps. 
                            //It allows you to loop through the values of an array (or other iterable) without needing to access the index.
let arr2 = [45,53,21,37,89];
for(let item of arr2){
    console.log(item);
}

//for-in loop
let arr3 = [4,3,2,1,5,6];
console.log("for-in loop");
for(let item in arr3){  //If you use a for...in loop on an array in JavaScript, it will iterate over the indexes (keys) of the array rather 
                        //than the values. This can lead to unexpected behavior, especially if non-numeric properties are added to the array.
    
    console.log(item); //output index number of item instead of items in self
}