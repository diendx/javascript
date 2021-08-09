function divisibleSumPairs(n, k, ar) {
    let result = 0;
    for (let x = 0; x<n; x++){
        for (let i = 0; i<n; i++){
            if (ar[x]<ar[i] && (ar[x]+ar[i])%k===0){
                result++
            }
        }
    }
    return result;
}