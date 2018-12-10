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
    get(key) {
        try {
            //get the value from Hash
            var response = this.LRUHash.get(key);

            if(response instanceof Error) return response;

            //push the key to the end in LRU Queue
            this.evictionStore.remove(response.evictionIndex);
            var evictionIndex = this.evictionStore.push(response.value);

            //update evictionIndex of the Hashed item
            this.LRUHash.remove(key);
            //Add the key and eviction store index to the hash
            var hashItem = {};
            hashItem.value = response.value;
            hashItem.evictionIndex = evictionIndex;
            this.LRUHash.set(key, hashItem);

            return response.value;

        }
        catch(err){
            console.error("%s",err);
            console.log(new Error().stack);
            return -1;
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
            console.log("error %s", error);

        }
    }
}
module.exports = LRUCache;