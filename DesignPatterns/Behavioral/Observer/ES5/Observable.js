const Interface = require("../../../Common/Interface");
const ObserverInterface = require("./ObserverInterface");

/**
 * It will generate a random number every 30s like in Google Authenticator App.
 * A person can login on MFA enabled websites at any platform be in Mobile website, Desktop site, Android/IOS App.
 * OTP shown to the user is same across platforms and, it is updated every few seconds.
 */

let Observable = function() {
    this.observers = [];

    this.addObserver = function(observer) {
        Interface.ensureImplements(observer, ObserverInterface);

        this.observers.push(observer);
    }

    this.removeObserver = function(observer) {
        this.observers.filter(function(value) {
            value !== observer;
        })
     }
     this.notify = function(value) {
        if(typeof this.observers == "undefined" || this.observers.length <= 0 ) return;
        this.observers.map(function(currentObserver) {
            currentObserver.onOTPchange(value);
        })
    }

}

module.exports = Observable;