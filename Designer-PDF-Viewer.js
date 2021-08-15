function designerPdfViewer(h, word) {
  
    let letters = "abcdefghijklmnopqrstuvwxyz";
    let letterHeight = [];
    
    for (let i = 0; i < word.length; i++){
      letterHeight.push(h[letters.indexOf(word[i])]);
    }
    
    let tallest = letterHeight.sort()[letterHeight.length-1];
    
    return tallest * word.length;
    
  }
// https://www.hackerrank.com/challenges/designer-pdf-viewer/problem?h_r=next-challenge&h_v=zen