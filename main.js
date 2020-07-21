class BinarySearchTree {
    constructor(data, left, right, parent = null) {
        this.data = data
        this.left = left
        this.right = right
        this.parent = parent
    }

    searchTree(tree, query) {
        if (!tree) {
            return null
        }
        if (tree.data === query) {
            return tree
        }
        if (query < tree.data) {
            return this.searchTree(tree.left, query)
        }
        else {
            return this.searchTree(tree.right, query)
        }
    }

    findMinimum(tree) {
        if (tree === null) return null

        let min = tree
        while (min.left != null) {
            min = min.left
        }

        return min
    }


    findMaximum(tree) {
        if (tree === null) return null

        let max = tree
        while (max.right != null) {
            max = max.right
        }

        return max
    }

    traverseTree(tree) {
        if (tree) {
            this.traverseTree(tree.left)
            console.log(tree.data)
            this.traverseTree(tree.right)
        }
    }

    insertTree(tree, data, parent) {
        if (tree === null) {
            let node = new BinarySearchTree(data, null, null, parent)
            if (parent.data > data) {
                parent.left = node
            } else {
                parent.right = node
            }
            return node
        }

        if (data < tree.data) {
            this.insertTree(tree.left, data, tree)
        } else {
            this.insertTree(tree.right, data, tree)
        }
    }
}

let root_node = new BinarySearchTree(5, null, null)

let i = 1
for (i; i<=10; i++) {
    // This draws a tree of 5 [1 [null, right]] [5 [null, right]] 
    // where each tree then branches exclusively to the right
    // meaning some balancing mechanism needs to be implemented
    root_node.insertTree(root_node, i, null)
}