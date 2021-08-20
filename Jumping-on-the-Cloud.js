function jumpingOnClouds(c) {
    // Write your code here
    let jumps = 0;
    for (let i = 0; i < c.length - 1; i++) {
            if (c[i] === 0  ) {
                i++
        }
        jumps ++
    }
    return jumps
}

// https://www.hackerrank.com/challenges/jumping-on-the-clouds/problem