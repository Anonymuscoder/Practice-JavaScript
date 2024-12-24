// Insertion methods of Dom

//normal
let a = document.getElementsByClassName("section")[0];
a.innerHTML = a.innerHTML+" <!-- added --> <h1>Hello</h1> ";

//another way
let div = document.createElement("div");  //.createELement()
div.innerHTML = "<b>This is me</b>"
let b = document.getElementsByTagName("header")[0];
b.appendChild(div);

//more insertion methods