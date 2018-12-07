//LinkedList = function(idx) {
class LinkedList {
    //modelling as array of dynamic size containing objects
    //better model as an object containing keys. fetch by key in this case would be O(1)
    constructor() {
        this.keyValueStore = {};
        console.log("%o", this.keyValueStore);

    }
    append(key, value) {
        this.keyValueStore[key] = value;
        console.log("appending", key, this.keyValueStore);

    }
    fetch(key) {
        console.log("fetching", key, this.keyValueStore);
        if(this.keyValueStore[key])
            return this.keyValueStore[key];
        else
            return -1;
    }
    delete(key) {
        delete this.keyValueStore[key];
    }

}

module.exports = LinkedList;