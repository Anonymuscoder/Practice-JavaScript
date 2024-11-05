//Demonstrating more array methods and operations

//delete operator
let arr = [113,114,115,116,989];
console.log(arr);
delete arr[4]; //deleted item from the specified index
console.log("Array after deleting the item:"+"[" +arr+"]");
console.log(arr); // even after deleting the item array length remains the same

//concat method
let arr1 = [11,12,13,14,15,16];
let arr2 = arr.concat(arr1); // concat() method concates one array onto another and returns a new array
console.log(arr2);

//sorting
let arr3 = [78, 76, 56, 44, 32, 45];
console.log("array before sorting");
console.log(arr3);
arr3.sort();
console.log(arr3);
//sort in ascending or descending order
console.log("sorting in ascending or descending order");
 //sort function take an optional campare function this function is provided as the first argument.
                              
let compare = (a, b)=>{
    return a-b;
    //return b-a; for sorting in descending order
}
arr3.sort(compare);
console.log(arr3);

//splice method
let arr4 = [10, 20, 30, 40, 50, 60];
console.log("array before using splice method: "+ "["+arr4+"]");
arr4.splice(2, 2, 131, 141); // splice methods is used to add new items to the array
console.log("after using splice method: "+"["+arr4+"]");

//slice method
let arr5 = [32,41,45,67,76,87];
let subarr = arr5.slice(2, 4); //slice methods is used to slice out a part of a pre-existing array and return it as a new array
console.log(subarr);

//reverse method
let arr6 = [78,65,45,79,24];
arr6.reverse(); // reverse method reverses the source array
console.log(arr6);
