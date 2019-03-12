const Interface = require("../../../Common/Interface");
const ObserverInterface = require("./ObserverInterface");

/**
 * It will generate a random number every 30s like in Google Authenticator App.
 * A person can login on MFA enabled websites at any platform be in Mobile website, Desktop site, Android/IOS App.
 * OTP shown to the user is same across platforms and, it is updated every few seconds.
 */

let Observable = function() {
    let observers = [];
    update();
    function addObserver(observer) {
        Interface.ensureImplements(observer, ObserverInterface);

        observers.push(observer);
    }
    function removeObserver(observer) {
        observers.filter(function(value) {
            value !== observer;
        })
     }
     function getRandom() {
        return Math.random();
     }
    function update() {
        setInterval(function() {
            let nextRandom = getRandom();
            observers.map(function(currentObserver) {
                currentObserver.onOTPchange(nextRandom);
            })
        },3000);
     }
    return {
        addObserver: addObserver,
        removeObserver: removeObserver
    }
}
module.exports = Observable;