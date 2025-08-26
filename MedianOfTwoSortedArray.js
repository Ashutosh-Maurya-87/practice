const MedianOfSortedArray = (a1, a2) => {
    let median, res = [], i = 0, j = 0
    while (i < a1.length && j < a2.length) {
        if (a1[i] < a2[j]) {
            res.push(a1[i])
            i++
        } else {
            res.push(a2[j])
            j++
        }
    }
    res = res.concat(a1.slice(i)).concat(a2.slice(j))

    let mid = Math.floor(res.length / 2)
    if (res.length % 2 === 0) {
        median = (res[mid] + res[mid - 1]) / 2
    } else {
        median = res[mid]
    }
    console.log(res)
    return median
}

console.log(MedianOfSortedArray([1, 3], [2]))
console.log(MedianOfSortedArray([1, 2], [3, 4]))