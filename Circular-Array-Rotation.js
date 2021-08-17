function circularArrayRotation(a, k, queries) {
    // Write your code here
    let arr = [];
    for(var i = 1; i <= k; i++) {
        let temp = a[a.length - 1];
        for(var j = a.length - 2; j >= 0; j--) {
            a[j + 1] = a[j];
        }
        a[0] = temp;
    }
    
    queries.forEach(function(item) {
        arr.push(a[item]);
    });
    
    return arr;
}

// https://www.hackerrank.com/challenges/circular-array-rotation/problem?h_r=next-challenge&h_v=zen