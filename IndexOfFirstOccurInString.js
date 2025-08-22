const FirstOcc = (s1, s2) => {
    let match = true
    for (let i = 0; i < s1.length - s2.length; i++) {
        for (let j = 0; j < s2.length; j++) {
            if (s1[i + j] !== s2[j]) {
                match = false
                break;
            }

        }
        if(match) return i
        
    }
    return -1
}

console.log(FirstOcc("sadbutsad", "sad"))
console.log(FirstOcc("leetcode", "leeto"))
console.log(FirstOcc("Meetup", "up"))