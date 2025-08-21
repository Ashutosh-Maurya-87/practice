const PalindromNumber = (number) => {
    let rev = 0, num = number
    while (num > 0) {
        rev = rev * 10 + num % 10
        num = Math.floor(num / 10)
    }
    if (rev === number) {
        return true
    } else {
        return false
    }
}

console.log(PalindromNumber(121))
console.log(PalindromNumber(12121121))
console.log(PalindromNumber(153))
console.log(PalindromNumber(1))