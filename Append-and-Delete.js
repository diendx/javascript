function appendAndDelete(s, t, k) {
    // Write your code here
    let operation = 0, i = 0;
    for( ; i < Math.min(s.length, t.length); i++) {
        if(s.charAt(i) != t.charAt(i)) break;
    }
    
    operation = s.length - i + t.length - i;
    if(k == operation || k >= s.length + t.length) return 'Yes';
    else if(k >= operation && k % 2 == operation % 2) return 'Yes';
    else return 'No';
}

// https://www.hackerrank.com/challenges/append-and-delete/problem