function birthdayCakeCandles(candles) {
    // Write your code here
    let maxcandles = Math.max(...candles);
    let cakecandles = 0;
    for (let i = 0; i < candles.length; i++){
        if(candles[i] == maxcandles) {
            cakecandles = cakecandles + 1;
        }
    }
    return cakecandles
}

// https://www.hackerrank.com/challenges/birthday-cake-candles/problem

