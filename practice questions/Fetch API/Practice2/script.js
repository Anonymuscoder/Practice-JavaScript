const getData = async()=>{
    try{
        let users = fetch('https://jsonplaceholder.typicode.com/users')
        console.log(users)
        let response = await users
        return response.json()
    }catch(err){
        return new Error("Connot fetch the data")
    }
    
}

const getUser = async()=>{
    try{
        let data = await getData()
        console.log(data)
        let elem = ""
        for(item in data){
            elem+= 
            `<p id="p1">Name: ${data[item].name}</p>
            <p id="p2">Phone number:  ${data[item].phone}</p>
            <p id="p3">Email:  ${data[item].email}</p>
            <br>
            `
        }
        dt_user.innerHTML = elem
    }catch(err){
        console.log("cannot fetch the data")
    }
}

getUser()