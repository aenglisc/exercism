// is num a natural number?
const notNatural = num => !(num >= 1 && num % 1 === 0);

// is num even?
const isEven = num => num % 2 === 0;

// is num even and perfect?
// no odd perfect numbers have been found, so this might be redundant
const isEvenPerfect = (num) => {
  if (isEven(num)) {
    const numBinary = Number(num).toString(2);

    if (!isEven(numBinary.length)) {
      const chunkOne = numBinary.slice(0, -numBinary.length / 2);
      const chunkTwo = numBinary.slice(-numBinary.length / 2);

      if (!chunkOne.includes(0) && !chunkTwo.includes(1)) {
        return true;
      }
    }
  }
  return false;
};

// in progress
const isOddAbundant = (num) => {
  if (num < 945) { return false; }
  return true;
};

// is num a prime?
const isPrime = (num) => {
  if (num === 2) { return true; }
  if (num <= 1 || isEven(num)) { return false; }

  const sqrtNum = Math.sqrt(num);
  const iterCheck = (div) => {
    if (div > sqrtNum) { return true; }
    if (num % div === 0) { return false; }
    return iterCheck(div + 2);
  };

  return iterCheck(3);
};

// error contents
const notNatErrText = 'Classification is only possible for natural numbers.';

// solution
export default class PerfectNumbers {
  classify(num) {
    if (notNatural(num)) { throw new Error(notNatErrText); }
    if (isPrime(num)) { return 'deficient'; }
    if (isEvenPerfect(num)) { return 'perfect'; }
    // in progress
    if (isOddAbundant(num)) { return 'abundant'; }

    // very inefficient for large numbers
    const iterClassify = (div, sum) => {
      if (num === div) {
        if (num === sum) { return 'perfect'; }
        if (num < sum) { return 'abundant'; }
        if (num > sum) { return 'deficient'; }
      }
      if (num % div === 0) { return iterClassify(div + 1, sum + div); }
      return iterClassify(div + 1, sum);
    };

    return iterClassify(1, 0);
  }
}
