//usual way to insert
let a = document.getElementById("features").lastElementChild;
a.innerHTML = a.innerHTML + "<h1>Hello</h1>";

//another way by creating an element
let b = document.getElementById("features").lastElementChild;
let li = document.createElement('li');
li.innerHTML = "Recently added!!"
b.appendChild(li);


// using more insertion methods
//node.append()
let c = document.getElementById("intro")
let p = document.createElement('p');
p.innerHTML = '<b>i am added using node.append()<b>'
c.append(p)

//node.prepend() 
let d = document.getElementById('intro')
let h2 = document.createElement('h2')
h2.innerHTML = 'I am prepended using node.prepend()'
d.prepend(h2)

//node.before()
let e =document.getElementById('details')
let h3 = document.createElement('h3')
h3.innerHTML = 'i am added using node.before()'
e.before(h3)

//node.after()
let f = document.getElementById('details')
let nh3 = document.createElement('h3')
h3.innerHTML = 'I am added using node.after()'
f.after(h3);

//node.replace()
let g = document.getElementById('details').lastElementChild
let n = document.createElement('p')
n.innerHTML = '<i>I am replaced with the previous content using .replace() and right now you can see me</i>';
g.replaceWith(n);