const SquareOfSortedArray = (a) => {
    let res = [], sortedArr = []
    for (let i = 0; i < a.length; i++) {
        res.push(a[i] * a[i])
    }
    // console.log(res)

    for (let i = 0; i < res.length; i++) {
        let min = i
        for (let j = i + 1; j < res.length; j++) {
            if (res[min] > res[j]) {
                min = j
            }
        }
        if (min !== i) {
            let temp = res[i]
            res[i] = res[min]
            res[min] = temp
        }
        // [res[i], res[j]] = [res[j], res[i]]
    }
    return res
    // console.log(res)
}

console.log(SquareOfSortedArray([-4, -1, 0, 3, 10]))