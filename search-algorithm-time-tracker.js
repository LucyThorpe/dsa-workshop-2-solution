const save = require('./save-to-file.js')

// Setup our initial variables
let amountOfNumbers = 100000;
let numberOfTimesToRunEachAlgorithm = 50
let totalGuesses = 0

// Used to get a random number
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

// Used to get the time in nanoseconds
function getNanoSecTime() {
    var hrTime = process.hrtime();
    return hrTime[0] * 1000000000 + hrTime[1];
}

// Create an array of numbers to search through
var allTheNumbers = []
for (var i = 0; i < amountOfNumbers; i++) {
    allTheNumbers.push(i)
}

// Do it for binary search
for (let i = 0; i < numberOfTimesToRunEachAlgorithm; i++) {
    let newRandomNumber = getRandomInt(amountOfNumbers);
    let start = getNanoSecTime()
    binarySearch(allTheNumbers, newRandomNumber)
    let end = getNanoSecTime()
    let time = end - start
    // console.log('binary search:', totalGuesses, time)
    save('binary-search', amountOfNumbers, time)
    totalGuesses = 0
}

// Do it for linear search
for (let i = 0; i < numberOfTimesToRunEachAlgorithm; i++) {
    let newRandomNumber = getRandomInt(amountOfNumbers);
    let start = getNanoSecTime()
    linearSearch(allTheNumbers, newRandomNumber)
    let end = getNanoSecTime()
    let time = end - start
    // console.log('linear search:', totalGuesses, time)
    save('linear-search', amountOfNumbers, time)
    totalGuesses = 0
}

// Beth Reid[2: 06 PM]
function binarySearch(array, value) {
    var mid,
        low = 0
    high = array.length - 1;

    while (low <= high) {
        totalGuesses++
        mid = Math.floor((low + high) / 2);
        if (array[mid] === value)
            return mid;
        else if (array[mid] < value)
            low = mid + 1
        else
            high = mid - 1;

    }
    return -1;

}


function linearSearch(array, toFind) {
    for (let i = 0; i < array.length; i++) {
        totalGuesses++
        if (array[i] === toFind) return i;
    }
    return -1;
}