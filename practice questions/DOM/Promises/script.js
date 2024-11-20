//program for practicing promises
let p1 = new Promise(function(resolve,reject){
    console.log("Promise1 pending")
    setTimeout(()=>{
        console.log("in promise1");
        resolve("done..") //resolve send value after resolving
    }, 2000);
})

let p2 = new Promise(function(resolve,reject){
    console.log("Promise2 pending")
    setTimeout(()=>{
        console.log("in promise2");
        reject(new Error("Error Occured")) //reject throws error
    }, 2000);
})


console.log(p1);
console.log(p2);