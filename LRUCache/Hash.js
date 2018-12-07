const HashItem = require("./HashItem");

function findModulo(key) {
    try {
        mod = Math.floor(key % this.capacity);
        if(mod >= 0)
            return mod;
        throw 'invalid modulo';

    }  catch(error) {
        console.log("error %s", error);
        return -1;
    }
}

class Hash {
    constructor(capacity)
    {
        this.capacity = capacity;
        this.valueStore = [];

        var i=0;
        for (i = 0; i < capacity; i++) {
            this.valueStore[i] = new HashItem(i);
        }
    }
    get(key) {
        try {

            var mod = findModulo.bind(this, key)();
            return this.valueStore[mod].fetch(key);

        }
        catch(error) {

            console.log("error %s", error);
            console.log(new Error().stack);

            return -1;
        }
    }

    set(key, value) {
        try {
            var mod = findModulo.bind(this, key)();
            this.valueStore[mod].append(key, value);
        }
        catch(error) {
            console.log("error %s", error);
            console.log(new Error().stack);
        }
    }

    remove(key) {
        try {
            var mod = findModulo.bind(this, key)();
            this.valueStore[mod].remove(key);
        }
        catch(error) {
            console.log("error %s", error);
            console.log(new Error().stack);

        }
    }
}
module.exports = Hash;