
function sockMerchant(n, ar) {
    
    let result = {};
    for(let i = 0; i < ar.length; i++) {
        const item = ar[i];
        if(!result[item]) {
            result[item] = 1;
        } else {
            result[item] += 1;
        }
    }

    return Object.keys(result).reduce( (acc, current) => {
        const temp = Math.floor(result[current]/2);
        return acc + temp;
    }, 0);
}

const result = sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]);
console.log(result);