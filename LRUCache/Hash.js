const LinkedList = require("./LinkedList");

function findModulo(key) {
    var mod = -1;
    mod = Math.floor(key % this.capacity);
    if(mod <= -1) {
        return "ERROR! in findModulo";
    }
    return mod;
}

class Hash {
    constructor(capacity)
    {
        this.capacity = capacity;
        this.valueStore = [];
        var i=0;
        for (i = 0; i < capacity; i++) {
            console.log("hashindex", i);

            this.valueStore[i] = new LinkedList(i);

        }
    }

    get(key) {
        var mod = findModulo.bind(this, key)();
        console.log("getting at", mod, key);
        return this.valueStore[mod].fetch(key);
    }
    set(key, value) {
        var mod = findModulo.bind(this, key)();
        console.log("setting at", mod, key);

        this.valueStore[mod].append(key, value);
    }
    remove(key) {
        var mod = findModulo.bind(this, key)();
        console.log("removing at", mod, key);

        this.valueStore[mod].remove(key);
    }
    // return {
    //     get: function(key) {
    //         return get(key);
    //     },
    //     set: function (key, value) {
    //         return set(key, value);
    //     },
    //     remove: function(key) {
    //         remove(key);
    //     }
    // }
}
module.exports = Hash;