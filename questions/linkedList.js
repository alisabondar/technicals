/* PART 1

Create an ES6 class for a LinkedList that is composed of nodes that have `value` and `next` properties.
The LinkedList should implement at least the following methods:
    - append
    - length

HINT: don't be afraid to ask questions!
*/

class LinkedList {
    constructor(value) {
        this.head = {}
        this.head.value = value;
        this.head.next = null;
    }

    append() {
        // value and next
        // this keyword
        // check if value already exists
        // add to next array
        let head = this.head;
        let node = { value: value }

        const checkNext = (start) => {

            if (start.next) {
                checkNext(start.next)
            } else {
                start.next = node;
            }
        }

        checkNext(head);
    }

    length() {
        // iterate over the nodes and count up the values until
        // I encouonter no more nexts
        // parent node -> cycle through all the children
        let head = this.head;
        let count = 1;

        const findLength = (start) => {
            if (start.next) {
                count += 1;
                return findLength(start.next)
            } else {
                return count;
            }
        }

        return findLength(head);
    }

    removeLowest() {
        // iterating through the list and keeping track of lowest - value (it'll be the first node encountered anyway)
        // edge case - if it equals the lowest dont remove
        // remove the lowest aka previous next - 1 points to next + 1
        let head = this.head;
        if (!head) {
            return;
        }
        let lowValue = head.value;
        let prevNode = head;

        const removeNode = (node) => {
            if (node === head) {
                this.head = node.next;
                return;
            }
            node.next = node.next.next;
        }

        const search = (start) => {
            if (start.next) {
                if (start.next.value < lowValue) {
                    prevNode = start;
                    lowValue = start.next.value;
                }
                return search(start.next)
            } else {
                // remove lowest node
                return removeNode(prevNode);
            }
        }

        return search(head);
    }
}

/* PART 2

Add a `removeLowest` method that removes the node with the lowest value from the list.
If multiple nodes have the same value, remove the first encountered

*/

(function () {
    // add in the code you will use to test your LinkedList here,
    // then run `node path/to/linkedList.js`
    let test = new LinkedList(5);
    test.append(10);
    test.append(15);
    test.append(20);
    console.log(JSON.stringify(test));
    console.log('length', test.length());

    // if lowest is head
    test.removeLowest();
    // console.log(JSON.stringify(test));

    // edge - if lowest is tail
    test.append(1);
    test.removeLowest();
    // console.log(JSON.stringify(test));

    test.append(2);
    test.append(5);
    test.append(7);
    test.removeLowest();
    // console.log(JSON.stringify(test));

    let test2 = new LinkedList(10);
    test2.removeLowest();
    console.log(JSON.stringify(test2));
    test2.removeLowest();
    console.log(JSON.stringify(test2));
})();

// a helper function to check things
const assertEq = (got, want) => {
    console.assert(got === want, JSON.stringify(got));
}
