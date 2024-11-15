document.body.getElementsByTagName("nav")[0].firstElementChild.firstElementChild.style.color="Red"; //turning the navbar's first element into red
document.body.getElementsByClassName("container")[0].firstElementChild.style.color="Green" //changing color
document.body.getElementsByClassName("container")[0].lastElementChild.style.color="Green" //changing color
Array.from(document.body.getElementsByTagName("li")).forEach((element)=>{  //changing bachgrounds of li's
    element.style.background="cyan"
})
