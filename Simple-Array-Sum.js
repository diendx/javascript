function simpleArraySum(ar) {
    // Write your code here
    let kq = 0 ;
    let i = 0;
    for ( i = 0; i < ar.length; i++ ){
        // kq = ar[i] + kq
        kq += ar[i] ;
    }
    return kq;

}

// https://www.hackerrank.com/challenges/simple-array-sum/problem