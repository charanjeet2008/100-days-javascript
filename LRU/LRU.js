const FiniteQueue = require("./FiniteQueue");
const Hash = require("./Hash");
const Cache = require("./Cache");

//todo: namespace
//todo: error codes and names
class LRU {
    constructor(capacity) {

        //init a Queue to track of LRU capacity
        this.evictionStore = new FiniteQueue(capacity);


        //Items are stored in a Hash which is modeled as an object.
        this.hash = new Hash();
    }

    /**
     * Get the value corresponding to the key
     * @param key
     * @returns String Value on Success, {Error} on failure
     */
    get(key) {
        try {
            //get the value from Hash
            var response = this.hash.get(key);
            if(response instanceof Error) return response;


            //update Eviction Store to re-arrange as per the recent usage
            var updateResponse = Cache._updateAccess.call(this, key, response);
            if(updateResponse instanceof Error) return updateResponse;


            //return value
            return response.value;

        }
        catch(error){
            console.log("asdfff");
            var errorResponse = new Error(error);
            errorResponse.statusCode = 404;
            return errorResponse;
        }
    }

    /**
     * Set key-value pair to the LRU Cache
     * @param key
     * @param value
     */
    set(key, value) {
        try {

            //Handle Capacity of Eviction Store
            var handleResponse = Cache._handleCpacity.call(this);
            if(handleResponse instanceof Error) return handleResponse;


            //Push to the eviction store
            var evictionIndex = this.evictionStore.push(key);


            //Add the key and eviction store index to the hash
            var hashItem = {};
            hashItem.value = value;
            hashItem.evictionIndex = evictionIndex;


            //Set in Hash
            this.hash.set(key, hashItem);
        }
        catch(error) {
            var errorResponse = new Error(error);
            errorResponse.statusCode = 404;
            return errorResponse;
        }
    }
}

module.exports = LRU;