const LengthOfLastWord = (s) =>{
    let splitString = s.trim().split(' ')
    console.log(splitString)
    let res = splitString[splitString.length -1].length
    console.log(res)
    return res
}

console.log(LengthOfLastWord('Hello world'))
console.log(LengthOfLastWord('     Hello world  this is  '))