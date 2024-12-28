let x = (e)=>{ //event object e accessed here and its unique and different for all the and every events
    console.log(e);
    console.log("i am clicked");
}
let y = (e)=>{ //event object e accessed here and its unique and different for all the and every events
    console.log(e);
    console.log("i am clicked 2");
}

let elem = document.getElementsByTagName('button')[0];

elem.addEventListener('click', x); //adds a click event to button, this passes an event object which is further 
                                    //accessed in eventHandling function here its x
elem.addEventListener('click', y); 

let a = prompt("Enter a number...")
if(a==2){
    elem.removeEventListener('click',y); //removes event using the event object where function contains its unique event object
}

//removeEventListener identifies which event remove on the basis of event object it receives and function which contains the event object2