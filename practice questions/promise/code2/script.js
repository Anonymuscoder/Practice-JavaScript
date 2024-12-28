//Write a promise chain where the first promise resolves to "Step 1", the second resolves to "Step 2", 
// and the final message in the chain is "All steps completed".

let p = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Step 1")
    },2000)
})

p.then((value)=>{
    console.log(value);
    return new Promise((resolve, reject)=>{
        resolve("Step 2");
    })
}).then((value)=>{
    console.log(value)
    console.log("All steps completed");
})