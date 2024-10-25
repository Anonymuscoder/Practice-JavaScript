//code for demonstrating array methods

let arr = [98,87,76,78,79,89,98];

console.log(arr);

let res1 = arr.toString(); //converts array into string element
console.log(res1, typeof(res1));

let res2 = arr.join(".."); //joins the elements of the array and return them as a string element
console.log(res2, typeof(res2));

let res3 = arr.pop(); //removes an element from the end of an array and returns the popped element
console.log(res3, arr);

let res4 = arr.push(100); //adds new element to the end of an array and returns new length of the array
console.log(res4, arr);

let res5 = arr.shift(); //removes an element from the start of an array and returns the removed element
console.log(res5, arr);

let res6 = arr.unshift(99); //adds an element to the start of an array and return the new array length
console.log(res6, arr);