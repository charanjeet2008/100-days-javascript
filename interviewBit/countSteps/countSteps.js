function min(x, y) {
    return (x<y)? x: y;
}
function countStepsBetweenTwoPoints(Px, Py, Qx, Qy) {
    var XDiff = Math.abs(Qx - Px);
    var YDiff = Math.abs(Qy - Py);

    var commonSteps = min(XDiff, YDiff);
    var extraStepsX = XDiff - commonSteps;
    var extraStepsY = YDiff - commonSteps;

    return commonSteps + extraStepsX + extraStepsY;

}
function countSteps(A,B) {
    steps = 0;
    console.log(A.length);
    for(i=0; i < A.length; i++) {

        if(typeof A[i+1] != 'undefined') {
            console.log("asdf");
            steps += countStepsBetweenTwoPoints(A[i], B[i], A[i + 1], B[i + 1]);
        }
    }
    console.log(steps);
    return steps;
}

module.exports = {
    //param A : array of integers
    //param B : array of integers
    //return an integer
    coverPoints : function(A, B){
        return countSteps(A,B);
    }
};
