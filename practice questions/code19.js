/* Given the object:
const user = { name: "Alice", age: 25, city: "New York" };
Write code to extract name and city using object destructuring.
 */

const user = { 
    name: "Alice", 
    age: 25, 
    city: "New York" 
};
const {name, city} = user; //destructuring into variables
//const {name : firstname, city: location} = user; //destructing into
console.log(name)
console.log(city)