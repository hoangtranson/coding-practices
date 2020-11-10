const test = require('ava');
const originalDigits = require('.');

// https://leetcode.com/problems/reconstruct-original-digits-from-english/

const DATA = [
    // {
    //     input: "owoztneoer",
    //     output: "012"
    // },
    // {
    //     input: "fviefuro",
    //     output: "45"
    // },
    {
        input: "zerozero",
        output: "00"
    }
];

DATA.forEach( item => {
    test(`${item.input} should be ${item.output}`, t => {
        const _output = originalDigits(item.input);
        t.is(_output, item.output);
    })
});