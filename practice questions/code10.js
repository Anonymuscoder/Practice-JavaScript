//Q. write a program that takes age of the user as an input and alerts user if he or she can drive.  (practice set 6)

function eligibilityTest(n){
    n = Number.parseInt(n);
    if(n>=18){
        alert("You are eligible for the driver's license and you can drive");
    }
    else if(n<0){
        console.error("invalid input entered");
        alert("invalid input... try again");
        input();
    }
    else{
        alert("You are not eligible for getting driver's license")
    }
    repeat();

}

const input = ()=>{
    let age = prompt("Enter your age to check eligibility for driver's license");
    if(age==null){
    }
    else{
        eligibilityTest(age);
    }
}

const repeat = () =>{
    let con = confirm("want to see the prompt again?");
    if(con){
        input();
    }
    else{    
    }
}

input();

