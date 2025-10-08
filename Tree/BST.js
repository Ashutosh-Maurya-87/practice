class Node {
    constructor(val) {
        this.value = val
        this.left = null
        this.right = null
    }
}
class BST {
    constructor() {
        this.root = null
    }
    isEmpty() {
        return this.root === null
    }
    // insert node
    makeTree(val) {
        const newNode = new Node(val)
        if (this.root === null) {
            this.root = newNode
        } else if (this.root.value > newNode.value) {
            this.insertNode(this.root, newNode)
        }
    }
}

const bst = new BST()
console.log(bst.makeTree(20))
console.log(bst.isEmpty())
console.log(bst)