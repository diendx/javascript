function squares(a, b) {
    let count = 0
    for (let i = 1; i <= b; i++) {
        let square = i * i
        if (square >= a && square <= b) {
            count++
        } 
        if (square > b) {
            break
        }
    }
    return count
}

// https://www.hackerrank.com/challenges/sherlock-and-squares/problem?h_r=next-challenge&h_v=zen