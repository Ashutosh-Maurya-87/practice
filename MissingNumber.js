const MissingNumber = (a) => {
    let sum = 0
    for (let i = 0; i < a.length; i++) {
        sum = sum + a[i]
    }
    console.log(sum)
}

console.log(MissingNumber([3, 0, 2]))