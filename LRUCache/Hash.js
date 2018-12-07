const LinkedList = require("./LinkedList");
Hash = function(capacity) {
    var valueStore = [];
    for(i=0;i<capacity;i++) {
        console.log("hashindex", i);

        valueStore[i] = new LinkedList(i);

    }

    function findModulo(key) {
        var mod = -1;
        mod = Math.floor(key % capacity);
        if(mod <= -1) {
            return "ERROR! in findModulo";
        }
        return mod;
    }
    function get(key) {
        mod = findModulo(key);
        console.log("getting at", mod, key);
        return valueStore[mod].fetch(key);
    }
    function set(key, value) {
        mod = findModulo(key);
        console.log("setting at", mod, key);

        valueStore[mod].append(key, value);
    }
    function remove(key) {
        mod = findModulo(key);
        console.log("removing at", mod, key);

        valueStore[mod].remove(key);
    }
    return {
        get: function(key) {
            return get(key);
        },
        set: function (key, value) {
            return set(key, value);
        },
        remove: function(key) {
            remove(key);
        }
    }
}
module.exports = Hash;