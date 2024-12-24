/*Q.Write a function greetUser that takes a name and returns the string:
Hello, [name]! Welcome to React. using template literals.*/

const greetUser = (name) =>{
    let str = `Hello, ${name}! Welcome to Javascript`;
    return str;
}

console.log(greetUser('jade'))