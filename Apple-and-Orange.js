function countApplesAndOranges(houseLeft, houseRight, appleTree, orangesTree, apples, oranges) {
    let applesCount = 0;
    let orangesCount = 0;

    apples.forEach(apple => {
        let distant = apple + appleTree;
        if (distant >= houseLeft && distant <= houseRight) applesCount += 1;
    });

    oranges.forEach(orange => {
        let distant = orange + orangesTree;
        if (distant >= houseLeft && distant <= houseRight) orangesCount += 1;
    });

    console.log(applesCount);
    console.log(orangesCount);
}