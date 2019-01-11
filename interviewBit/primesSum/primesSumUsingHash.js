function collectPrimes(uptoNumber) {
    var primes = {};
    for(i=0;i<=uptoNumber;i++) {
        primes[i] = 1;
    }
    delete primes[0];
    delete primes[1];


    for(i=2 ; i<= Math.sqrt(uptoNumber) ; i++) {
        for(j=2 ; i*j <= uptoNumber ; j++) {
            delete primes[i*j];
        }
    }
    return primes;
}
function primesSum(A) {
    var primes = collectPrimes(A);

    console.dir(primes);
    for(var i in primes) {
        console.log(i);
        subtraction = A - i;
        if(typeof primes[subtraction] !== "undefined") {
            return [i, subtraction];
        }
    }

    return [0,0];
}


module.exports = {

//param A : integer
    //return a array of integers
    primesum : function(A) {
        return primesSum(A);
    }
};
