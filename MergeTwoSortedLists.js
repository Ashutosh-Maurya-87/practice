class List {
    constructor(data) {
        this.val = data
        this.next = null
    }
}

class MergeList {
    // constructor() {
    //     this.val = data
    //     this.next = null
    // }

    MergeTwoLists(l1, l2) {
        const newNode = new List()
        let curr = newNode
        while (l1 !== null && l2 !== null) {
            if (l1.val < l2.val) {
                curr.next = l1
                l1 = l1.next
            } else {
                curr.next = l2
                l2 = l2.next
            }
            curr = curr.next
        }
        console.log(curr)
        curr.next = l1 !== null ? l1 : l2

        return newNode.next

    }



}

const obj = new MergeList()

const l1 = new List(1)
l1.next = new List(2)
l1.next.next = new List(4)
console.log(l1)

const l2 = new List(8)
l2.next = new List(9)
l2.next.next = new List(15)
console.log(l2)
let merged = obj.MergeTwoLists(l1, l2)
console.log(merged)

let res = []

while (merged !== null) {
    res.push(merged.val)
    merged = merged.next
}
console.log(res)

