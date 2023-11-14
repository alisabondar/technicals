class BinaryTree {
    constructor(val, left, right) {
        // value and max 2 children
        this.val = val;
        this.left = left;
        this.right = right;
    }

    insert(value) {
        // account for 0 parents
        // traverse by value
        if (value < this.val) {
            // insert to left - less than parent
            if (!this.left) {
                // create a tree to use methods - insert
                // this.left = new BinaryTree(value);
                // was making new BinaryTree instead of Two
                // use constructor
                this.left = new this.constructor(value);
            } else {
                this.left.insert(value);
            }
        } else {
            // insert to right - more than parent
            if (!this.right) {
                this.right = new this.constructor(value);
            } else {
                this.right.insert(value);
            }
        }
    }

    // return the node that holds the value
    searchDepth(target) {
        // traverse and return target
        // return children as well
        console.log(this ? this.val : 'null');
        if (target === this.val) {
            return this;
        }
        if (target < this.val) {
            if (this.left) {
                return this.left.searchDepth(target);
            }
            return null;
        } else {
            if (this.right) {
                return this.right.searchDepth(target);
            }
            return null;
        }
    }
}

// part 2
class BinaryTreeTwo extends BinaryTree {
    constructor(val, left, right) {
        super(val, left, right) // make this inherit the parent's
    }
    searchBreadth(target, queue = []) {
        // FIFO
        console.log(this ? this.val : 'null');
        if (target === this.val) {
            return this;
        }

        // account for undefined
        if (this.left) {
            queue.push(this.left);
        }
        if (this.right) {
            queue.push(this.right);
        }

        if (queue.length === 0) {
            return null;
        }

        return queue.shift().searchBreadth(target, queue);
    }
}

let tree = new BinaryTreeTwo(5, null, null);
tree.insert(5);
tree.insert(6);
tree.insert(4);
tree.insert(3);
tree.insert(7);
// console.log(tree);
tree.searchBreadth(4);
tree.searchBreadth(2);

/**
 * what is the space complexity?
 *
 * Assuming a balanced tree:
 * time complexity of insertion?
 * logarithmic
 * time complexity of lookup?
 * logarithmic except for BreadthSearch (always linear because no left/right comparison)
 *
 * Now forget about being balanced:
 *
 * time complexity of insertion?
 * linear
 * time complexity of lookup?
 * linear
 */