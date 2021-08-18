function jumpingOnClouds(c, k) {
    let n = c.length;
    let e = 100;
    let jump;

    for(let i = 0; i<n;i++){
        jump = (i*k) % n;
        if(jump == 0 && i > 0){
            break;
        }
        else if(c[jump] == 1){
            e -= 2;
        }
        e--;
    }
    return e

} 

// https://www.hackerrank.com/challenges/jumping-on-the-clouds-revisited/problem