//Q. change the background of the page according to the input color name provided by the user

let input = () =>{
    let color = prompt("Enter a color name to change the background");
    if(color == null){
    }
    else{
        document.body.style.backgroundColor = color;
    }
}

input();

