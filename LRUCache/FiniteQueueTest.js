const FiniteQueue = require("./FiniteQueue");
const assert = require('assert');


FiniteQueueTest = {};

FiniteQueueTest['FiniteQueueTest.pull should return Error on empty queue'] = function(done){
    var Q = new FiniteQueue(5);
    var val = Q.pull();
    assert(val instanceof Error);
    assert.equal(val.statusCode, 404);
    assert.equal(val, "Error: Not Found");
    done();
};

module.exports = FiniteQueueTest;