function catAndMouse(catA, catB, mouse) {
    
    const a = Math.abs(mouse - catA);
    const b = Math.abs(mouse - catB)
    
    if (a < b) {
      return "Cat A"
    } else if (a > b) {
      return "Cat B"
    } else {
      return "Mouse C"
    }
    
}

// https://www.hackerrank.com/challenges/cats-and-a-mouse/problem