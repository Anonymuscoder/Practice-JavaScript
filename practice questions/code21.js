//ps-2

//q1
let age = 24;
if(age>10 && age<20){
    console.log("age's is between 10 and 20")
}else{
    console.log("age's not between 10 and 20")
}

//q2
let month = 3;

switch (month) {
    case 1:
        console.log("january")
        break;
    case 2:
        console.log("february")
        break;
    case 3:
        console.log("march")
        break;
    case 4:
        console.log("april")
        break;
    case 5:
        console.log("may")
        break;
    case 6:
        console.log("june")
        break;
    case 7:
        console.log("july")

        break;
    case 8:
        console.log("august")

        break;
    case 9:
        console.log("september")

        break;
    case 10:
        console.log("october")

        break;
    case 11:
        console.log("november")

        break;
    case 12:
        console.log("december")

        break;

    default:
        console.log("invalid month there are only 12 months in a year")
        break;
}

//q3

let num = 5;
if(num%2===0 && num%3==0){
    console.log(`yes ${num} is divisible by 2 and 3`)
}
else{
    console.log(`no ${num} is not divisible by 2 and 3`)
} 

//q4

let dage = 19;
if(dage>18){
    console.log("you can drive");
}else{
    console.log("you cannot drive");
}