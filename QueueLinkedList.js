class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class QueueLinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.size = 0
    }

    enqueue(data) {
        const newNode = new Node(data)
        if (this.head === null) {

            this.head = newNode
        } else {

            this.tail.next = newNode

        }
        this.tail = newNode

        this.size++
    }

    deQueue() {
        if (this.empty()) {

            return -1
        }
        const deletedItem = this.head.data
        this.head = this.head.next

        this.size--
        return deletedItem
    }

    front() {
        let first = this.head.data
        return first
    }

    last() {
        return this.empty() ? -1 : this.tail.data
    }

    empty() {
        return this.size === 0
    }
}

const obj = new QueueLinkedList()
obj.enqueue(4)
obj.enqueue(48)
obj.enqueue(487)
obj.enqueue(489)
console.log(obj.front())
console.log(obj.last())

console.log(obj.deQueue())
console.log(obj.deQueue())
console.log(obj.deQueue())
console.log(obj.deQueue())
console.log(obj.deQueue())
console.log(obj)