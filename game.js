
// create an aray of random words:
var randomWords = ['sequoia', 'avocados', 'traffic', 'tacos', 'catalina','surfing', 'sunshine','freeway','hollywood', 'expensive', 'yosemite', 'bear', 'malibu', 'redwood', 'camping']

// select one of the words to be the word of the game:
var GenerateWord = function (){
	 this.secretWord = randomWords[Math.floor(Math.random()*randomWords.length)];
}

// export the secret word to be accessed by the word.js file
module.exports = GenerateWord;


