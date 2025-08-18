class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class StackedLinkedList {
    constructor() {
        this.top = null
        this.size = 0
    }
    push(data) {
        let newNode = new Node(data)
        newNode.next = this.top
        this.top = newNode

        this.size++

    }

    pop() {
        if(this.size === 0) return 'Empty stack'
        let item = this.top.data
        this.top = this.top.next
        this.size--
        return item
    }

    peak() {
        if(this.size === 0) return null
        let peakItem = this.top.data
        return peakItem
    }
}

let obj = new StackedLinkedList()
obj.push(53)
obj.push(55)
obj.push(45)
obj.push(456)
obj.pop()
console.log(obj.peak(), obj.pop())
console.log(obj)