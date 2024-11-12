//Q. write a program to redirect user to google.com if he/she enters number greater than 4

let num = prompt("Enter a number");
num = Number.parseInt(num);
if(num>4){
    location.href = "http://google.com";
}
