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
        try {
            return queueStore[0];
        }
        catch(error) {
            console.log("%s", error);
            console.log(new Error().stack);
        }
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