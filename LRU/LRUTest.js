const LRU = require("./LRU");
const assert = require('assert');


LRUTest = {};

// Assert that get function is returning -1 for non-existent key
LRUTest['LRU.get should return Error for non-existing key'] = function(done){
    var LRUObject = new LRU(10);
    var val = LRUObject.get("4");
    assert(val instanceof Error);
    assert.equal(val.statusCode, 404);
    assert.equal(val, "Error: Not Found");
    done();
};

// Assert that set function followed by get is returning the set value
LRUTest['LRU.get followed by LRU.set should return the set value'] = function(done) {
    var LRUObject = new LRU(10);
    LRUObject.set("Test","Data");
    var val = LRUObject.get("Test");
    assert.equal(val, "Data");
}

// Assert that LRU item is removed upon usage above capacity
LRUTest['LRU.get should remove LRU item upon usage above capacity'] = function(done) {
    var LRUObject = new LRU(2);
    LRUObject.set("Item1","Value1");
    LRUObject.set("Item2","Value2");
    LRUObject.set("Item3","Value3");

    var val = LRUObject.get("Item1");
    assert(val instanceof Error);
    assert.equal(val.statusCode, 404);
    assert.equal(val, "Error: Not Found");

    done();
}


module.exports = LRUTest;