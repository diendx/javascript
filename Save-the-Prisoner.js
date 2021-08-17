function saveThePrisoner(n, m, s) {
    const chair =  (m + s - 1) % n;
    if (chair) {
        return chair;
    } else {
        return n;
    }

}s
// https://www.hackerrank.com/challenges/save-the-prisoner/problems