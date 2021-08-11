function miniMaxSum(arr) {
    let max =  arr[0];
    let min = arr[0];
    let kq = 0
    for (let i = 0; i < arr.length; i++){
        kq += arr[i];
    
        if (max< arr[i]){
            max = arr[i]
        };
        if (min > arr[i]){
            min = arr[i]
        }
    }
    let kqmax = kq - min;
    let kqmin = kq - max;
    console.log(kqmin, kqmax )
}

// https://www.hackerrank.com/challenges/mini-max-sum/problem