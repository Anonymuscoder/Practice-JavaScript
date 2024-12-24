// //Q1
// let loadScript = async(src)=>{
//     let p1 = new Promise((resolve, reject)=>{
//         let script = document.createElement('script');
//         script.src = src;
//         document.body.appendChild(script)
//         script.onload=()=>{
//             resolve("script loaded")
//         }
//         script.onerror=()=>{
//             reject("script cant be loaded")
//         }
//     })
//     p1.then((val)=>{
//         alert(val)
//     }).catch((err)=>{
//         console.log("sorry "+err);
//     })
// }

// loadScript("https://cdn.jsdselivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js")

// //Q2
// let getScript = async(src)=>{
//     console.log("loading...")
//     return new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             let script = document.createElement('script');
//             script.src = src;
//             document.body.appendChild(script)
//             script.onload=()=>{
//             resolve("script loaded")
//             }
//             script.onerror=()=>{
//                 reject(new Error("script cant be loaded"))
//             }
//         }, 3000);
//     })
// }

// let main = async()=>{
//     try{
//     let a = await getScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js")
//     alert("sucess!! "+ a)
//     }catch(err){
//         alert(err)
//     }

// }

// main()

// //Q3
// let temp = async () => {
//   console.log("start");
//   let t = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let a = 2;
//       if (a >= 18) {
//         resolve("valid age");
//       } else {
//         reject("Invalid age, promise rejected");
//       }
//     }, 3000);
//   });

//   try {
//     let out = await t;
//     alert(out);
//   } catch (err) {
//     alert(err);
//   }
// };
// temp();

// //Q4
// let getUser = async()=>{
//     let user1 = new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             let n = Math.floor(Math.random()*2)
//             console.log(n)
//             if(n===1){
//                 resolve("user1 fetched..")
//             }else{
//                 reject("cannot fetch user1")
//             }
//         }, 3000);
//     })
//     let user2 = new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             let n = Math.floor(Math.random()*2)
//             console.log(n)
//             if(n===1){
//                 resolve("user2 fetched..")
//             }else{
//                 reject("cannot fetch user2")
//             }
//         }, 5000);
//     })
//     let user3 = new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             let n = Math.floor(Math.random()*2)
//             console.log(n)
//             if(n===1){
//                 resolve("user2 fetched..")
//             }else{
//                 reject("cannot fetch user3")
//             }
//         }, 7000);
//     })

//     try{
//         let temp = await Promise.all([user1, user2, user3]);
//         alert("data fetched: "+temp)
//     }catch(err){
//         alert("cannot fetch the data: "+err)
//     }
// }

// getUser();