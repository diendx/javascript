function angryProfessor(k, a) {
    // Write your code here
    let count = 0;
    for(let i = 0; i < a.length; i++){
        if(a[i] <= 0){
            count++;
        }
    }
    if(count>= k){
        return 'NO'
    }else{
        return 'YES'
    }
}

// https://www.hackerrank.com/challenges/angry-professor/problem?h_r=next-challenge&h_v=zen