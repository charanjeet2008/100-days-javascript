Cache = {};
/**
 * Private function to evict item if the capacity has become Full
 * @private
 */
Cache._handleCpacity = function () {

    if (this.evictionStore.isFull()) {

        //remove LRU item from Queue
        var pulledKey = this.evictionStore.pull();


        //remove item from Hash
        this.hash.remove(pulledKey);
    }
}

Cache._updateAccess = function (key, response) {
    try {
        //remove the key from its current index and
        this.evictionStore.remove(response.evictionIndex);


        //push to the end in LRU Queue
        var newEvictionIndex = this.evictionStore.push(response.value);


        //remove Hash entry with previous eviction index
        this.hash.remove(key);


        //add the key and updated eviction store index to the Hash
        var hashItem = {};
        hashItem.value = response.value;
        hashItem.evictionIndex = newEvictionIndex; //evictionIndex is saved in Hash to avoid O(n) operation to remove the key
        this.hash.set(key, hashItem);
    }
    catch (error) {
        var errorResponse = new Error(error);
        errorResponse.statusCode = 404;
        return errorResponse;
    }
}

module.exports = Cache;