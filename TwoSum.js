const TwoSum = (nums, target) => {
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (i !== j) {
                if (nums[i] + nums[j] === target) {
                    return [i, j]
                }
            }
        }
    }
}

console.log(TwoSum([1, 2, 3, 4, 5], 8))
console.log(TwoSum([1, 2, 3, 4, 5], 11))