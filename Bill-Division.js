function bonAppetit(bill, k, b) {
    // Write your code here
    const arr = bill.slice(0, k).concat(bill.slice(k + 1));
    const res = arr.reduce((acc, cur) => acc + cur);

    if (b > res/2) {
        console.log(b - res/2);
    } else {
        console.log("Bon Appetit");
    }
}

// https://www.hackerrank.com/challenges/bon-appetit/problem