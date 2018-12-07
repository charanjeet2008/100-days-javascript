FiniteQueue = function(capacity) {
    var queueStore = [];
    var queueLength = 0
    function pushValue(value) {
        if(queueLength > capacity) {
            return -1;
        }
        queueStore.push(value);
        queueLength++;
    }
    function pullValue() {
        //todo: try catch
        //todo:remove value upon access
        return queueStore[0];
    }

    return {
        push: function(value) {
            pushValue(value);
        },
        pull: function() {
            return getValue();
        }
    }
}
module.exports = FiniteQueue;