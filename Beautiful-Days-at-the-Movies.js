function beautifulDays(i, j, k) {
    // Write your code here
  let  reverse;
  let bCount = 0;
  
  for(i; i<=j; i++){
       reverse = parseInt(i.toString().split('').reverse().join(''));
      if(Math.abs(i -  reverse) % k === 0){
          bCount++;
      }
  }  
    return bCount;
}

// https://www.hackerrank.com/challenges/beautiful-days-at-the-movies/problem