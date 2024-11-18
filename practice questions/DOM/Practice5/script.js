//practice on setTimeout and setInterval

let a = setTimeout(function(){   //setTimeout executes a code once after a particular delay
    alert("getting bored?? open console")
},2000)  //displays an alert after 2 secs

//clearTimeout(a); //a contains timerId as setTimeout function returns a timerid using id we can clear the timeout 

// let b = setInterval(function(){ //setInterval keeps executing the code having a particular time gap
//     console.log("nothing to show")
// },3000)  //

//clearInterval(b) //b contains timerId as setInterval function returns a timerid using id we can clear the interval 


//example: 
const sum = (a,b)=>{
    console.log("setTimeout Running, sum is "+(a+b));
}

const sum1 = (a,b)=>{
    console.log("setInterval Running, sum is "+(a+b));
}

let n = setTimeout(sum, 2000, 3, 5);

let n1 = setInterval(sum,3000,2,2);

//clearInterval(n1)