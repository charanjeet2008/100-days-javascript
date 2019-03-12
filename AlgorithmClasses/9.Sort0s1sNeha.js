var f = function(A) {
    console.log(A);
    var i = 0;
    for (var j = 1; j < A.length; j++) {
        console.log("=================");
        console.log(i,j);
        console.log(A);
        if (A[i] != A[j]) {
            console.log("not equal:continue");
            continue;
        } else {
            console.log("equal: swap i+1 and j: increment i");
            var temp;
            temp = A[i + 1];
            A[i + 1] = A[j];
            A[j] = temp;
            i++;
        }
    }
}
//A = [0,0,1,0,1,0,1];
var A = [0,1,0,0,1,0,0,1,1,0];

f(A);
console.log(A);
