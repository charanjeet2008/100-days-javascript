const {NOT_FOUND_IN_HASH, VALUE_MISSING_IN_REQUEST} = require("./ErrorCodes");
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

            throw NOT_FOUND_IN_HASH;

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
            if(!value)
                throw VALUE_MISSING_IN_REQUEST;


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

            throw NOT_FOUND_IN_HASH;

        }
        catch (error) {
            var errorResponse = new Error(error);
            errorResponse.statusCode = 404;
            return errorResponse;
        }
    }
}

module.exports = Hash;