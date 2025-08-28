const SortColors = (nums) => {

    // for (let i = 0; i < nums.length; i++) {
    //     for (let j = 0; j < nums.length; j++) {
    //         if (nums[i] < nums[j]) {
    //             [nums[i], nums[j]] = [nums[j], nums[i]]
    //         }
    //     }
    // }
    // return nums
    for (let i = 0; i < nums.length; i++) {
        let min = i
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[min] > nums[j]) {
                min = j
            }
        }
        if (min !== i) {
            [nums[min], nums[i]] = [nums[i], nums[min]]
        }
    }
    return nums
}

console.log(SortColors([2, 0, 2, 1, 1, 0]))
console.log(SortColors([2, 1, 0]))
console.log(SortColors([0, 2, 1]))