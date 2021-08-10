function dayOfProgrammer(year) {
    let date;
    if (year == 1918) {
        date = "26.09." + String(year);}
    else if (year < 1918) {
        if (year % 4 == 0) {
            date = "12.09." + String(year);}
        else {
            date = "13.09." + String(year);}}
    else if (1918 < year) {
        if (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)) {
            date = "12.09." + String(year);}
        else {
            date = "13.09." + String(year);}}
    return date;}

// https://www.hackerrank.com/challenges/day-of-the-programmer/problem