
    let a = prompt("Enter a key to add cookie");
    encodeURIComponent(a)
    let b = prompt("Enter value for the provided key") 
    encodeURIComponent(b)
    document.cookie = `${a}=${b}`
    console.log(document.cookie)
    console.log(decodeURIComponent(a))