
const longestCommonPrefix = (s) => {
    let pref = ''
    if (s.length < 1) return s

    for (let i = 0; i < s[0].length - 1; i++) {
        let char = s[0][i]
        for (let j = 1; j < s.length; j++) {
            if (i >= s[j].length || s[j][i] !== char) {
                return pref
            }
        }
        pref = pref + char
    }
    return pref
}

console.log(longestCommonPrefix(['flower', 'flow', 'flight']))