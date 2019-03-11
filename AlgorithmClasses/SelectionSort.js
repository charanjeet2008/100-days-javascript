selectionSort = function(A) {
    for(i=0;i<A.length-1;i++) {

        min = i; //min is the index, not the value
        for(j=i+1;j<A.length;j++) {
            console.log(i,j);
            if(A[j] < A[i]) {
                min = j;
            }
        }
        swap(A,i,min);
    }
}
swap = function(A,i,j) {
    temp = A[i];
    A[i] = A[j];
    A[j] = temp;
}

A = [9,4,2];
selectionSort(A);
console.log(A);