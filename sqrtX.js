// square root of number without any in-built method

const SquareRoot = (n) => {
    if (n < 2) return n

    let left = 1, right = Math.floor(n / 2)

    while (left <= right) {
        let mid = Math.floor((left + right) / 2)
        let sq = mid * mid
        if (sq === n) {
            return mid
        } else if (sq < n) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
    return right
}

console.log(SquareRoot(9))
console.log(SquareRoot(7)) // returning round off value
console.log(SquareRoot(8))