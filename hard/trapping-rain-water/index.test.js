const test = require('ava');
const trap = require('.');

// https://leetcode.com/problems/valid-parentheses/

const DATA = [
    {
        input: [0,1,0,2,1,0,1,3,2,1,2,1],
        output: 6
    },
    {
        input: [4,2,0,3,2,5],
        output: 9
    }
];

DATA.forEach( item => {
    test(`${item.input} should return value ${item.output}`, t => {
        const _h = trap(item.input);
        t.is(_h, item.output);
    })
});