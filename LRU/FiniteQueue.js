/**
 * New items are pushed from the back,
 * and, if capacity is exceeded, an item is pulled from front to make the space
 *
 * and, when an item is accessed, it is removed from its current position and pushed to the back
 */
class FiniteQueue {

    constructor(capacity) {
        this.queueStore = [];
        this.capacity = capacity;
    }


    /**
     * Verify if the Queue has become Full
     * @returns {boolean}
     */
    isFull() {
        if(this.queueStore.length >= this.capacity)
            return true;
        return false;
    }


    /**
     * Push the Value to the back and return the index
     * @param value
     * @returns Error Object on Error, index on Success
     */
    push(value) {
        try {
            if(!value)
                throw "Value Missing";


            if(this.isFull())
                throw "Capacity Exceeded";

            var newLength = this.queueStore.push(value);

            return newLength - 1;

        }
        catch (error) {
            var errorResponse = new Error(error);
            errorResponse.statusCode = 404;
            return errorResponse;
        }
    }


    /**
     * Pull the item from front
     * @returns Error Object on Error, value on Success
     */
    pull() {
        try {
            if(typeof this.queueStore[0] != "undefined")
                return this.queueStore[0];
            throw "Not Found";
        }
        catch(error) {
            var errorResponse = new Error(error);
            errorResponse.statusCode = 404;
            return errorResponse;
        }
    }


    /**
     * Given the index, deletes the key from Hash
     * @param index
     */
    remove(index) {
        try{
            delete this.queueStore[index];
        }
        catch (e) {

        }
    }
}
module.exports = FiniteQueue;