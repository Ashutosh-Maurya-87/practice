const MajorityElement = (arr) => {
    let maj, count = 0
    for (let i = 0; i < arr.length; i++) {
        if (count === 0) {
            maj = arr[i]
        }
        if (arr[i] === maj) {

            count++
            // return arr[i]
        } else {
            count--
        }

    }
    let occ = 0
    for (let num of arr) {
        if (num === maj) { occ++ }
    }
    console.log(occ)
    let res = occ > Math.floor((arr.length) / 2) ? maj : -1
    // console.log(count, res)
    return res
}
// its n/2 time algo like if any number occur arr.lenght/2 time then it will return
//  that number is majority otherwirse not
console.log(MajorityElement([3, 2, 3, 3, 4, 4, 4, 5, 5, 5, 5, 4, 4, 3, 2, 8]))
console.log(MajorityElement([3, 2, 2, 2, 2, 2, 3, 3, 3, 1]))
console.log(MajorityElement([3, 2, 2, 2, 2, 2, 3, 3, 3, 1, 3, 3, 3]))