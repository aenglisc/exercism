export default class Transcriptor {
  toRna(strand) {
    const result = strand.split('').map((nucleotide) => {
      if (nucleotide === 'C') { return 'G'; }
      if (nucleotide === 'G') { return 'C'; }
      if (nucleotide === 'A') { return 'U'; }
      if (nucleotide === 'T') { return 'A'; }
      throw new Error('Invalid input DNA.');
    }).join('');
    return result;
  }
}
