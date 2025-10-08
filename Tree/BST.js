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
        } else {
            this.insertNode(this.root, newNode)
        }
    }
    insertNode(root, newNode) {
        console.log(newNode, root)
        if (root.value > newNode.value) {
            if (root.left === null) {
                root.left = newNode
            } else {
                this.insertNode(root.left, newNode)
            }
        } else {
            if (root.right === null) {
                root.right = newNode
            } else {
                this.insertNode(root.right, newNode)
            }
        }

    }
}

const bst = new BST()
bst.makeTree(20)
bst.makeTree(10)
bst.makeTree(5)
// console.log()
console.log()
console.log(bst.isEmpty())
console.log(bst)