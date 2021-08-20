function repeatedString(s, n) {
    // Write your code here
    let count = 0, 
        result = 0;
    for(let i = 0; i < s.length; i++) {
        if(s[i] === 'a') count++;
    }
    
    let cycles = parseInt(n / s.length);
    let remaining = n % s.length;
    
    result = cycles * count;
    for(let i = 0; i < remaining; i++) {
        if(s[i] === 'a') result++;
    }
    return result;
}

// https://www.hackerrank.com/challenges/repeated-string/problem