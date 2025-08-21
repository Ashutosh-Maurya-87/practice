const validParanthesis = (s) => {
    let paren = {
        '(': ')',
        '{': '}',
        '[': ']'
    }
    let stack = []
    //  for (let char of s) {
    //     
    //     if (paren[char]) {
    //         stack.push(paren[char])
    //     } else if(char !== stack.pop()) {
    //         return false
    //     }
    // }
    for (let i = 0; i < s.length; i++) {
        let char = s[i]
        if (paren[s[i]]) {
            stack.push(paren[s[i]])
        } else if (char !== stack.pop()) {
            return false
        }
    }
    console.log(stack)
    return stack.length === 0
}

console.log(validParanthesis('(({}))]'))
console.log(validParanthesis('(({[]][]}))'))
console.log(validParanthesis('(({}))'))