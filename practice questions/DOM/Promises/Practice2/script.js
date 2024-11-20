//practice program on promises using setTimeout

let p1 = new Promise((resolve,reject)=>{
    console.log('in promises');
    setTimeout(()=>{
        // reject(new Error("Error in p1"));
        resolve(56);
    },2000)
})

let p2 = new Promise((resolve,reject)=>{
    console.log('in promises');
    setTimeout(()=>{
        reject(new Error("Error in p2"));
        // resolve(56);
    },2000)
})

p1.then((value)=>{
    console.log(value);
}).catch((error)=>{
    console.log(error)
})

p2.then((value)=>{
    console.log(value)
}).catch((error)=>{
    console.log(error)
})