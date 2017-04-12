var wins = 0;
var losses = 0;
var lives = 9;
var picks = [];
var alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var secret;
var pick;

function compChoice (){

	return alphabet[Math.round(Math.random()*23)];

};

function keyPress (event){
	
	displayError("");
	pick = String.fromCharCode(event.keyCode).toUpperCase();

	// checking if User pick already exists in an array Picks 
	if (picks.indexOf(pick) > -1){
		displayError("You\'ve already tried " + "'" + 
			pick + "'" + "! Try a different letter!");
		return;
	};

    //adding each pick to an array Picks so not to allow user to repeat letters
	picks.push(pick);
	document.getElementById("guesses").innerHTML = picks;
	
	// checking if user guessed the secret letter
	if (pick == secret) {
		wins++;
		document.getElementById("tada").play();
		reset();
	}else{
		lives--;
		if (lives === 0){
			losses++;
			document.getElementById("trombone").play();
			reset();
		};

	}
	updateScreen();
};


function reset(){

	picks = [];
	lives = 9;
	secret = compChoice();
	// console.log(secret);
};


function updateScreen(){
	
	document.getElementById("losses").innerHTML = losses;
	document.getElementById("guesses").innerHTML = picks;
	document.getElementById("lives").innerHTML = lives;
	document.getElementById("wins").innerHTML = wins;
};


function displayError (error){
	document.getElementById("errors").innerHTML = error;
};


function execute (){

	secret = compChoice();
	document.onkeypress = keyPress;
	// For Cheaters & Testers
	// console.log(secret);
};

window.onload = execute;