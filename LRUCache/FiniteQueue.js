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
            console.log("%s", e);
            console.log(new Error().stack);
            return false;
        }
    }
    pull() {
        //todo:remove value upon access
        try {
            return this.queueStore[0];
        }
        catch(e) {
            console.log("%s", e);
            console.log(new Error().stack);
        }
    }
    remove(value) {
        try{
            //sdelete this.queueStore[k]
        }
        catch (e) {

        }
    }
}
module.exports = FiniteQueue;