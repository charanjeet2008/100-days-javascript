let mergeSort = (A, i, j) => {
    let mid = Math.floor((i+j)/2);
    if(i >= j) return;

    mergeSort(A, i , mid);
    mergeSort(A, mid+1, j);
    merge(A, i, mid, j);
}

let merge = (A, start, mid, end) => {
    let left = A.slice(start, mid+1); //2nd argument of slice is the index+1 till which  we want the numbers, as end is not inclusives
    let right = A.slice(mid+1, end+1);
    Ai = start;
    //there is no point of merging as this algo is based on modifying elements by reference
    //let merged = [];
    let i = 0, j = 0;
    while (i < left.length && j < right.length) {
        if (left[i] > right[j]) {
            //Swapping will spoil the already sorted advantage we had
            //swap(A, i, j); // 7 9 | 3 5 8 => 3 9 | 7 5 8 => 3 5 | 7 9 8
            A[Ai++] = right[j];
            j++;
        } else {
            A[Ai++] = left[i];
            i++;
        }
    }
    if (i < left.length) {
        for (k = i; k < left.length; k++) {
            A[Ai++] = left[k];
        }
    }
    if (j < right.length) {
        for (k = j; k < right.length; k++) {
            A[Ai++] = right[k];
        }
    }

}
let A = [3, 5, 7, 1, 2];
//let A = [3, 7, 9, 1, 4, 8];
console.log(A);
mergeSort(A, 0, 5);
console.log(A);