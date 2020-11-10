const isValid = s => {
    const _stack = [], opened = ["(", "{", "["], closed = [")", "}", "]"];
    const _parentheses = {
        [')']: "(",
        ['}']: "{",
        [']']: "["
    };
    for(let i = 0 ; i < s.length; i++) {
        const char = s[i];
        if(opened.includes(char)){
            _stack.push(char)
        }
        if(closed.includes(char) &&  _parentheses[char] !== _stack.pop()){
			return false;
		} 
    }
    
    return _stack.length == 0;
};

module.exports = isValid;