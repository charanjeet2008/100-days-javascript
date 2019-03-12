const Interface = require("../../../Common/Interface");

const ObserverInterface = new Interface('ObserverInterface', [
    'onOTPchange'
]);

module.exports = ObserverInterface;