// leet code prob -88

const MergeSortedArray = (a1, a2, a1Length, a2Length) => {
    let m = a1Length - 1, n = a2Length - 1
    for (let i = a1.length - 1; i >= 0; i--) {
        if (a1[m] >= a2[n]) {
            a1[i] = a1[m]
            m--
        } else if (n >= 0) {
            a1[i] = a2[n]
            n--
        }
    }
    console.log(a1, a2)
    return a1
}

console.log(MergeSortedArray([1, 2, 3, 0, 0, 0], [2, 5, 6], 3, 3))
console.log(MergeSortedArray([1], [], 1, 0))