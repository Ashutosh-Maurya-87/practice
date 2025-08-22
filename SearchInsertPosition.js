const SearchInsertPosition = (a, t) => {
    // binary search time complexity is O(log n)
    // its good for sorted and long array as well as sort array
    let left = 0
    let right = a.length - 1
    while (left <= right) {
        let mid = Math.floor((left + right) / 2)
        if (a[mid] === t) {
            return mid
        } else if (a[mid] < t) {
            right = mid - 1
        } else {
            left = mid + 1
        }
    }
    console.log(left)
    return left

    // using linear search, its time complexxity O(n) space complixity is O(1)
    // its not good for long array, for ex- if arr length is 10000 then it will run 10000 time
    // for (let i = 0; i < a.length; i++) {
    //     if (a[i] === t) {
    //         return i
    //     } else if (a[i] > t) {
    //         return i
    //     } 
    // }
    // return a.length
}

console.log(SearchInsertPosition([1, 3, 5, 6], 5))
console.log(SearchInsertPosition([1, 3, 5, 6], 7))
console.log(SearchInsertPosition([1, 3, 5, 6], 6))