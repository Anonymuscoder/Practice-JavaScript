const hack = async()=>{
    let user = 'jade'
    let username = 'jade1418'
    let st = "Initiating hacking process..."
    document.getElementById('p1').textContent = st
    console.log(st)
    try{
        let getHack = new Promise((resolve,reject)=>{
            setTimeout(() => {
                resolve(`Fetching and hacking: ${user}`);
            }, 3000);
        })
        let getHack1 = new Promise((resolve,reject)=>{
            setTimeout(() => {     
                resolve(`User Fetched, accessing instagram @ ${username}...`);
            },7000);
        })
        let getHack2 = new Promise((resolve,reject)=>{
            setTimeout(() => {
                resolve("Account Accessed, getting further details...");
            },10000);
        })
        let getHack3 = new Promise((resolve,reject)=>{
            setTimeout(() => {
                resolve("getting gmail logins..");
            },15000);
        })
        let getHack4 = new Promise((resolve,reject)=>{
            setTimeout(() => {
                resolve("Passwords, and Details saved storage!!")
            },20000);
        })

        let a = await getHack
        console.log(a)
        document.getElementById('p2').textContent = a
        let b = await getHack1
        console.log(b)
        document.getElementById('p3').textContent = b
        let c = await getHack2
        console.log(c)
        document.getElementById('p4').textContent = c
        let d = await getHack3 
        console.log(d)
        document.getElementById('p5').textContent = d
        let e = await getHack4
        console.log(e)
        document.getElementById('p6').textContent = e
    }catch(err){
        console.log(err)
    }
}


