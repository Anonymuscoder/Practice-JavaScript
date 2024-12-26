//ps-3

//q1

const obj = {
    harry: 98,
    rohan: 67,
    jade: 78
}

// console.log(obj['rohan']);
console.log(Object.keys(obj)); //given and array of key 
console.log(Object.keys(obj)[0]);
console.log(obj[Object.keys(obj)[0]]);//gives values of key present on 0 position in array euivalen to obj['rohan']
console.log(obj['rohan']) //this asks for value for the given key
for(let i=0; i<Object.keys(obj).length; i++){ //object.key(<objname>) // return keys inside the given object
    console.log("Mark of "+ Object.keys(obj)[i]+" are "+ obj[Object.keys(obj)[i]]);
}

//q2
for(let a in obj){ //it accesses the key in object here a= the keys
    console.log("marks of "+a+" are "+obj[a])
}

//q3 : number guess game
let randomNumber = undefined;
let n = 9; //enter number between 1 to 20 and see if you guessed right
const generateNumber = (n)=>{
    randomNumber = Math.floor(Math.random()*20+1)
    if(randomNumber===n){
        console.log("You Guessed Right")
    }else{
        console.log("Try Again")
    }
}
generateNumber(n);


//q4 : mean of 5 numbers
const mean = (a, b, c, d, e) => {
    return (a + b + c + d + e) / 5;
}
console.log(mean(3,4,5,6,7))