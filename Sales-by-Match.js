function sockMerchant(n, ar) {
    let pair = 0;
    let box = [];
    for (let i = 0; i < n; i++) {
        if (box.indexOf(ar[i]) >= 0) {
            box.splice(box.indexOf(ar[i]), 1);
            pair++;
        } else {
            box.push(ar[i]);
        }
    }
    return pair;
}

// https://www.hackerrank.com/challenges/sock-merchant/problem