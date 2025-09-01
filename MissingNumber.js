const MissingNumber = (a) => {
    let sum = 0
    for (let i = 0; i < a.length; i++) {
        sum = sum + a[i]
    }

    let res = a.length * (a.length + 1) / 2
    console.log(sum, res)

    return res - sum

}

console.log(MissingNumber([3, 0, 2]))
console.log(MissingNumber([0, 1]))
console.log(MissingNumber([9,6,4,2,3,5,7,0,1]))