// grab the random secret word from the game.js file:
// var secretWord = require('./game.js')
// console.log(secretWord);
var lettersGuessed = [];
var correctGuess = [];

var Word = function(secretWord) {
    this.specialWord = secretWord;
    this.guess = function() {
    	console.log('figure out how to put guessing stuff here...');
    }
    this.display = function() {
        console.log('figure out how to put display stuff here...');
    }
}



module.exports = Word;
