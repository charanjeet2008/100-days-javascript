/**
 * New items are pushed from the back,
 * and, if capacity is exceeded, an item is pulled from front to make the space
 *
 * and, when an item is accessed, it is removed from its current position and pushed to the back
 */

const {NOT_FOUND_IN_QUEUE, CAPACITY_EXCEEDED, VALUE_MISSING_IN_REQUEST} = require("./ErrorCodes");

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
                throw VALUE_MISSING_IN_REQUEST;


            if(this.isFull())
                throw CAPACITY_EXCEEDED;


            var newLength = this.queueStore.push(value);
            return newLength - 1;

        }
        catch (error) {
            var errorResponse = new Error(error);
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


            throw NOT_FOUND_IN_QUEUE;
        }
        catch(error) {
            var errorResponse = new Error(error);
            return errorResponse;
        }
    }


    /**
     * Given the index, deletes the key from Hash
     * @param index
     */
    remove(index) {
        try{
            if(!this.queueStore[index])
                throw NOT_FOUND_IN_QUEUE;


            delete this.queueStore[index];
        }
        catch(error) {
            var errorResponse = new Error(error);
            return errorResponse;
        }
    }
}
module.exports = FiniteQueue;