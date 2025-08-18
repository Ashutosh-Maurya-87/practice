
class Queue {
    constructor() {
        this.queue = []
    }
    enqueue(data) {
        this.queue.push(data)
    }

    deQueue() {
        if (this.isEmpty()) return -1
        let item = this.queue.shift()
        return item
    }

    front() {
        return this.isEmpty() ? -1 : this.queue.at(0)

    }

    last() {
        return this.isEmpty() ? -1 : this.queue.at(-1)
    }

    isEmpty() {
        return this.queue.length === 0
    }
}
const obj = new Queue()
obj.enqueue(45)
obj.enqueue(489)
obj.enqueue(5)
obj.enqueue(445)
console.log(obj.deQueue())
// obj.deQueue()
console.log(obj.front())
console.log(obj.last())

console.log(obj)