function migratoryBirds(arr) {
    let birds = {}

    for (let i = 0; i < arr.length; i++) {
        if (birds[arr[i]]) {
            birds[arr[i]] += 1
        } else {
            birds[arr[i]] = 1
        }
    }
    let maxBird = 1;
    for (const bird in birds){
        if (birds[bird]> birds[maxBird]){
            maxBird = bird;
        }
    }
    return maxBird
}

// https://www.hackerrank.com/challenges/migratory-birds/problem