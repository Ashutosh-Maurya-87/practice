const pivotIndex = (a) => {
    let sum = 0
    for (let i = 0; i < a.length; i++) {
        sum += a[i]
    }
    let leftSum = 0
    for (let i = 0; i < a.length; i++) {
        let rightSum = sum - leftSum - a[i]
        if (leftSum === rightSum) return i

        leftSum += a[i]
    }
    return -1
}

console.log(pivotIndex([1, 7, 3, 6, 5, 6]))
console.log(pivotIndex([1,2,3]))
console.log(pivotIndex([2,1,-1]))