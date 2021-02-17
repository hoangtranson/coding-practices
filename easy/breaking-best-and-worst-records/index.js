'use strict';

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
  });

let inputString = '';
let currentLine = 0;

function readLine() {
    return inputString[currentLine++];
}

rl.on('line', function(line){
    inputString += line;
    inputString += "\n";
})

rl.on('close', function(line){
    inputString = inputString.split('\n');
    inputString.pop();

    const n = parseInt(readLine(), 10);
    const scores = readLine().split(' ').map(scoresTemp => parseInt(scoresTemp, 10));
    const result = breakingRecords(scores);
    console.log("Result => ", result);
})

// Complete the breakingRecords function below.
function breakingRecords(scores) {
    let lowest = scores[0], highest = scores[0];
    let breakingRecords = {
        min: 0,
        max: 0
    }

    for(let i = 0; i < scores.length; i++){
        if(scores[i] > highest) {
            highest = scores[i];
            breakingRecords.max++;
        }

        if(scores[i] < lowest) {
            lowest = scores[i];
            breakingRecords.min++;
        }
    }

    return `${breakingRecords.max} ${breakingRecords.min}`;
}

// test 1 -> 2 4
// test 2 -> 4 0