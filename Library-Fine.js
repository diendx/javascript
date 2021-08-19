function libraryFine(d1, m1, y1, d2, m2, y2) {
    if (y1 > y2) return 10000
    if (y1 === y2 && m1 > m2) return (m1 - m2) * 500
    if (y1 === y2 && m1 === m2 && d1 > d2) return (d1 - d2) * 15
    return 0
}

// https://www.hackerrank.com/challenges/library-fine/problem?h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen