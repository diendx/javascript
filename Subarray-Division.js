function birthday(nuberOfChocolate, day, month) {
    let ways = 0;
    let demoSun = 0;

    for(let i = 0; i < nuberOfChocolate.length - month+1; i++){
        for(let j = i; j < month+i; j++){
            demoSun = demoSun + nuberOfChocolate[j];
            if(demoSun == day && j - i + 1 == month) {
                ways++;
            }
        }
            demoSun = 0;
    }    
    return ways;
}

// https://www.hackerrank.com/challenges/the-birthday-bar/problem