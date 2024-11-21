//writing load script function using promises

const loadScript=(src)=>{
    return new Promise((resolve, reject)=>{
        let script = document.createElement('script')
        script.src = src;
        document.body.appendChild(script);
        script.onload=()=>{ resolve("script loaded")}
        script.onerror=()=>{ reject("Error occurred..")}
    })
}

let p1 = loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js");
p1.then((value)=>{
    console.log(value);
    return loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js")
}).then((value)=>{
    console.log("Second Script loaded")
}).catch((error)=>{
    console.log(error);
    console.log("we are having problem loading the script right now!!")
})