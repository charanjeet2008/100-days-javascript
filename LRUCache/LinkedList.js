LinkedList = function(idx) {
    //modelling as array of dynamic size containing objects
    //better model as an object containing keys. fetch by key in this case would be O(1)
    this.keyValueStore = {};

    console.log("%o", this.keyValueStore);
    function appendKey(key, value) {
        if(!this.keyValueStore) {
            this.keyValueStore = {};
        }
        //console.log("That %o", that);
        this.keyValueStore[key] = value;
        console.log("appending", key, this.keyValueStore);

    }
    function fetchKey(key) {
        console.log("fetching", key, this.keyValueStore);
        if(this.keyValueStore[key])
            return this.keyValueStore[key];
        else
            return -1;
    }
    function deleteKey(key) {
        delete this.keyValueStore[key];
    }
    return {
        append: function(key, value) {
            console.log("This %o", this);
            console.log("This %o", this.keyValueStore);
            appendKey(key, value);
        },
        fetch: function(key) {
            return fetchKey(key);
        },
        remove: function(key) {
            deleteKey(key);
        }
    }
}

module.exports = LinkedList;