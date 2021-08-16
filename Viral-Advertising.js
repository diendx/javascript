function viralAdvertising(n) {
    // Write your code here
    let peopleSee = 5;
    let likes = 0;
  while(n>0){
  let peopleShare = Math.floor(peopleSee /2);
  peopleSee = peopleShare*3;
  likes = likes+peopleShare;
  n--;
  
  }
return likes;
}


// https://www.hackerrank.com/challenges/strange-advertising/problem
