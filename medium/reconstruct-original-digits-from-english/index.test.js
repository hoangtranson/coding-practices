const test = require('ava');
const originalDigits = require('.');
const originalDigits2 = require('./solution2');
// https://leetcode.com/problems/reconstruct-original-digits-from-english/

const DATA = [
    {
        input: "owoztneoer",
        output: "012"
    },
    {
        input: "fviefuro",
        output: "45"
    },
    {
        input: "zerozero",
        output: "00"
    }
];

DATA.forEach( item => {
    test(`${item.input} should be ${item.output} by using solution 1`, t => {
        const _output = originalDigits(item.input);
        t.is(_output, item.output);
    })
});

DATA.forEach( item => {
    test(`${item.input} should be ${item.output} by using solution 2`, t => {
        const _output = originalDigits2(item.input);
        t.is(_output, item.output);
    })
});