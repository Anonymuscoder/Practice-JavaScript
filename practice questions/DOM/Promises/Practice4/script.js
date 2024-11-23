//program for practicing promises api methods

let p1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("First resolve");
    },1000)
})
let p2 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("Second resolve");
    },2000)
})
let p3 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("Third resolve");
    },3000)
})

let promise_all = Promise.all([p1,p2,p3]); //if one promise gets rejected all promises are considered to give error
// let promise_all = Promise.allSettled([p1,p2,p3]); //returns promises with their state and value
// let promise_all = Promise.race([p1,p2,p3]) //return value of the promise who finishes first regardless of, if it is resolved or rejected
// let promise_all = Promise.any([p1,p2,p3])  //return value of the promise who resolved and finished first
// let promise_all = Promise.resolve("done") // used for resolving promises with a value
// let promise_all = Promise.reject(new Error("something went wrong")) //used for reject promises with an error

promise_all.then((value)=>{
    console.log(value);
})