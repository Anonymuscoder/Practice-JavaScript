//program for practicing pyramid of doom and callback hell

const loadScript = (src, callback)=>{
    let script = document.createElement("script");
    script.src = src;
    document.body.appendChild(script)
    script.onload = ()=>{
        console.log("script loaded");
        callback(null, src);
    }
    script.onerror = ()=>{
        console.log("fail to load script!!");
        callback(new Error("something went wrong"))
    } 
}

// let loaded = (error,src)=>{
//     if(error){
//         console.log(error)
//     }
//     else{
//         console.log(src);
//     }
// }

loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js", (error,src)=>{
    if(error){
        console.log(error)
    }
    else{
        console.log(src+": done loading script!!")
        loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js", (error,src)=>{
            if(error){
                console.log(error)
            }
            else{
                console.log(src+": done Second loading script!!")
                loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js", (error,src)=>{
                    if(error){
                        console.log(error)
                    }
                    else{
                        console.log(src+": done loading script!!")
                        loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js", (error,src)=>{
                            if(error){
                                console.log(error)
                            }
                            else{
                                console.log(src+": done loading script!!")
                                loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js", (error,src)=>{
                                    if(error){
                                        console.log(error)
                                    }
                                    else{
                                        console.log(src+": done loading script!!")
                                        
                                    } //code keep moving to right this is called callback hell and pyramid of Doom
                                })
                            }
                        })
                    }
                })
            }
        })
    }
})