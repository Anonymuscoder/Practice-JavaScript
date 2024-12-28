//Create a simple promise that resolves after 2 seconds with the message "Hello, Promise!". 
// Log the resolved value to the console.

let p = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("Hello, Promise!");
    },2000)
})

p.then((value)=>{
    console.log(value);
})
