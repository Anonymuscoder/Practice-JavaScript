let a = document.getElementsByClassName('container')[0]; 
a.classList.add('class1') //adding class using .classList.add()

// a.classList.remove('class1') //removing class using .classList.remove(), uncomment this line to see effects

console.log(a.classList.contains('class1')) //checks if the element contains the given class or not, returns true or false

console.log(a.classList)  //give list of class for an element

// a.className = 'text-dark' //gives new class name to the element, uncomment this line to see result