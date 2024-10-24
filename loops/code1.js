//code for demonstrating objects and use of for in loop to traverse through the keys of the object

let obj = {
    harry: 90,
    hritik: 60,
    vaishav: 80,
    shivika: 99,
    roshan: 40
}

for(a in obj){
    console.log("The marks of "+ a + "are "+ obj[a]);
}