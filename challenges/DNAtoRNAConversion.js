//Your DNA mostly has one of four nuceleic acid bases. G, C, A, T
//You want to swap the T for an RNA U.




//FIRST SOLUTION

function DNAtoRNA(dna) {
  for (i = 0; i < dna.length; i++) {

    if (dna[i] === 'T') {
      rna += 'U'
    } else {
      rna+= dna[i]
    }
    }
}
console.log(DNAtoRNA("TTT"));



//SECOND SOLUTION

function DNAtoRNA(dna) {
  var rna = '';

  for (var i = 0; i < dna.length; i++) {
    if (dna[i] === 'T') { //if (dna[i].includes("T")) {   //dna[i] gets you the specific index.
      rna += 'U'
    } else {
      rna += dna[i]
    }
  }

  return rna;
}


// COULD YOU USE .INCLUDES() ??



//need to check for lowercase too though.

// const DNAtoRNA = (dna) => {
//     const rna = dna.replace(/T/g, 'U');
//     return rna;
// }
//     console.log(DNAtoRNA('TTTT'));
