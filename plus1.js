const plusOne = (a) => {
    for (let i = a.length - 1; i >= 0; i--) {
        if (a[i] < 9) {
            a[i] += 1
            return a
        }
        a[i] = 0
    }
    a.unshift(1)
    return a
}

console.log(plusOne([1,2,4,3]))
console.log(plusOne([1,2,4,9,9]))
console.log(plusOne([1,2,4,9]))
console.log(plusOne([9]))
console.log(plusOne([9,99])) // its not valid because we are assuming only single digit 