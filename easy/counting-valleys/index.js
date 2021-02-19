/*
 * Complete the 'countingValleys' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER steps
 *  2. STRING path
 */

function countingValleys(steps, path) {
    // Write your code here
    let sum = 0, count = 0;
    for(let i = 0; i < steps; i++) {
        if(path[i] == 'U') {
            if(++sum == 0) {
                count++;
            }
            
        } else {
            sum --;
        }
    }

    return count;
}

const result = countingValleys(8, "UDDDUDUU");
console.log(result);