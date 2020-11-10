const test = require('ava');
const isValid = require('.');

// https://leetcode.com/problems/valid-parentheses/

const PASSES = ["()","()[]{}", "{[]}"];
const FAILED = ["(]", "([)]"];

PASSES.forEach(value => {
    test(`${value} should be valid`, t => {
        const _isValid = isValid(value);
        t.is(_isValid, true);
    })
});

FAILED.forEach(value => {
    test(`${value} should not be valid`, t => {
        const _isValid = isValid(value);
        t.is(_isValid, false);
    })
})