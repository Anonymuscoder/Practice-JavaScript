//Exercise1: Guess Game

let randomNumber = Math.floor(Math.random()*101);
console.log(randomNumber);
alert("Guess Game: We will generate a number, you have to Guess that number, and you have 10 chances to Guess the Number, If you guess the number in the first place you will get maximum score which is 100, for each wrong guess 10 points will be deducted from the maximum score")
let guess;
let score = 100;
let difference;
let chances = 10;
do{
    guess = prompt("Enter your Guess");
    guess = Number.parseInt(guess);
    if(guess == randomNumber){
        alert("You Guessed Right, Actual Number is "+randomNumber+", Your score is "+score);
        break;
    }
    else{
        difference = guess - randomNumber;
        if(difference < 0){
            let result = Math.abs(difference);
            chances--;
            alert("Guessed Wrong! Actual Number is greater than the Guessed Number. You are now remained with only "+chances+" chances, Try Again...");
            score = score - 10;
        }
        else{
            let result = difference;
            chances--;
            alert("Guessed Wrong! Actual Number is lesser than the Guessed Number. You are now remained with only "+chances+" chances, Try Again...");
            score = score - 10;
        }
    }
}while(chances>0);
alert("You Lose the game!!!");