const test = require('ava');
const isValid = require('.');

// https://leetcode.com/problems/valid-parentheses/

const DATA = [
    {
        input: "()",
        output: true
    },
    {
        input: "()[]{}",
        output: true
    },
    {
        input: "{[]}",
        output: true
    },
    {
        input: "(]",
        output: false
    },
    {
        input: "([)]",
        output: false
    }
];

DATA.forEach( item => {
    test(`${item.input} should return value ${item.output}`, t => {
        const _isValid = isValid(item.input);
        t.is(_isValid, item.output);
    })
});