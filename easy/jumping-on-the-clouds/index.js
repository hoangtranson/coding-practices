// Complete the jumpingOnClouds function below.
function jumpingOnClouds(c) {
    let count = 0;

    for(let i  = 0; i < c.length - 1; i++) {
        if(c[i] == 0) {
            i++;
        }
        count++;
    }

    return count;

}

const result = jumpingOnClouds([0,0,1,0,0,1,0]);
console.log(result);