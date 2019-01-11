function collectPrimes(uptoNumber)
{
    let primes = new Set();
    for(j=2;j<=uptoNumber;j++) {
        if(isPrime(j)) {
            primes.add(j);
        }
    }
    return primes;
}


function isPrime(m)
{
    if(m == 1)
        return false;


    for(i=2; i<=m/2; i++)
    {
        if(m%i == 0)
        {
            return false;
        }
    }

    return true;
}


function primesSum(A) {
    let primes = collectPrimes(A);

    for(let i of primes) {
        subtraction = A-i;

        if(primes.has(subtraction)) {
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
