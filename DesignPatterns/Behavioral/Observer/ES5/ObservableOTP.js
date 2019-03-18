const Observable = require("./Observable");

const ObservableOTP = function() {
    Observable.call(this);

    function getRandom() {
        return Math.random();
    }
    this.update = function() {
        let that = this; //because setInterval has its own this which overwrites the outer space's this
        setInterval(function() {
            let nextRandom = getRandom();
            that.notify(nextRandom);

        },3000);
    }
    this.update()

}
ObservableOTP.prototype = new Observable();

module.exports = ObservableOTP;

//Problem 1 with ES5:
// If child function which is acting as a subclass, cannot use revealing module pattern if its parent is already using so. as this will override parent's functions

//Problem 2: update does not have reference to this. I need to invoke update() from constructor. Thus Revealing does not work well with classes where this and inheritance is needed