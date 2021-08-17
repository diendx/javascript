function permutationEquation(p) {
    let arr= [];
    for(let x =1;x<=p.length;x++)
    {
        arr[x-1] = p.indexOf(p.indexOf(x)+1)+1;
    }
    return arr;
}

// https://www.hackerrank.com/challenges/permutation-equation/problem?h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen