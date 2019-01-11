
function nextPrime(prev)
{
    var i;
    i=prev;
    while(!isPrime(++i));
    return i;

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
    var curPrime = 2;
    while(curPrime <= A/2)
    {
        var sub = A-curPrime;
        if(isPrime(sub))
            return [curPrime, sub];
        curPrime = nextPrime(curPrime);

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

