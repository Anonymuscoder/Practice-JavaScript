const putData = async()=>{
    let p = fetch('https://jsonplaceholder.typicode.com/posts',{
        method : "POST",
        headers: {
            'Content-Type' : 'application/json',
        },
        body: JSON.stringify({
            'Name':'Harry',
            'Phone':78642313,
            'Email':'harryxyz@domain.com',
            'userId':1100
        })
    })

    let response = await p
    let data = await response.json()
    return data
}

const showData = async()=>{
    let uploaded_data = await putData()
    console.log(uploaded_data)
}
showData()