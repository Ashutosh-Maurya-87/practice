const INsertionSort = (a) => {
    for (let i = 1; i < a.length; i++) {
        let curr = a[i] // current element
        let prev = i - 1    // previous index of array
        while (prev >= 0 && a[prev] > curr) {
            a[prev + 1] = a[prev]
            prev--
        }
        a[prev + 1] = curr
        //    console.log(a, prev, curr)
    }
    return a
}

console.log(INsertionSort([4, 2, 3, 1]))