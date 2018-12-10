Utility = {};
Utility.stringToNumber = function(str) {
    return str.split('')
        .map(function (char) {
            return char.charCodeAt(0);
        })
        .reduce(function (current, previous) {
            return previous + current;
        });
}
Utility.findModulo = function(key) {
    try {
        var numbered = Utility.stringToNumber(key)
        mod = Math.floor(numbered % this.capacity);
        if(mod >= 0)
            return mod;
        throw 'invalid modulo';

    }  catch(error) {
        console.log("error %s", error);
        return -1;
    }
}
module.exports = Utility;