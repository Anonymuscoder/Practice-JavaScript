//.hasAttribute methods
let a = document.getElementsByClassName("container")[0];
console.log("a.hasAttribute(id): "+a.hasAttribute("id"));

//.getAttribute
let b = document.getElementsByClassName("paragraph")[1];
console.log('b.getAttribute("class"): '+b.getAttribute("class"));

//.setAttribute
b.setAttribute('class', 'changed');
console.log(".setAttribute used, element classname changed")

//.removeAttribute
let c = document.getElementsByClassName("paragraph")[0];
c.removeAttribute('hidden');
console.log(c)
console.log ("hidden attribute removed using .removeAttribute methods")

//displaying custom attribute
console.log(a.dataset);