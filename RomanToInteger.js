const RomanToInteger = (s) => {
    if (s.length < 1) return -1
    const roman = {
        "I": 1,
        "V": 5,
        "X": 10,
        'C': 100,
        "D": 500,
        "L": 50,
        "M": 1000
    }
    let integer = 0
    for (let i = 0; i < s.length; i++) {
        if (i < s.length - 1 && roman[s[i]] < roman[s[i + 1]]) {
            integer = integer - roman[s[i]]
        } else {
            integer = integer + roman[s[i]]

        }
    }
    return integer
}

console.log(RomanToInteger('LIVIX'))
console.log(RomanToInteger('MCMXCIV'))