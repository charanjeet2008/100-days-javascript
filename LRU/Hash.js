class Hash {
    constructor() {
        this.keyValueStore = {};

    }

    /**
     * Get the value corresponding to the key
     * @param key
     * @returns string Value on Success, {Error} on failure
     */
    get(key) {
        try {
            if (this.keyValueStore[key])
                return this.keyValueStore[key];

            throw 'Not Found';

            console.log(this.keyValueStore);

        }
        catch (error) {
            var errorResponse = new Error(error);
            errorResponse.statusCode = 404;
            return errorResponse;
        }
    }

    /**
     * Set the key-value pair in the Hash
     * @param key
     * @param value
     * @returns Boolean True on Success, {Error} on failure
     */
    set(key, value) {
        try {
            this.keyValueStore[key] = value;
            return true;
        }
        catch (error) {
            var errorResponse = new Error(error);
            errorResponse.statusCode = 404;
            return errorResponse;
        }
    }

    /**
     * Remove the key in the Hash
     * @param key
     * @returns Boolean True on Success, {Error} on failure
     */
    remove(key) {
        try {
            if(this.keyValueStore[key]) {
                delete this.keyValueStore[key];
                return true;
            }

            throw "Not Found";

        }
        catch (error) {
            var errorResponse = new Error(error);
            errorResponse.statusCode = 404;
            return errorResponse;
        }
    }
}

module.exports = Hash;