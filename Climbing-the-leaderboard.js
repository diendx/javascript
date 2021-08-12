
function climbingLeaderboard(ranked, player) {    
    const uniqueScores = [...new Set(ranked)]
    const result = []
    let lastIndex = uniqueScores.length
    
    //  trả ranker theo 1 danh sách ( không lặp)
    for(const game of player) {    
        for(var i = lastIndex; i > 0; i--) {
            const previous = uniqueScores[i - 1]
            if(game > previous) continue
            if(game < previous) result.push(i + 1)
            else result.push(i)
            
            break
        }
       
        if(i === 0) result.push(1)
        
        lastIndex = i }
    return result
}

// https://www.hackerrank.com/challenges/climbing-the-leaderboard/problem