var Word = require('./word.js')

var wordsList = require('./game.js');

var secretWord = wordsList.secretWord

var newRound = new wordsList(secretWord);
var theWord = newRound.secretWord;

// to check what the secret word is:
// console.log(theWord);


var newGuess;

// add the secret word to an array:
var secretArray = [];

for (var i = 0; i < theWord.length; i++) {
    var a = theWord.charAt(i)
    secretArray.push(a);
}

var inquirer = require('inquirer');
var lettersGuessed = [];
var correctGuess = [];



for (var j = 0; j < theWord.length; j++) {
    correctGuess.push('-')
}

console.log(correctGuess.join('    '));

var guessesLeft = 12;

var playAgain = function() {
    inquirer.prompt({
        name: "again",
        type: "confirm",
        message: "Would you like to play another round?"
    }).then(function(answer) {
        if (answer.again == true) {
            console.log("Aww, I'd bet you'd love to play again! Unfortunately Hannah couldn't quite get that part to work. Just run main.js again. BYE FELICIA!");
            // newRound = new wordsList(secretWord);
            // theWord = newRound.secretWord;
            // lettersGuessed = [];
            // correctGuess = [];
            // for (var j = 0; j < theWord.length; j++) {
            //     correctGuess.push('-')
            // }
            // secretArray = [];
            // newGuess;
            // guessesLeft = 12;
            // playGame();
        } else {
            console.log("Come back again soon!");
        }
    })
}

// var validate = function() {
//     for (var a = 0; a < lettersGuessed.length; a++) {
//         if (newGuess === lettersGuessed[a]) {
//             console.log("you already guessed that letter!")
//             inquirer.prompt([{
//                 name: "letter",
//                 message: "Guess a letter!"
//             }]).then(function(input2) {
//                 newGuess = input2.letter;
//                 proceed();
//             });

//         }
//     }
//     proceed();

// }


var proceed = function() {
    for (var k = 0; k < secretArray.length; k++) {
        if (newGuess === secretArray[k]) {
            correctGuess[k] = newGuess;
        }

    }
    guessesLeft--;
    lettersGuessed.push(newGuess);
    console.log(correctGuess.join('    '));
    console.log('Letters guessed: ' + lettersGuessed);
    console.log('Turns remaining: ' + guessesLeft);
    console.log('__________________________')
    playGame();
}

var playGame = function() {

    var dash = correctGuess.indexOf('-');
    if (dash == -1) {
        console.log('Great job! The secret word was ' + theWord + '!');
        playAgain();
    } else if (guessesLeft > 1) {
        inquirer.prompt([{
            name: "letter",
            message: "Guess a letter!"
        }]).then(function(input) {
            newGuess = input.letter;
            // validate();
            proceed();
        });
    } else if (guessesLeft < 0) {
        console.log('Game Over! You lost. The correct word was ' + theWord + '!')
        playAgain();
    }

}

module.exports = playGame;
