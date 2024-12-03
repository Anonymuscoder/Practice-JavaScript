//program for practicing fetch api
try{
    let p = fetch("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m&models=gfs_seamless")
    p.then((response)=>{
        console.log(response.status);
        console.log(response.ok)
        console.log(response.headers)
        return response.json()  // reponse.json() methods converts the response into json format and pass it no the next .then()
    }).then((response)=>{
        console.log(response);
    })
}catch(err){
    console.log(err+" sorry cannot fetch")
}

