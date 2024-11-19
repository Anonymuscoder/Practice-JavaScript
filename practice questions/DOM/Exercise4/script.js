//approach 2

// let belem1 = document.getElementById("btn1");
// let belem2 = document.getElementById("btn2");
// let belem3 = document.getElementById("btn3");
// let belem4 = document.getElementById("btn4");

// belem1.addEventListener('click',()=>{
//     alert("Hello")
// })
// belem2.addEventListener('click',()=>{
//     alert("Hola")
// })
// belem3.addEventListener('click',()=>{
//     alert("Namaste")
// })
// belem4.addEventListener('click',()=>{
//     alert("Hi")
// })

//Q3

let elem = document.getElementsByClassName("bookmark")[0];
let elem1 = document.getElementsByClassName("bookmark")[1];
let elem2 = document.getElementsByClassName("bookmark")[2];

elem.addEventListener('click',()=>{
    // elem.setAttribute('href','https://google.com');
    window.location = "https://google.com"
    console.log("attribute set")
})
elem1.addEventListener('click',()=>{
    // elem1.setAttribute('href','https://fb.com');
    window.location = "https://fb.com"
    console.log("attribute set")
})
elem2.addEventListener('click',()=>{
    // elem2.setAttribute('href','https://twitter.com');
    window.location = "https://twitter.com"
    console.log("attribute set")
})

//Q4 in review or added in future

//Q5 
let bulb = document.getElementsByClassName("bulb")[0];
setInterval(()=>{  //setInterval used
    bulb.classList.toggle("on");
},300)