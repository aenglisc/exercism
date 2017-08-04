const isNatural = num => num >= 1 && num % 1 === 0;

const isPrime = (num) => {
  if (num === 2) { return true; }

  const sqrtNum = Math.sqrt(num);
  if (num <= 1 || num % 2 === 0) { return false; }

  const iterCheck = (div) => {
    if (div > sqrtNum) { return true; }
    if (num % div === 0) { return false; }
    return iterCheck(div + 2);
  };

  return iterCheck(3);
};

const notNatErr = 'Classification is only possible for natural numbers.';

export default class PerfectNumbers {
  classify(num) {
    if (!isNatural(num)) { throw new Error(notNatErr); }
    if (isPrime(num)) { return 'deficient'; }

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
