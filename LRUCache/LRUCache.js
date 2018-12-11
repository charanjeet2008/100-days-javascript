// Constructor : Initializes the LRUCache with capacity

const FiniteQueue = require("./FiniteQueue");
const Hash = require("./Hash");

class LRUCache {
    constructor(capacity) {
        //init a Queue to track of LRU capacity
        this.evictionStore = new FiniteQueue(capacity);

        //Items are stored in a Hash which is modeled as an object.
        this.LRUHash = new Hash();
    }

    /**
     * Get the value corresponding to the key
     * @param key
     * @returns String Value on Success, {Error} on failure
     */
    get(key) {
        try {
            //get the value from Hash
            var response = this.LRUHash.get(key);

            //return Error if value not found
            if(response instanceof Error) return response;


            //remove the key from its current index and push to the end in LRU Queue
            //evictionIndex is saved in Hash to avoid O(n) operation to remove the key
            this.evictionStore.remove(response.evictionIndex);
            var newEvictionIndex = this.evictionStore.push(response.value);


            //Remove Hash entry with previous eviction index
            this.LRUHash.remove(key);

            //Add the key and updated eviction store index to the Hash
            var hashItem = {};
            hashItem.value = response.value;
            hashItem.evictionIndex = newEvictionIndex;
            this.LRUHash.set(key, hashItem);

            //return value
            return response.value;

        }
        catch(err){
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
            //Remove Least Recently Used item
            if(this.evictionStore.isFull()) {
                var pulledKey = this.evictionStore.pull();
                this.LRUHash.remove(pulledKey);
            }

            //Push to the eviction store
            var evictionIndex = this.evictionStore.push(key);

            //Add the key and eviction store index to the hash
            var hashItem = {};
            hashItem.value = value;
            hashItem.evictionIndex = evictionIndex;

            this.LRUHash.set(key, hashItem);
        }
        catch(error) {
            var errorResponse = new Error(error);
            errorResponse.statusCode = 404;
            return errorResponse;
        }
    }
}
module.exports = LRUCache;