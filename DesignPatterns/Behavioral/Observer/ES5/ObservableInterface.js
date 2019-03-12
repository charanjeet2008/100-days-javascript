const Interface = require("../../../Common/Interface");

const ObservableInterface = new Interface('ObservableInterface', [
    'addObserver',
    'removeObserver'
]);

module.exports = ObservableInterface;
