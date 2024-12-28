//practice on async await functions

const fetchData = async()=>{
    try{
        let mumWeather = new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve("27 deg")
            },3000)
        })
        let delWeather = new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve("27 deg")
            },3000)
        })
        
        let Mumbai = await mumWeather;
        alert("Mumbai weather fetched!")
        console.log(Mumbai)
        let delhi = await delWeather;
        alert("Delhi weather fetched!")
        console.log(delhi)
    }
    catch(err){
        console.error("Error while fetching weather");
    }   
}

fetchData();