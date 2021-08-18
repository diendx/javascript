function findDigits(n) {
    let r; 
    let count = 0;
    let x = n;

  while (x > 0) {
    r = x % 10;
    x = Math.floor(x / 10);
    if (n % r == 0) {
      count++;
    }
  }
  return count;
}

// https://www.hackerrank.com/challenges/find-digits/problem
