function plusMinus(arr) {
    // Write your code here
 let length = arr.length;
 let positive = 0; 
 let negative = 0;
 let zeros = 0 ;
 
    for(let i = 0;i < arr.length ; i++){
        if (arr[i] > 0){
        positive += 1;
        }
        else if (arr[i] < 0) {
        negative += 1;
        }
        else { 
        zeros += 1 
        }
    }
let fractionPositive = positive / length;
let fractionNegative = negative / length;
let fractionZeros = zeros / length;
console.log(fractionPositive);
console.log(fractionNegative);
console.log(fractionZeros)
}

// https://www.hackerrank.com/challenges/plus-minus/problem