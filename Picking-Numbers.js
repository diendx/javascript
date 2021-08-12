function pickingNumbers(a) {
    let result = 0
        a.sort()
    for (let i = 0; i < a.length - 1; i++) {
        let temp = 0
        let thresholdReached = false

        for (var j = i; j < a.length - 1; j++) {
            const diff = Math.abs(a[j] - a[j + 1])

            if (diff > 1 || thresholdReached && diff == 1)
                break

            if (diff == 1)
                thresholdReached = true
            temp++
        }
        i = j
        if (temp > result)
            result = temp
    }
    return result && result + 1 || 0
}

// https://www.hackerrank.com/challenges/picking-numbers/problem
