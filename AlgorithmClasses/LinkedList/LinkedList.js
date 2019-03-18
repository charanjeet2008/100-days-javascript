const Node = require("./Node")
const LinkedList = function() {
    this.head = null;
    this.append = function(value) {
        let node = new Node(value);
        node.next = null
        if(this.head === null) {
            this.head = node;
            return;
        }

        temp = this.head;
        while(temp.next != null) {
            temp = temp.next;
        }
        temp.next = node;

    }
    this.print = function() {
        temp = this.head;
        while(temp != null) {

            console.log(temp.value + " ")
            temp = temp.next;
        }
    }

}

let l = new LinkedList();
l.append(2);
l.append(4);
l.append(6);
l.append(1);
l.print();