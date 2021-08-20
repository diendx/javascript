function equalizeArray(arr) {
    arr.sort((a,b) => a - b)
    let maxDup = 0
    let currDup = 1
    let count
    const length = arr.length

    for (let i = 0; i < length; i++) {
        if (arr[i] === arr[i+1]) currDup++
        else currDup = 1

        if (currDup > maxDup) maxDup = currDup
    }

    return count = (length - maxDup)
}

// https://www.hackerrank.com/challenges/equality-in-a-array/problem?h_r=next-challenge&h_v=zen