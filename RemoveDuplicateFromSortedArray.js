const RemoveDuplicate = (a) => {
    if (a.length < 1) return 0
    let uniq = 0
    for (let i = 1; i < a.length; i++) {
        console.log(a[i])
        if (a[i] !== a[uniq]) {
            uniq++
            a[uniq] = a[i]
        }
    }
    console.log(a)
    console.log(uniq)
    return uniq + 1
}
console.log(RemoveDuplicate([1, 1, 2]))
console.log(RemoveDuplicate([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]))