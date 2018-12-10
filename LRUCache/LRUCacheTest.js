const LRUCache = require("./LRUCache");
const assert = require('assert');


LRUTest = {};

// Assert that get function is returning -1 for non-existent key
LRUTest['LRUCache.get should return Error for non-existing key'] = function(done){
    var LRU = new LRUCache(10);
    var val = LRU.get("4");
    assert(val instanceof Error);
    assert.equal(val.statusCode, 404);
    assert.equal(val, "Error: Not Found");
    done();
};

// Assert that set function followed by get is returning the set value
LRUTest['LRUCache.get followed by LRUCache.set should return the set value'] = function(done) {
    var LRU = new LRUCache(10);
    LRU.set("Test","Data");
    var val = LRU.get("Test");
    assert.equal(val, "Data");
}

// Assert that LRU item is removed upon usage above capacity
LRUTest['LRUCache.get should remove LRU item upon usage above capacity'] = function(done) {
    var LRU = new LRUCache(2);
    LRU.set("Item1","Value1");
    LRU.set("Item2","Value2");
    LRU.set("Item3","Value3");

    var val = LRU.get("Item1");
    assert(val instanceof Error);
    assert.equal(val.statusCode, 404);
    assert.equal(val, "Error: Not Found");

    done();
}


module.exports = LRUTest;