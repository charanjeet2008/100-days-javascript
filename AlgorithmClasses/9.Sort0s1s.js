var sorting = function(A) {
    var i = 0;
    var j = A.length-1;

    while(i<=j) {
        if(A[i] == 1 && A[j] == 0) {
            A[i] = 0;
            A[j] = 1;

        }
        if(A[i] === 0) i++;
        if(A[j] === 1) j--;
        console.log(A);
    }
}
//var A = [0,0,1,0,1,0,1];
var A = [0,1,0,0,1,0,0,1,1,0];
sorting(A);

console.log(A);