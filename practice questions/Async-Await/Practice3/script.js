let userData = async () => {
  try {
    let data1 = new Promise((resolve, reject) => {
      setTimeout(() => {
        let n = Math.round(Math.random());
        console.log(n);
        if (n === 1) {
          resolve("Data Api 1 fetched");
        } else {
          reject("Api 1");
        }
      }, 3000);
    });
    let data2 = new Promise((resolve, reject) => {
      setTimeout(() => {
        let n = Math.round(Math.random());
        console.log(n);
        if (n === 1) {
          resolve("Data Api 2 fetched");
        } else {
          reject("Api 2");
        }
      }, 3000);
    });

    console.log("fetching data...");
    let a = await Promise.all([data1, data2]); 
    return a;
    
  } catch (err) {
    console.log("Error caught in userData:", err);
    throw err
  }
 
};

let getData = async () => {
  try {
    let result = await userData();
    console.log(result);
  } catch (error) {
    console.log("cant load " + error);
  }
};

getData();
