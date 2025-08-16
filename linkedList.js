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
    }

    print() {
        let temp = this.head
        let res = ''
        while(temp){
            res = res + `${temp.data}--->`
            temp = temp.next
        }
        return res
    }

    insertAtIndex(ind) {
        
    }
    // removeAtHead(data) {
    //     this.
    // }
}

let obj = new LinkedList
obj.insertAtHead(43)
obj.insertAtHead(53)
obj.insertAtHead(63)
obj.insertAtHead(73)
console.log(obj.print())
console.log(obj)
