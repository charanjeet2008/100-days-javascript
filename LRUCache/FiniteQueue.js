/**
 * New items are pushed from the back,
 * and, if capacity is exceeded, an item is pulled from front to make the space
 *
 * When an item is accessed, it is removed from its current position and pushed to the back
 */
class FiniteQueue {
    constructor(capacity) {
        this.queueStore = [];
        this.capacity = capacity;
    }

    isFull() {
        if(this.queueStore.length >= this.capacity)
            return true;
        return false;
    }
    /**
     * Pushes the Value to the back and returns the index
     * @param value
     * @returns False on Error, index on Success
     */
    push(value) {
        try {
            var newLength = this.queueStore.push(value);
            return newLength-1;
        }
        catch (e) {
            var errorResponse = new Error(error);
            errorResponse.statusCode = 404;
            return errorResponse;
        }
    }
    pull() {
        //todo:remove value upon access
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
    remove(index) {
        try{
            delete this.queueStore[index];
        }
        catch (e) {

        }
    }
}
module.exports = FiniteQueue;