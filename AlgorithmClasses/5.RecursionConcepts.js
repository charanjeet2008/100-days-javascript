let recursion = (i) => {
    if(i<=0) return;
    i = i-1;
    console.log("Before Recursion by Parent" + i);
    recursion(i);
    console.log("After Child has executed" + i);
}

//recursion(5);

let doubleRecursion = (i) => {
    console.log(i + " INVOKED");
    if(i<=0) {
        return;
    }
    i = i-1;
    console.log(i + " Before initial Recursion by Parent");
    doubleRecursion(i);

    console.log(i + " After intitial Recursion");
    doubleRecursion(i);

    console.log(i + " After both recursions has executed");
}

//doubleRecursion(5);


let tree = (i,j) => {
    mid = Math.floor((i+j)/2);
    if(i == j) {
        console.log("By (" + i + "," + j + ") returning: " + i);
        return i;
    }
    console.log("By (" + i + "," + j + ") as a parent invoking Left (" + i + "," + mid + ")");
    let left = tree(i,mid);


    console.log("By (" + i + "," + j + ") as a parent after Left Returned: " + left + " invoking Right(" + (mid+1) + "," + j + ")");
    let right = tree(mid+1, j);


    console.log("By (" + i + "," + j + ") as a parent after Left Returned: " + left + " and Right returned:" + right);
    return "Family";
}
tree(0,10);