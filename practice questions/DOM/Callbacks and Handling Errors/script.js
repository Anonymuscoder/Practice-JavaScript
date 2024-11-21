function loadScript(src,callback){
    let script = document.createElement("script");
    script.src=src;
    document.body.appendChild(script);
    script.onload=()=>{
        console.log("script loaded");
        callback(null,src);
    }
    script.onerror=()=>{
        console.log("Error occurred");
        callback(new Error("Something went wrong"));
    }
}

function hello(error, src){
    if(error){
        console.log(error)
        return
    }
    else{
        console.log("hello "+src);
    }
}

loadScript("https://cdn.jsdddelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js",hello);