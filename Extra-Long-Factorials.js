function extraLongFactorials(n) {
    let num = BigInt(1)
    for (let i = 1; i < n+1; i++){
        num *= BigInt(i)
    }
    console.log(num.toString())
}  

// https://www.hackerrank.com/challenges/extra-long-factorials/problem
