function pageCount(n, p) {
    let flips = Math.floor(p / 2);
    let revFlips = Math.floor(n / 2) - flips;
    if (flips < revFlips) {
      return flips;
    }
    else {
      return revFlips;
    }
  }

//   https://www.hackerrank.com/challenges/drawing-book/problem

// Hàm Math.floor() sẽ làm tròn số được gán khi gọi hàm.
// Hàm sẽ trả về số nguyên gần nhất nhỏ hơn số truyền vào.
// Nếu truyền vào hàm một số nguyên, nó return về số nguyên đó.
// Nếu truyền vào một giá trị không phải số, hàm sẽ trả về NaN.