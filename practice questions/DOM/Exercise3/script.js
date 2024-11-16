let jk =[`Why don't skeletons fight each other? They don't have the guts.`,

`What did the ocean say to the beach? Nothing, it just waved.`,

`Why did the scarecrow win an award? Because he was outstanding in his field!`,

`What do you call fake spaghetti? An impasta.`,

`Why did the bicycle fall over? Because it was two-tired!`,

`Why did the math book look sad? Because it had too many problems.`,

`How does a penguin build its house? Igloos it together!`,

`What do you call cheese that isn't yours? Nacho cheese.`,

`Why couldn't the leopard play hide and seek? Because he was always spotted.`,

`What lights up a soccer stadium? A soccer match.`,

`Why did the golfer bring two pairs of pants? In case he got a hole in one.`,

`Why do seagulls fly over the sea? Because if they flew over the bay, they’d be bagels.`,

`Why don’t scientists trust atoms? Because they make up everything!`,

`How does a vampire start a letter? Tomb it may concern…`,

`Why did the tomato turn red? Because it saw the salad dressing!`,

`What kind of shoes do ninjas wear? Sneakers.`,

`Why did the banana go to the doctor? Because it wasn’t peeling well.`,

`How do you organize a space party? You planet.`,

`What did one wall say to the other? I'll meet you at the corner.`,

`Why can't your nose be 12 inches long? Because then it would be a foot!`];

let randomjk = jk[Math.floor((Math.random()*jk.length))];
let elem = document.getElementsByClassName('jokes')[0];
elem.innerHTML = randomjk;