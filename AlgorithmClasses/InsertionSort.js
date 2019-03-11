//insert this value to correct place
insertionSort = function(A) {
    for(i=1;i<A.length;i++) {
        for(j=0;j<i;j++) {
            if(A[i] < A[j]) {
                temp = A[i];
                for(k=i-1;k>=j;k--) {
                    A[k+1] = A[k];
                }
                A[j] = temp;
            }
        }
    }
}

A = [8,3,7,5,4];
//i=1: 3 8 7 5 4
//i=2: 3 7 8 5 4
//i=3: 3 5 7 8 4
//i=4: 3 4 5 7 8
insertionSort(A);
console.log(A);