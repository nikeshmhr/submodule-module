export function sum(n1, n2) {
  return n1 + n2;
}

export function sub(n1, n2) {
  return n1 - n2;
}

export function multiply(n1, n2) {
  return n1 * n2;
}

export function divide(n1, n2) {
  return n1 / n2;
}

export function mod(n1, n2) {
  return n1 % n2;
}

export function isOdd(n1) {
  return mod(n1, 2) === 1;
}

export function isEven(n1) {
  return mod(n1, 2) === 0;
}

export function isPrime(n1) {
  return '';
}
