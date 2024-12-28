//ps-6

// const q1 = () => { //q1
//   let age = prompt("Enter age");
//   age = Number.parseInt(age);
//   elem1 = document.getElementById("q1");
//   if (age > 18) {
//     elem1.textContent = "Eligible!!";
//   } 
//   else if(age <- 0){ //q3
//     console.error("age is entred negative")
//   }
//   else {
//     elem1.textContent = "Not Eligible!";
//   }
//   prptag();
// };

// const prptag = () => { //q2
//   let promptAgain = confirm("want the prompt to repeat");
//   if (promptAgain) {
//     q1;
//   } else {
//     alert("Thank you");
//   }
// };


//q4
// const promptw =()=>{
//     let rp 
//     let p = prompt("Enter a number greater than 4 to get redirected to google.com")
//     p = Number.parseInt(p);
//     if(p>4){
//         window.location.href = "https://www.google.com"
//     }else{
//        rp = confirm("want prompt again?");
//        if(rp){
//         promptw();
//        }else{
//         alert("thank you")
//        }
//     }
// }
// promptw();
// q1();


//q5
const changebg = () => {
    let color = prompt("Enter color to change the background color..")
    document.body.style.backgroundColor = color;
}
changebg();
