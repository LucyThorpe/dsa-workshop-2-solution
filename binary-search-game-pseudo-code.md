# Functions / Actions

prompt
guessNumber

# Variables / Data

correctGuess
numberOfGuesses
lowValue
middleValue
highValue
userInput (h/l/c)

# Logic / Decisions

Program start:

computer says:
"guess a number between 0 and {amountOfNumbers}"
then call getInitialUserResponse()


fn getInitialUserResponse ->

    computer prompts:
    "have you guessed a number? (y/n)"

    prompt -> (response) ->
        if (response.userInput == 'y') {
            makeGuess()
        } else {
            getInitialUserResponse()
        }

fn makeGuess ->
    mid = low + high / 2
    numberOfGuesses++
    prompt -> "is your number {mid} l/h/c" (response) ->
        if (c) -> finishGame()
        if (l) -> 
            high = mid - 1;
            makeGuess()
        if (h) -> 
            low = mid + 1
            makeGuess()

fn finishGame ->
    computer says "excellent, your number was {guess} and it took me {numberOfGuesses} guesses