function Node (value) {
    this.value = value;
    this.left = null; //How can we enforce type?
    this.right = null;
}

module.exports = Node;