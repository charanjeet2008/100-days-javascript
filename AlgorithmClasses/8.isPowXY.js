isPowerXY = function (N) {
    for(i=2;i<=Math.ceil(Math.sqrt(N));i++) {
        if(isPowerNI(N,i))
            return true;
    }
    return false;
}

isPowerNI = function (n,a) {
    let r = n%a;
    if(r !== 0) return false;
    let q = n/a;
    if(q === 1) return true;
    return isPowerNI(q,a);
}

//console.log(isPowerNI(625,5));
console.log(isPowerXY(9));