/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
class Bob {
  hey(message) {
    const trimmedMessage = message.trim();
    const isEmpty = trimmedMessage === '';
    if (isEmpty) { return 'Fine. Be that way!'; }

    const upCaseMsg = message.toUpperCase();
    const lowCaseMsg = message.toLowerCase();
    const isCaps = message === upCaseMsg && message !== lowCaseMsg;
    if (isCaps) { return 'Whoa, chill out!'; }

    const finalSymbol = message.charAt(message.length - 1);
    const isQuestion = finalSymbol === '?';
    if (isQuestion) { return 'Sure.'; }

    return 'Whatever.';
  }
}

export default Bob;

