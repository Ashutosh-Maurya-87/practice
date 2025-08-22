const RemoveElement = (a, v) => {
    let uniq = 0
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== v) {
            a[uniq] = a[i]
            uniq++
        }
    }
    console.log(a)
    return uniq
}

console.log(RemoveElement([3, 2, 2, 3], 3))
console.log(RemoveElement([0, 1, 2, 2, 3, 0, 4, 2], 2))