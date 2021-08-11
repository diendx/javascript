function countingValleys(steps, path) {
    let height = 0;
    let valley = 0;
    for (let elm of path) {
        if (elm == 'U') {
            height += 1;
            if (height == 0) {
                valley++;
            }
        }
        else if (elm == 'D') {
            height -= 1;
        }
    }
    return valley;
}
// https://www.hackerrank.com/challenges/counting-valleys/problem
