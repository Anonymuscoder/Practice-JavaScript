//program for practicing promise chaining
let p1 = new Promise((resolve,reject)=>{
    console.log("promise pending");
    setTimeout(()=>{
        console.log("promise 1 done");
        resolve(56);
    })
})

p1.then((value)=>{
    console.log(value);
    return new Promise((resolve,reject)=>{
        console.log("promise 2 done")
        resolve(24);
    })
}).then((value)=>{
    console.log(value);
    return 2; //javascript automatically converts it into resolved promise with value 2
}).then((value)=>{
    console.log(value);
    console.log("final promise finished")
})