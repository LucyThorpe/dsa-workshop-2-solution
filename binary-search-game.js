var prompt = require('prompt');


// Initialise game variables
const amountOfNumbers = 10000;
let numberOfGuesses = 0;
let userInput;
let lowValue = 0;
let middleValue;
let highValue = amountOfNumbers;

console.log(`guess a number between 0 and ${amountOfNumbers}`)
getInitialUserResponse();

function getInitialUserResponse() {
    console.log("Have you guessed a number? (y/n)");
    prompt.get(['userAnswer'], function(err, response){
        if (err) return console.log('oops there\'s an error');
        if (response.userAnswer == 'y') {
            makeGuess();
        } else {
            getInitialUserResponse();
        }
    })
}

function makeGuess() {
    middleValue = Math.floor((lowValue + highValue) / 2);
    numberOfGuesses++
    console.log(`Is your number ${middleValue}? (l/h/c)`)
    prompt.get(['userAnswer'], function(err, response) {
        if (err) return console.log('Something went wrong');
        if (response.userAnswer == 'c') {
            finishGame();
        }
        if (response.userAnswer == 'l') {
            highValue = middleValue - 1
            makeGuess();
        }
        if (response.userAnswer == 'h') {
            lowValue = middleValue + 1
            makeGuess();
        }
    })
}

function finishGame() { 
    let guessesWord = "guesses"
    if (numberOfGuesses == 1) {
        guessesWord = "guess"
    } 
    console.log(`excellent, your number was ${middleValue} and it took me ${numberOfGuesses} ${guessesWord}`)
}