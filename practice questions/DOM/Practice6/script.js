function loadScript(src, callback){
    let script = document.createElement("script");
    script.src = src;
    script.onload = function(){ //if script is loaded 
        console.log("script loaded with src: "+src);
        callback(null, src);  //callback function calling
    }
    script.onerror = function(){ // error handling
        console.log("Error while loading script with src: "+src);
        callback(new Error("src got some error")) //passing error object
    }
    document.body.appendChild(script);
}

function hello(error, src){
    if(error){
        console.log(error);
    }
    else{
        alert("Hello src is loaded with: "+src);
    }
}


loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js", hello);

//we can also call callback function using arrow functions
// loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js", (error, src)=>{  //callback arrow function same as hello
//     if(error){
//         console.log(error);
//     }
//     else{
//         alert("Hello src is loaded with: "+src);
//     }
// });