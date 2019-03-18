const Node = function(value) {
    this.value = value;
    this.next = null; //How can we enforce type?
}
module.exports = Node;