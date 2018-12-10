class Hash {
    constructor() {
        this.keyValueStore = {};

    }

    get(key) {
        try {
            if (this.keyValueStore[key])
                return this.keyValueStore[key];
            else
                throw 'Not Found';

            console.log(this.keyValueStore);

        }
        catch (error) {
            var errorResponse = new Error(error);
            errorResponse.statusCode = 404;
            return errorResponse;
        }
    }

    set(key, value) {
        try {
            this.keyValueStore[key] = value;
        }
        catch (error) {
            var errorResponse = new Error(error);
            errorResponse.statusCode = 404;
            return errorResponse;
        }
    }

    remove(key) {
        try {
            delete this.keyValueStore[key];
        }
        catch (error) {
            var errorResponse = new Error(error);
            errorResponse.statusCode = 404;
            return errorResponse;
        }
    }
}

module.exports = Hash;