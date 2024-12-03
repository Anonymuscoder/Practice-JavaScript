//program for practicing Fetch api using POST Options

const getTodo = async(todo)=>{
    let options = {
        method:"POST",
        headers: {
            "Content-type":"application/json"
        },
        body: JSON.stringify(todo)  //stringify converts the javascript object into string format 
    }
    let p = await fetch('https://jsonplaceholder.typicode.com/posts', options) // first data is sent or read
    let response = await p.json();  //then extracted here
    return response
}

const retrieveTodo = async(id)=>{
    let p = await fetch('https://jsonplaceholder.typicode.com/posts/'+id) // p promise gets result value as readed(data is readed)
    let response = await p.json() //p.json() is used to get data in json format(extracting the data)
    return response
}

const mainfunc = async()=>{
    let todo = {
        title:"Harry",
        body:"bhai",
        userId: 1100
    }
    let response = await getTodo(todo);
    console.log(response);
    console.log(await retrieveTodo(1))
}

mainfunc()