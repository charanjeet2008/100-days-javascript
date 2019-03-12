import module from "../DesignPatterns/Structural/Facade/Module";

var 1 = function (A, i, j) {
    temp = A[i];
    A[i] = A[j];
    A[j] = temp;

}
module.exports = 1;