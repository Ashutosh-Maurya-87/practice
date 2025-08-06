document.querySelector('#test').addEventListener('click', (e) => {
    console.log('e', e, e.target.id)
    if (e.target.id === 'laptop') {
        e.target.innerHtml = 'changing that'
    }
    if (e.target.id === 'Shoes') {
        e.target.innerHtml = 'go to shoes'
    }
    console.log(' e.target.innerHtml', e.target.innerHtml)
})

const firstUpperInput = document.getElementById('form')

firstUpperInput.addEventListener('keyup', (e) => {
    console.log('event', e)
    if (e.target.dataset.firstletteruppercase !== undefined) {
        let firstLetter = e.target.value.split('')[0].toUpperCase()
        let remaiLetter = e.target.value.split('').slice(1)
        e.target.value = firstLetter + remaiLetter.join('')

    }
})

const throttleDiv = document.querySelector('#throttle')
const debounceDiv = document.querySelector('#debounce')
let t_count = 0
let d_count = 0
let interval;
window.addEventListener('scroll', () => {
    console.log('calling')
    // throttling, when user scroll window then event is call after certain amount of time
    setTimeout(() => {
        t_count++;
        throttleDiv.innerHTML = `throttle count is : ${t_count}`
    }, 1000)

    // debouncing, when we scroll then count is increases after end of scroll and start of scroll again
    clearTimeout(interval)
    interval = setTimeout(() => {
        d_count++;
        debounceDiv.innerHTML = `debounce count is : ${d_count}`

    }, 1000)
})

const n = 6
const arr = [1, 2, -8, 0, 5, -8]
let neg = 0
let zero = 0
let positive = 0
const test = (arr) => {
    return arr.forEach(item => {

        if (item < 0) {
            return neg++;
        } else if (item === 0) {
            return zero++;
        } else if (item > 0) {
            return positive++;
        }
    })

}

let res = test(arr)
let positiveRes = (res / n).toFixed(6)
console.log('po', positiveRes, res, neg, zero, positive)

// TWO SUM LEET CODE PROBLEM
/**
* @param {number[]} nums
* @param {number} target
* @return {number[]}
*/
let sum = 0
let res1 = []
var twoSum = function (nums, target) {
    nums.map((item, index, array) => {
        array.map((newItem, i) => {
            if (index !== i) {
                if (item[index] + newItem[i] === target) {
                    return [index, i]
                }
            }

        })
    })
};
// // const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
const nums = [2, 7, 11, 15]
const target = 9
// // ws.write(res)
console.log('two sum is', twoSum(nums, target))

var twoSum1 = function (nums, target) {
    for (let i = 0; i <= nums.length; i++) {
        for (let j = 0; j <= nums.length; j++) {
            if (i !== j) {
                if (nums[i] + nums[j] === target) {
                    return [i, j];
                }
            }
        }
    }
};
console.log(twoSum1([3, 2, 4], 6));

/**
* @param {number} x
* @return {boolean}
*/
let re = []
var isPalindrome = function (x) {
    let t = String(x)?.split(''); // ['1','2','1']
    console.log('tttt', t)
    for (let i = t.length; i >= 0; i--) {
        re.push(t[i])
    }
    console.log('reee', re)
    let res = re.join('')
    console.log('res', Number(res), x)
    // if (x > 0) {
    if (Number(res) === x) {
        return true
    } else {
        return false
    }
    // } else {
    //     return false
    // }


};
console.log(isPalindrome(0));

// const db = document.getElementById('debounce')
// const th = document.getElementById('throttle')
// let thC = 0;
// let dbC = 0;
// let timeOut;
// window.addEventListener('resize', () => {
//     // throttle 
//     setTimeout(() => {
//         thC++;
//         th.innerHTML = `throttle count is ${thC}`
//     }, [1000])

//     // debounce
//     clearTimeout(timeOut)
//     timeOut = setTimeout(() => {
//         dbC++;
//         db.innerHTML = `debounce counrt is ${dbC}`
//     }, [1000])
// })

// MERGE SORTED ARRAY
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
let a = []
let b = []
var merge = function (nums1, m, nums2, n) {
    for (let i = 0; i < nums1.length; i++) {
        if (nums1[i] !== 0) {
            a.push(nums1[i])
            console.log('aaya', nums1[i])
        }
    }
    for (let j = 0; j < nums2.length; j++) {
        if (nums2[j] !== 0) {
            a.push(nums2[j])
        }
    }
   


    return a.sort()
};
console.log('merge', merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3))


var removeElement = function(nums, val) {
    let newArr = []
       for(let i = 0;i<nums.length;i++) {
           if(nums[i] !== val){
   
           newArr.push(nums[i])
           }
       }
       return newArr
   };
   console.log('nx', removeElement([0,1,2,2,3,0,4,2], 2))

   var removeDuplicates = function(nums) {
    if (nums.length === 0) return 0;
    
    let uniqueIndex = 0;
    
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[uniqueIndex]) {
            uniqueIndex++;
            nums[uniqueIndex] = nums[i];
        }
    }
    
    return uniqueIndex + 1;
};

let nums1 = [1,1,2];
let k = removeDuplicates(nums1);
console.log('k:', k, 'nums1:', nums1);

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    let r = 0;
    if (nums.length === 1) return nums.length;

    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            // if (i !== j) {
                if (nums[i] === nums[j]) {
                    r++;
                    // a = nums[i]
                    console.log('rva',r)
                    return nums[i]
                }
            // }

        }

    }
    // return r

};
let r1 = majorityElement([8,8,7,7,7]);
let r = majorityElement([6,6,6,7,7]);
console.log('r:', r);
console.log('r1:', r1);