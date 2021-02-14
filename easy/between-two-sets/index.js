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

    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');
    const n = parseInt(firstMultipleInput[0], 10);
    const m = parseInt(firstMultipleInput[1], 10);
    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
    const brr = readLine().replace(/\s+$/g, '').split(' ').map(brrTemp => parseInt(brrTemp, 10));
    const total = getTotalX(arr, brr);
    console.log("Result => ", total);
})

/*
 * Complete the 'getTotalX' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 */

function getTotalX(a, b) {
    // Write your code here
    let count = 0;

    for(let num = 1; num <=100; num ++) {
        if(a.every(int => (num % int == 0))) {
            if(b.every(int => (int%num == 0))) {
                count++;
            }
        }
    }
    return count;
}

//  test case 1 => 3
//  test case 2 => 3
//  test case 3 => 2