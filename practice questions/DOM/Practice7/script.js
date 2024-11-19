let x = function(e){
    alert("Hello1");
}

let y = function(e){ //e is an event object generated when a event is triggered or event had happened and it contains all the information about the event
    alert("Hello2");
}

let elem = document.getElementById("btn1");
elem.addEventListener('click', x);  //click is event and x is a event handler or a function handling event
elem.addEventListener('click', y);

let a = prompt("Enter a number");
a= Number.parseInt(a);
if(a===2){
    elem.removeEventListener('click', x);
}
elem.removeEventListener('click', y);
