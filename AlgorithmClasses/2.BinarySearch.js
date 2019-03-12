
let searchArray = (A, key, i, j) => {
    if(i > j)
        return false;

    const mid = Math.floor((i+j)/2);

    if(key == A[mid]) {
        return mid;
    }
    else if(key < A[mid]) {
        return searchArray(A, key, i, mid);
    }
    else {
        return searchArray(A, key, mid+1, j);
    }

}

let output = searchArray([1,5,6,8], 8,0,3);
console.log(output);