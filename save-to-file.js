const fs = require('fs');

module.exports = function (fileName,arrayLength,timeTaken) {
let data = `${arrayLength},${timeTaken}\n`;
fs.appendFileSync(`${fileName}.csv`, data);
}

// in the file for your search/sort/game
// const save = require('./saveToFile.js')
// save(algoName,numValues,timeTaken)
// these values need to come from your search/sort program

// needs to have 'npm init' in the package
// also 'npm install fs' probably
// you will need a data.csv file
// if you don't have one 'touch data.csv' in terminal