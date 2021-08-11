function getMoneySpent(keyboards, drives, b) {
        
    const sumArr = [];
    const validPrices = [];
    for(let i = 0 ; i< keyboards.length; i++){
    for(let j = 0 ; j< drives.length; j++){
        sumArr.push(keyboards[i] + drives[j]);
    }
    }
    for(let m = 0; m<sumArr.length; m++){
        if(sumArr[m] <=b){
            validPrices.push(sumArr[m]);
        }
    }
    
    if(validPrices.length > 0){
        return Math.max(...validPrices);
    }else{
        return -1;
    }

}

// https://www.hackerrank.com/challenges/electronics-shop/problem