function utopianTree(n) {
    // Write your code here
    let growth = 0, i = -1;
    while(++i <= n) {
        i % 2 == 0 ? growth += 1 : growth *= 2 
    }
    return growth;
}

// https://www.hackerrank.com/challenges/utopian-tree/problem?h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen