import module from "../DesignPatterns/Structural/Facade/Module";

var Swap = function (A,i,j) {
    temp = A[i];
    A[i] = A[j];
    A[j] = temp;

}
module.exports = Swap;