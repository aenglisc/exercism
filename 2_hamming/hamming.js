export default class Hamming {
  compute(baseStrand, newStrand) {
    if (baseStrand.length !== newStrand.length) {
      throw new Error('DNA strands must be of equal length.');
    }

    return baseStrand.split('').reduce((acc, nucleotide, index) =>
      (nucleotide === newStrand[index] ? acc : (acc + 1)), 0);
  }
}
