module.exports = {
    //param A : array of integers
    //return a array of integers
    plusOne : function(A){
        var carry = 1;
        console.log(A);
        for(i=A.length-1;i>=0;i--) {
            console.log(i);
            if(carry !== 0) {
                if(A[i] === 9) {
                    A[i] = 0;
                    carry = 1;
                    if(i == 0) {
                        A.unshift(1);
                    }
                    continue;
                }
                A[i]++;
                carry = 0;
            }



        }
        console.log(A);

        while(A[0] === 0) {
            A.shift();

            console.log("in", A);
        }
        console.log(A);
        return A;
    }
};
