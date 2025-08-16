class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class LinkedList {
    constructor(data) {
        this.head = null
        this.size = 0
    }

    insertAtHead(data) {
        const newNode = new Node(data)
        newNode.next = this.head
        this.head = newNode
        this.size++
    }

    print() {
        let temp = this.head
        let res = ''
        while (temp) {
            res = res + `${temp.data}--->`
            temp = temp.next
        }
        return res
    }

    insertAtIndex(ind, data) {
        if (ind < 0 || ind > this.size) return 'Invalid index'

        if (ind === 0) {
            this.insertAtHead(data)
            return;
        }
        // creating new node
        let newNode = new Node(data)

        // assign the temp varialbe refrence to the head so that i can travarse that temp variable not head
        let temp = this.head
        // looping to find the 'next' of before that given index 
        for (let i = 0; i < ind - 1; i++) {
            temp = temp.next
        }

        // giving the refrence of new node 'next' to temp node next
        newNode.next = temp.next
        temp.next = newNode
        // increase the size of nodes--
        this.size++
    }
    removeAtIndex(index) {
        if (index < 0 || index > this.size) return 'Invalid index'
        let temp = this.head
        let prevNode = this.head
        for (let i = 0; i < index; i++) {
            temp = temp.next

        }
        for (let i = 0; i < index - 1; i++) {
            prevNode = prevNode.next

        }

        prevNode.next = temp.next
        this.size--
    }
}

let obj = new LinkedList
obj.insertAtHead(43)
obj.insertAtHead(53)
obj.insertAtHead(63)
obj.insertAtHead(73)
obj.insertAtIndex(1, 5)
obj.removeAtIndex(3)
// console.log(obj.removeAtIndex(0,5))
console.log(obj.print())
console.log(obj)
