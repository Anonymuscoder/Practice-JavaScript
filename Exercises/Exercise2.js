//Q.Snake Water and Gun Game:

let input = () => {
  let play = prompt("Enter You Choice");
  if (play) {
    let str = play.charAt(0).toUpperCase() + play.slice(1);
    result(str);
  } else {
  }
};

let count = 10;

let result = (str) => {
  const arr = ["Snake", "Water", "Gun"];
  let rp = arr[Math.floor(Math.random() * arr.length)];
  console.log(rp);
  console.log(rp + "v/s" + str);
  count--;
  if (rp == str) {
    alert("Draw!, Try Again.. You have "+count+" chances remained");
    input();
  } else if (rp == "Gun" && str == "Snake") {
    alert("You lose!!, Try Again.. You have "+count+" chances remained");
    input();
  } else if (rp == "Water" && str == "Gun") {
    alert("You lose!!, Try Again.. You have "+count+" chances remained");
    input();
  } else if (rp == "Snake" && str == "Water") {
    alert("You lose!!, Try Again.. You have "+count+" chances remained");
    input();
  } else if(count==0){
    alert("Out of Chances!!.. You lose");
  }else {
    alert("You Win!!");
    
    let replay = confirm("Want to play again??");
    if (replay) {
      count = 10;
      input();
    } else {
    }
  }
};

alert(
  "Snake, Water & Gun Game: In this game you got 10 chances if you lose to win, Here Snake beats Water, Water beats Gun, and Gun beats Snake, in these conditions you will lose the game.."
);
input();
