//ps-1

//q1
let str = "Hello"
console.log(str+1) // we can add number to a string

//q2
console.log(typeof(str)) //used to find the datatype of a variable

//q3
const object = {
    name: "jade",
    age: 24
}
//object = 34; // we cannot change const object to store a number
console.log(object)

//q4
object['Location'] = "N.Y" // we can add new key pair values to const object
console.log(object.Location);

//q5

const dictionary = {
    happy : "to smile or laugh",
    sad: "to cry or not to smile",
    fear: "to be afraid to something"
}
let word = 'happy';
console.log(dictionary[`${word}`]); 