let weather = async () => {
  //async function returns a fullfilled promise and runs in the background
  let delhiWeather = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("27 deg");
    }, 2000);
  });

  let mumbaiWeather = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("21 deg");
    }, 5000);
  });

  console.log("fetching delhi weather");
  let delhiW = await delhiWeather; //await keyword is used to pause execution of js code untill a promise is fullfilled
  console.log("delhi weather is: " + delhiW);
  console.log("fetching mumbai weather");
  let mumbaiW = await mumbaiWeather;
  console.log("mumbai weather is: " + mumbaiW);
  return [delhiW, mumbaiW];
};

const cherry = () => {
  // normal function runs parellel to the async function as async function run in the background and do not affect the execution of the code
  console.log("hey! I am cherry and I am not waiting");
};

const alpha = async () => {
  console.log("Hey!, I am alpha and i am waiting");
};

const input = async () => {
  console.log("Welcome to weather control room");
  let a = await weather();
  let b = await alpha();
  console.log(a);
  console.log(b);
};
input();
cherry();
