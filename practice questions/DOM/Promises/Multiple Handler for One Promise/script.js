//program for practicing multiple handlers for one promise

let p1 = new Promise((resolve, reject)=>{
    console.log("promise is not yet resolved")
    setTimeout(()=>{
        console.log("Promise Done!!")
        resolve("first promise done")
    },2000)
})

p1.then((value)=>{
    console.log(value);
})
p1.then((value)=>{
    setTimeout(()=>{
        console.log("congo!!")   //this
    },2000)
})
p1.then((value)=>{
    setTimeout(()=>{
        console.log("hurray!!")  //this  both work together
    },2000)
})