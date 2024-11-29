let getUser = async() =>{
    try{
        let getdata = new Promise((resolve, reject)=>{
            setTimeout(()=>{
                if(Math.round(Math.random())===1){
                    reject("User data fetched!!!")
                }
                else{
                    reject("User data cannot be fetched!!!")
                }
            },2000);
          
        });
        return getdata;
    }catch(err){
        return new Error(err);
    }    
}

let fetchData = async()=>{
    console.log("Fetching user data.")
    console.log("Fetching user data..")
    console.log("Fetching user data...")
    try {
        let result = await getUser();
        console.log(result)
    } catch (err) {
        console.log(err)
    }
    
}

fetchData();