const Node = require("./Node");
const BST = function () {
    this.root = null;
    this.add = function(value) {
        let newNode = new Node(value);

        //if root is null
        if(this.root === null) {
            this.root = newNode;
            return;
        }

        //find the placeholder for the value using Binary Search
        let temp = this.root;
        let parent = this.root;
        while(temp !== null) {
            parent = temp;
            if(value > temp.value)
                temp = temp.right;
            else
                temp = temp.left;

        }

        //insert the node at correct order
        if(value > parent.value) {
            parent.right = newNode
        }
        else {
            parent.left = newNode;
        }
    }


    this.print = function() {
        let printNodes = function (node) {
            if (node.left !== null)
                printNodes(node.left);

            console.log(node.value);

            if (node.right !== null)
                printNodes(node.right);
        }
        printNodes(this.root);
    }


    this.find = function(key) {
        let findNode = function(node, key) {
            if(node.value === key) return true; //@todo: when do we return false?


            if(key > node.value && node.right !== null)
                return findNode(node.right);


            if(key < node.value && node.left !== null)

                return findNode(node.left);
        }
        return findNode(this.root, key);
    }


    this.delete = function(key) {

    }
}
let tree = new BST();
tree.add(5);
tree.add(7);
tree.add(1);
tree.add(3);
tree.add(9);
tree.add(6);
tree.add(7);
tree.add(2);
tree.print();
console.log(tree.find(5));
console.log(tree.find(7));
module.exports = BST;