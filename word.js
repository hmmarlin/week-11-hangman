// grab the random secret word from the game.js file:
var word = require('./game.js');
console.log(word);

// add the secret word to an array:
var secretArray = [];

for (var i = 0; i<word.length; i++){
	var a = word.charAt(i)
	secretArray.push(a);
}


// prompt the user for a guess using inquirer

var inquirer = require('inquirer');
var lettersGuessed = [];
var correctGuess = [];

for (var j = 0; j<word.length; j++){
	correctGuess.push('-')
}

console.log(correctGuess);

var guessesLeft = 12;

var playGame = function (){

var dash = correctGuess.indexOf('-');
if (dash == -1){
	console.log('Great job! The secret word was ' + word + '!');
}	

else if (guessesLeft > 1) {
    inquirer.prompt([{
                    name: "letter",
                    message: "Guess a letter!"
                }]).then(function(guess) {
	var newGuess = guess.letter;
	for (var k = 0; k<secretArray.length; k++){
			if (newGuess == secretArray[k]){
				correctGuess[k] = newGuess;
			}

	}
	guessesLeft--;
	lettersGuessed.push(newGuess);
	console.log(correctGuess);
	console.log('Letters guessed: ' + lettersGuessed);
	playGame();
});
            }
else
	console.log('Game Over! You lost')
	
	
}

playGame();
