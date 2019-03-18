const Node = require("./Node");

function Tree() {
    this.root = null;
    this.add = function (value, direction = "left", parentValue) {

        let nextNode = new Node(value)
        if (this.root === null) {
            this.root = nextNode;
            return;
        }


        let parentNode = null;
        parentNode = this.find(parentValue);

        if (parentNode === null)
            return false;


        parentNode[direction] = nextNode;

    }

    this.find = function (key) {
        let findNode = function (key, node) {
            if (node.value == key) {
                return node;
            }

            if (node.left !== null) {
                output = findNode(key, node.left);
            }

            if (node.right !== null) {
                output = findNode(key, node.right); //@todo: output is not initialized
            }
            return output;
        }
        return findNode(key, this.root);
    }

    this.print = function () {
        let printNodes = function (node) {
            if (node.left !== null)
                printNodes(node.left);

            console.log(node.value);

            if (node.right !== null)
                printNodes(node.right);
        }
        printNodes(this.root);

    }
}

let T = new Tree();
T.add(5);
T.add(3, "left", 5);
T.add(7, "right", 5);
T.add(1, "left", 3);
T.add(2, "right", 3);
T.add(6, "left", 7);
T.add(9, "right", 7);
T.print()
//module.exports = Tree;