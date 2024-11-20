let p1 = new Promise((resolve,reject)=>{
    let name = 'admin';
    if(name=='admin'){
        resolve("signed in")
    }else{
        reject(new Error("error occurred!!"))
    }
})

// p1.then((value)=>{ //value catches value coming from resolve   //this works
//     console.log(value)
// },(error)=>{  //error catches error coming from reject
//     console.log(error);
// })

// p1.then(value=>{   //this won't work
//         console.log(value);
//     })
// p1.catch(error=>{
//         console.log(error);
//     })


p1.then(value=>{   //this works
        console.log(value);
    })
    .catch(error=>{
        console.log(error);
    })
