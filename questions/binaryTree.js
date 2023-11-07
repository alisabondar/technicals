class BinaryTree {
    constructor(node, left, right) {
        // value and max 2 children
        this.node = node;
        this.left = left;
        this.right = right;
    }

    insert(value) {
        // account for 0 parents
        // traverse by value
        if (!this.node) {
            this.node = value;
        } else if (this.node > value) {
            // insert to left
            if (!this.left) {
                this.left = value;
            } else {
                // traverse until no children
                let child = this.left;
                if (child > value) {
                    while (child.left) {
                        if (!child.left) {
                            child.left = value;
                        } else {
                            child = child.left;
                        }
                    }
                } else {
                    child = this.right;
                    while (child.right) {
                        if (!child.right) {
                            child.right = value;
                        } else {
                            child = child.right;
                        }
                    }
                }
            }
        } else {
            // insert to right
            if (!this.right) {
                this.right = value;
            } else {
                let child = this.right;
                if (child > value) {
                    child = child.left;
                    while (child.left) {
                        if (!child.left) {
                            child.left = value;
                        } else {
                            child = child.left;
                        }
                    }
                } else {
                    while (child.right) {
                        if (!child.right) {
                            child.right = value;
                        } else {
                            child = child.right;
                        }
                    }
                }
            }
        }
    }

    // return the node that holds the value
    // searchDepth(target) {
    //     // traverse and return target
    //     // return children as well?
    // }
}

// part 2
// class BinaryTreeTwo extends BinaryTree {
//     constructor() // make this inherit the parent's

//     searchBreadth()
// }

let tree = new BinaryTree();
tree.insert(5);
tree.insert(6);
tree.insert(4);
tree.insert(3);
tree.insert(7);
console.log(tree);

/**
 * what is the space complexity?
 *
 * Assuming a balanced tree:
 * time complexity of insertion?
 * logarithmic
 * time complexity of lookup?
 * logarithmic
 *
 * Now forget about being balanced:
 *
 * time complexity of insertion?
 * linear
 * time complexity of lookup?
 * linear
 */