class HashItem {
    //modelling as array of dynamic size containing objects
    //better model as an object containing keys. fetch by key in this case would be O(1)
    constructor() {
        this.keyValueStore = {};
    }
    append(key, value) {
        this.keyValueStore[key] = value;

    }
    fetch(key) {
        try {
            if (this.keyValueStore[key])
                return this.keyValueStore[key];
            else
                throw 'value not found in List';
        }
        catch(error) {
            console.log("%s", error);
        }
    }
    delete(key) {
        try {
            delete this.keyValueStore[key];
        }
        catch(error) {
            console.log("%s", error);
            console.log(new Error().stack);

        }
    }

}

module.exports = HashItem;