const Hash = require("./Hash");
const assert = require('assert');


HashTest = {};

HashTest['Hash.get should return error if key not found'] = function(done){
    var HashObject = new Hash();
    var val = HashObject.get("Test");
    assert(val instanceof Error);
    assert.equal(val.statusCode, 404);
    assert.equal(val, "Error: Not Found");
    done();
};

HashTest['Hash.get followed by set should return the value'] = function(done){
    var HashObject = new Hash();
    HashObject.set("Test","Data");
    var val = HashObject.get("Test");
    assert.equal(val, "Data");
    done();
};

HashTest['Hash.remove on missing key should return error'] = function(done){
    var HashObject = new Hash();
    var val = HashObject.remove("Test");
    assert(val instanceof Error);
    assert.equal(val.statusCode, 404);
    assert.equal(val, "Error: Not Found");
    done();
};

HashTest['Hash.remove followed by set should return true'] = function(done){
    var HashObject = new Hash();
    HashObject.set("Test","Data");
    var val = HashObject.remove("Test");
    assert.equal(val, true);
    done();
};

module.exports = HashTest;
