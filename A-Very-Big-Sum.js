function aVeryBigSum(ar) {
    // Write your code here
    let long = 0 ;
    let i = 0
    for ( i = 0;  i <= ar.length -1; i++ ){
        long = ar[i] + long;
    }
return long
}

// https://www.hackerrank.com/challenges/a-very-big-sum/problem