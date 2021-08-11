function diagonalDifference(arr) {
    // Write your code here
    
    var n = arr.length;
    var left = 0;
    var right = 0;
    for(var i=0; i<n; i++){
        for(var j=0; j<n; j++){
            // an element from the main diagonal
            if(i === j) { 
                left += arr[i][j];
            }
            // an element from the counterdiagonal
            if(i + j === n - 1){
                right += arr[i][j];
            }
        }
    }
    return Math.abs(left - right);
}


// https://www.hackerrank.com/challenges/diagonal-difference/problem