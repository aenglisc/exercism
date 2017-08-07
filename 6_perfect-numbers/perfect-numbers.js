// Is num a natural number?
const isNatural = num => (num >= 1 && num % 1 === 0);

// Is num even?
const isEven = num => num % 2 === 0;

// Is num perfect?
const isPerfect = (num) => {
  // No odd perfect numbers have been found
  if (isEven(num)) {
    const numBinary = Number(num).toString(2);

    if (!isEven(numBinary.length)) {
      const chunkOnes = numBinary.slice(0, -numBinary.length / 2);
      const chunkZeroes = numBinary.slice(-numBinary.length / 2);

      const perfect = !chunkOnes.includes(0) && !chunkZeroes.includes(1);
      return perfect;
    }
  }
  return false;
};

// Is num a prime?
const isPrime = (num) => {
  if (!isNatural(num)) { return false; }
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

// Is num a semi-prime?
const isSemiPrime = (num) => {
  const notSemiPrime = num === 6 || isPrime(num);
  if (notSemiPrime) { return false; }

  if (isEven(num)) { return isPrime(num / 2); }

  const iter = (div = 3) => {
    if (num % div === 0) { return isPrime(num / div); }
    return iter(div + 2);
  };
  return iter();
};

// Is num abundant?
const isAbundant = (num) => {
  // The smallest odd abundant number is 945.
  const notAbundant = (!isEven(num) && num < 945) ||
  // The smallest abundant number not divisible by 2 or by 3 is 5391411025
  (num < 5391411025 && !(num % 3 === 0 || num % 2 === 0));

  if (notAbundant) { return false; }

  const isRootPrime = isPrime(Math.sqrt(num));
  const isDeficient = isPrime(num) || isSemiPrime(num) || isRootPrime;
  if (isDeficient) { return false; }

  const iter = (div = 2, sum = 1) => {
    if (div === num) { return sum > num; }

    if (num % div === 0) {
      // Every multiple of an abundant number is abundant.
      // Every multiple (beyond 1) of a perfect number is abundant.
      const abundant = isAbundant(div) || isPerfect(div);
      return abundant ? true : iter(div + 1, sum + div);
    }
    return iter(div + 1, sum);
  };
  return iter();
};

// error text
const notNatErrText = 'Classification is only possible for natural numbers.';

// solution
export default class PerfectNumbers {
  classify(num) {
    if (!isNatural(num)) { throw new Error(notNatErrText); }
    if (isPerfect(num)) { return 'perfect'; }
    if (isAbundant(num)) { return 'abundant'; }
    return 'deficient';
  }
}
