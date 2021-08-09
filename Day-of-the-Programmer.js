function dayOfProgrammer(year) {
    const isYearLeap = () => {
        if(year % 4 !== 0) {
            return false;
        } else if(year % 100 !== 0) {
            return true;
        } else {
            return year > 1917 ? year % 400 === 0 : true;
        }
    }
    return `${year === 1918 ? 26 : isYearLeap() ? 12 : 13}.09.${year}`;
}

// https://www.hackerrank.com/challenges/day-of-the-programmer/problem