const FiniteQueue = require("./FiniteQueue");
const assert = require('assert');


FiniteQueueTest = {};

FiniteQueueTest['FiniteQueueTest.pull should return Error on empty queue'] = function(done){
    var Q = new FiniteQueue(5);
    var val = Q.pull();
    assert(val instanceof Error);
    assert.equal(val, "Error: Not Found");
    done();
};


FiniteQueueTest['FiniteQueueTest.pull followed by push function should return the value'] = function(done){
    var Q = new FiniteQueue(5);
    var index = Q.push("Test")
    assert.equal(index, 0);

    var val = Q.pull();
    assert.equal(val, "Test");
    done();
};


FiniteQueueTest['FiniteQueueTest.push should return an error on limit crossing'] = function(done){
    var Q = new FiniteQueue(2);
    var index1 = Q.push("Data1");
    assert.equal(index1, 0);

    var index2 = Q.push("Data2");
    assert.equal(index2, 1);

    var index3 = Q.push("Data3");
    assert(index3 instanceof Error);
    assert.equal(index3, "Error: Capacity Exceeded");
    done();
};

FiniteQueueTest['FiniteQueueTest.push without a value should return Error'] = function(done){
    var Q = new FiniteQueue(5);
    var index = Q.push();

    assert(index instanceof Error);
    assert.equal(index, "Error: Value Missing");
    done();
};
module.exports = FiniteQueueTest;