const originalDigits = s => {
    let result = [];
    const map = new Map();

    for(let c of s){
        if(!map.has(c)) map.set(c,0);
        map.set(c,map.get(c)+1);
    }

    const getDigit = (letter, word, num) => {
        if(map.has(letter)){
            let temp = map.get(letter);

            for(let c of word){
                const value = map.get(c);
                map.set(c, value - temp);

                if(value == 0) {
                    map.delete(c);
                }
            }

            while(temp > 0) {
                result.push(num);
                temp--;
            }
        }
    };

    /*
        0 zero -> z
        1 one
        2 two -> w
        3 three
        4 four -> u
        5 five
        6 six -> x
        7 seven
        8 eight
        9 nine
    */
    getDigit('z', 'zero', 0);
    getDigit('w', 'two', 2);
    getDigit('u', 'four', 4);
    getDigit('x', 'six', 6);

    /*
        1 one 
        3 three -> r
        5 five -> f
        7 seven -> s
        8 eight -> g
        9 nine
    */
    getDigit('r', 'three', 3);
    getDigit('f', 'five', 5);
    getDigit('s', 'seven', 7);
    getDigit('g', 'eight', 8);

    /*
        1 one -> o
        9 nine -> i
    */

    getDigit('o', 'one', 1);
    getDigit('i', 'nine', 9);

    return result.sort( (a, b) => a - b).join("");
};

module.exports = originalDigits;