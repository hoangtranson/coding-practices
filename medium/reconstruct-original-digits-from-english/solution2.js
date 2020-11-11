const originalDigits = s => {
    let characters = s.split('').reduce((a, b) => {
        a[b] = ~~a[b] + 1
        return a;
      }, {});
    let arr = new Array(10).fill(0);
    /*
        0 zero -> z
        1 one
        2 two -> w
        3 three
        4 four -> u
        5 five
        6 six -> x
        7 seven
        8 eight -> g
        9 nine
    */
    arr[0] = ~~characters['z'];
    arr[2] = ~~characters['w'];
    arr[4] = ~~characters['u'];
    arr[6] = ~~characters['x'];
    arr[8] = ~~characters['g'];
    /*
        1 one -> o
        3 three -> r
        5 five -> f
        7 seven -> v
        9 nine -> n
    */
    arr[1] = ~~characters['o'] - arr[0] - arr[2] - arr[4];
    arr[3] = ~~characters['r'] - arr[0] - arr[4];
    arr[5] = ~~characters['f'] - arr[4];
    arr[7] = ~~characters['v'] - arr[5];
    arr[9] = (~~characters['n'] - arr[1] - arr[7]) / 2;
    
    return arr.map((v, i) => ~~v > 0 && `${i}`.repeat(v)).filter(v => v).join('')
};

module.exports = originalDigits;