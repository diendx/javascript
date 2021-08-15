function hurdleRace(k, height) {
    // Write your code here
    height.sort((a, b) => {
        return b - a;
      });
    if(height[0] > k){
        return height[0] - k;
    }
    else return 0;
}

//https://www.hackerrank.com/challenges/the-hurdle-race/problem