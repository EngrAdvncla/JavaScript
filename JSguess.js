function startGame(){
	const targetNum = generateRandom();
	let guess = getInput();
	while (guess !== targetNum){
		if (guess > targetNum){
			console.log(`${guess} IS TOO HIGH`)
		} else {
			console.log(`${guess} IS TOO LOW`)
		}
		guess = getInput();
	}
	alert("YOU WIN!!!")
}

function generateRandom(){
	return Math.floor(Math.random() * 10) + 1;
}

function getInput(){
	let guess = parseInt(prompt("Enter a number"));
	while (Number.isNaN(guess)){
		guess = parseInt(prompt("Please Enter a VALID NUMBER!"));
	}
	return guess;
}


startGame();