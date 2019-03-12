//var {Swap} = require("./Swap");
let 10 = function (A) {

    let i = 0, j = A.length - 2, p = A.length - 1;
    while (i < j) {
        console.log(i,j,A);

        if (A[j] < A[p]) {
            console.log(i,j,"Swap");
            swap(A, i, j);
        } else {
            j--;
        }

        if (A[i] < A[p]) i++;

    }

    console.log(i,j,p,"Swap",A);
        swap(A, i, p);

}

var swap = function (A,i,j) {
        temp = A[i];
        A[i] = A[j];
        A[j] = temp;

}

//A = [9, 5, 7, 15, 2, 13];
//A = [9,1,3,7,5];
//A = [4,3,5,1,9,2,8,7,6];
//A = [9,8,7,6,5,4,3,2,1];
A = [2,3,3,2,2,1,3,1,1];
10(A);
console.log(A);