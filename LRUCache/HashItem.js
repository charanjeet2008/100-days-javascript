class HashItem {
    //modelling as array of dynamic size containing objects
    //better model as an object containing keys. fetch by key in this case would be O(1)
    constructor() {
        this.keyValueStore = {};
    }
    append(key, value) {
        this.keyValueStore[key] = value;
        console.log(this.keyValueStore);

    }
    fetch(key) {
        try {
            if (this.keyValueStore[key])
                return this.keyValueStore[key];
            else
                throw 'Not Found';

            console.log(this.keyValueStore);

        }
        catch(error) {
            var errorResponse = new Error(error);
            errorResponse.statusCode = 404;
            return errorResponse;
        }
    }
    remove(key) {
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