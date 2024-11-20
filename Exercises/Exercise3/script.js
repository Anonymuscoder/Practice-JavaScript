let delem = document.getElementsByClassName("date")[0].lastElementChild;
let helem = document.getElementsByClassName("hours")[0].lastElementChild;
let melem = document.getElementsByClassName("minute")[0].lastElementChild;
let selem = document.getElementsByClassName("second")[0].lastElementChild;

setInterval(()=>{
    let dd = new Date();
    let d = dd.getDate()
    let h = dd.getHours()
    let m = dd.getMinutes()
    let s = dd.getSeconds()
    delem.innerHTML=d;
    helem.innerHTML=h%12
    melem.innerHTML=m; 
    selem.innerHTML=s; 
    console.log(d,h,m,s)
},1000)

