function staircase(n) {
    // Write your code here
    for(let i =0; i< n ; i++){
        let  str = "";
        for(let s = 0 ; s< n-i-1; s++){
            str+= " ";
        }
        for( let t = 0; t<i+1; t++){
            str += '#' 
        }
        console.log(str)
    }
    
}

// https://www.hackerrank.com/challenges/staircase/problem