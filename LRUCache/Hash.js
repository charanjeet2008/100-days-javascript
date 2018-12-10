const HashItem = require("./HashItem");
const Utility = require("./Utility");
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
            var mod = Utility.findModulo.bind(this, key)();
            return this.valueStore[mod].fetch(key);

        }
        catch(error) {
            var errorResponse = new Error(error);
            errorResponse.statusCode = 404;
            return errorResponse;
        }
    }

    set(key, value) {
        try {
            var mod = Utility.findModulo.bind(this, key)();
            this.valueStore[mod].append(key, value);
        }
        catch(error) {
            console.log("error %s", error);
            console.log(new Error().stack);
        }
    }

    remove(key) {
        try {
            var mod = Utility.findModulo.bind(this, key)();
            this.valueStore[mod].remove(key);
        }
        catch(error) {
            console.log("error %s", error);
            console.log(new Error().stack);

        }
    }

    updateEvictionIndex(key, evictionIndex) {
        this.valueStore[mod].up(key, value);
    }
}
module.exports = Hash;