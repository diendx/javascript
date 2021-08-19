function cutTheSticks(arr) {
    // Write your code here
    function traversal(arr, result = []) {
        let min = Infinity;
        let next = [];

        for (let i = 0; i < arr.length; i++) {
            min = Math.min(min, arr[i]);
        }    

        for (let i = arr.length - 1; i >= 0; i--) {
            const left = arr[i] - min;

            if (left > 0) {
                next.unshift(left)
            }
        }

        if (arr && arr.length > 0) {
            result.push(arr.length)
            return traversal(next, result)
        }

        return result;
    }    

    return traversal(arr)
}

// https://www.hackerrank.com/challenges/cut-the-sticks/problem?h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen